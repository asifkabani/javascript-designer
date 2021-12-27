import { graphql, useStaticQuery } from "gatsby";

export const useAllContentfulBlogPosts = () => {
  const { allContentfulBlogPost } = useStaticQuery(
    graphql`
      query BlogIndexQuery {
        allContentfulBlogPost {
          nodes {
            id
            slug
            title
            excerpt
            createdAt(formatString: "MMMM DD, YYYY")
          }
        }
      }
    `
  );

  return allContentfulBlogPost;
};
