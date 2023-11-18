import { error } from '@sveltejs/kit';
import contentfulFetch from '$lib/contentfulFetch';
import { GetPageContentByIdQuery } from '$lib/queries';
import { documentToHtmlString, type Next } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import type { Block, Inline } from '@contentful/rich-text-types';

export async function load() {
  const response = await contentfulFetch(GetPageContentByIdQuery('6QV9zwkdRBchyCu2JbdmZE'));

  if (!response.ok) {
    throw error(404, {
      message: response.statusText,
    });
  }

  const { data } = await response.json();

  const { content } = data.pageText;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: Block | Inline, next: Next) =>
        `<p class="animate">${next(node.content)}</p>`,
    },
  };

  const pageContent = documentToHtmlString(content.json, options);

  return {
    pageContent,
  };
}
