import { graphql, useStaticQuery } from 'gatsby'

export const useAllContentfulBlogPosts = () => {
  const { allContentfulBlogPost } = useStaticQuery(
    graphql`
      query BlogIndexQuery {
        allContentfulBlogPost(sort: { fields: [createdAt], order: DESC }) {
          nodes {
            slug
            title
            category
            excerpt
            createdAt(formatString: "MMMM DD, YYYY")
            contentful_id
          }
          pageInfo {
            perPage
          }
        }
      }
    `
  )

  return allContentfulBlogPost
}
