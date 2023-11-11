export const GetPageContentByIdQuery = (id: string) => `query {
  pageText(id: "${id}") {
    heading
    content {
      json
    }
  }
}`;