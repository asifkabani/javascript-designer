import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layouts';
import {
  Box,
  ArticleContent,
  Category,
  Date,
  Headline,
  Excerpt,
  More,
} from '../components/layouts/basecss';

// Color label depending on blog cateogry.
const createLabel = category => {
  let backgroundColor = '';
  switch (category) {
    case 'HTML':
      backgroundColor = '#E44D26';
      break;
    case 'CSS':
      backgroundColor = '#0070BA';
      break;
    case 'JavaScript':
      backgroundColor = '#63A715';
      break;

    default:
      break;
  }
  return <Category style={{ backgroundColor }}>{category}</Category>;
};

export default ({ data }) => {
  return (
    <Layout>
      <ArticleContent>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Box key={node.id}>
            {createLabel(node.frontmatter.category)}
            <div style={{ padding: 30 }}>
              <Headline>{node.frontmatter.title}</Headline>
              <Date>{node.frontmatter.date}</Date>
              <Excerpt>{node.excerpt}</Excerpt>
              <Link
                to={node.fields.slug}
                style={{ textDecoration: 'none' }}
              >
                <More>Read</More>
              </Link>
            </div>
          </Box>
        ))}
      </ArticleContent>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
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
