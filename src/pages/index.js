import React from "react";
import Link from "gatsby-link";
import { ThemeProvider } from 'styled-components';
import { Box, ArticleContent, Category, Date, Headline, Excerpt, More } from '../layouts/basecss';

export default ({ data }) => {
  return (
    <ArticleContent>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <Box key={node.id}>
              <Category>{node.frontmatter.category}</Category>
              <Headline>{node.frontmatter.title}</Headline>
              <Date>{node.frontmatter.date}</Date>
              <Excerpt>{node.excerpt}</Excerpt>
              <Link to={node.fields.slug} style={{ textDecoration: 'none' }}>
                <More>Read</More>
              </Link>
        </Box>
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