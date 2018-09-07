import React from "react";
import Link from "gatsby-link";
import { ThemeProvider } from 'styled-components';
import { Post, ArticleContent, Category, Date, Headline, Excerpt } from '../layouts/basecss';

export default ({ data }) => {
  return (
    <ArticleContent>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <article key={node.id}>
          <Link to={node.fields.slug} style={{ textDecoration: 'none' }}>
            <Post>
              <div>
                <Category>
                  {node.frontmatter.category}
                </Category>
              </div>
              <Headline>
                {node.frontmatter.title}
              </Headline>
              <Date>
                  {node.frontmatter.date}
              </Date>
              <Excerpt>
                {node.excerpt}
              </Excerpt>
            </Post>
          </Link>
        </article>
      )}
    </ArticleContent>
  );
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            category
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`