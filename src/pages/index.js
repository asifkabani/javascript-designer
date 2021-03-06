import React from "react";
import { navigate } from "gatsby";
import Layout from "../components/layouts";
import { Box, ArticleContent, Category, Date, Headline, Excerpt, More } from '../layouts/basecss';

// Color label depending on blog cateogry.
const createLabel = (category) => {
  let backgroundColor = '';
  switch (category) {
    case 'HTML':
      backgroundColor = '#E44D26'
      break;
    case 'CSS':
      backgroundColor = '#0070BA'
      break;
    case 'JavaScript':
      backgroundColor = '#63A715'
      break;
  }
  return (
    <Category style={{ backgroundColor }}>
      {category}
    </Category>
  );
}

export default () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <Layout>
        <ArticleContent>
          {data.allMarkdownRemark.edges.map(({ node }) =>
            <Box key={node.id}>
              {createLabel(node.frontmatter.category)}
              <div style={{ padding: 30 }}>
                <Headline>{node.frontmatter.title}</Headline>
                <Date>{node.frontmatter.date}</Date>
                <Excerpt>{node.excerpt}</Excerpt>
                <Link navigate={node.fields.slug} style={{ textDecoration: 'none' }}>
                  <More>Read</More>
                </Link>
              </div>
            </Box>
          )}
        </ArticleContent>
      </Layout>
    )}
  />
);

