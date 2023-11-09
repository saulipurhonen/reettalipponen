import { error } from '@sveltejs/kit'
import contentfulFetch from '$lib/contentfulFetch'

// const query = `
// {
// 	employeeCollection{
//     items{
//       name,
//       jobTitle
//       startDate
//     }
//   }
// }
// `

const getPageContentByIdQuery = (id: string) => `query {
  pageText(id: "${id}") {
    heading
    content {
      json
    }
  }
}`

export async function load() {
  const response = await contentfulFetch(getPageContentByIdQuery('6QV9zwkdRBchyCu2JbdmZE'))

  if (!response.ok) {
    throw error(404, {
      message: response.statusText,
    })
  }

  const { data } = await response.json()

console.log(data)

  const { content } = data.pageText

  // return {
  //   employees: items.map((e) => {
  //     const options = { month: 'long', year: 'numeric' }
  //     const date = new Date(e.startDate)
  //     const formattedStartDate = new Intl.DateTimeFormat('en-US', options).format(date)

  //     return {
  //       ...e,
  //       startDate: formattedStartDate,
  //     }
  //   }),
  // }

  const pageContent = content.json.content.flatMap(
    (content: { content: unknown[] }) => content.content
  );

  console.log(pageContent)

  return {
    pageContent,
  }

  // return {
  //   employees: items.map((e: { startDate: string | number | Date }) => {

  //     return {...e, startDate: new Date(e.startDate)}})
  // }
}