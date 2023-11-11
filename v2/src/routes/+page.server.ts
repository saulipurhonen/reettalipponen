import { error } from '@sveltejs/kit';
import contentfulFetch from '$lib/contentfulFetch';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const getPageContentByIdQuery = (id: string) => `query {
  pageText(id: "${id}") {
    heading
    content {
      json
    }
  }
}`;

export async function load() {
	const response = await contentfulFetch(getPageContentByIdQuery('6QV9zwkdRBchyCu2JbdmZE'));

	if (!response.ok) {
		throw error(404, {
			message: response.statusText
		});
	}

	const { data } = await response.json();

	const { content } = data.pageText;

	const pageContent = documentToHtmlString(content.json);

	return {
		pageContent
	};
}
