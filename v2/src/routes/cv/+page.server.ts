import { error } from '@sveltejs/kit';
import contentfulFetch from '$lib/contentfulFetch';

interface Entry {
  date: string;
  content: string;
}

interface Section {
  title: string;
  entries: Entry[];
}

interface ApiResponse {
  data: {
    cvSectionCollection: {
      items: {
        title: string;
        entriesCollection: {
          items: {
            date: string;
            content: string;
          }[];
        };
      }[];
    };
  };
  fetching: boolean;
}

const query = `
	{
		cvSectionCollection {
			items {
				title,
				entriesCollection {
					items {
						date,
						content
					}
				}
			}
		}
	}
`;

export async function load(): Promise<{
  fetching: boolean;
  sections: Section[];
}> {
  const response = await contentfulFetch(query);

  if (!response.ok) {
    throw error(404, {
      message: response.statusText,
    });
  }

  const { data, fetching }: ApiResponse = await response.json();

  return {
    fetching,
    sections: data.cvSectionCollection.items.map((section) => ({
      title: section.title,
      entries: section.entriesCollection.items.map((entry) => ({
        date: entry.date,
        content: entry.content,
      })),
    })),
  };
}
