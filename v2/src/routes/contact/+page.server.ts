import { error } from '@sveltejs/kit';
import contentfulFetch from '$lib/contentfulFetch';
import { GetPageContentByIdQuery } from '$lib/queries';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export async function load() {
  const response = await contentfulFetch(GetPageContentByIdQuery('2TUBsWx1GDFEmuNGNxJoMH'));

  if (!response.ok) {
    throw error(404, {
      message: response.statusText,
    });
  }

  const { data } = await response.json();

  const { content } = data.pageText;

  const pageContent = documentToHtmlString(content.json);

  return {
    pageContent,
  };
}
