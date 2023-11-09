import { client } from '$lib/contentfulClient';

export async function get() {
    // get all blogs from Contentful
    const pageContent = await client.getEntries({
        content_type: 'pageText' // pageText is the id of the content type
    });

    if (pageContent) {
        return {
            status: 200,
            body: {
              pageContent
            }
        };
    }

    return {
        status: 404
    };
}
