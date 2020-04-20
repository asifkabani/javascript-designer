import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from 'src/components/layouts';
import {
  Card,
  CategoryLabel,
  CardContent,
  ArticleContent,
  Date,
  Headline,
  Excerpt,
  More,
} from 'src/components/layouts/basecss';
import { createLabel } from '../components/util';

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
`;

export default ({ data }) => {
  return (
    <Layout>
      <ArticleContent>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link
            key={node.id}
            to={node.fields.slug}
            style={{ textDecoration: 'none' }}
          >
            <Card>
              <CategoryLabel label={createLabel(node.frontmatter.category)}>
                {node.frontmatter.category}
              </CategoryLabel>
              <CardContent>
                <Headline>{node.frontmatter.title}</Headline>
                <Date>{node.frontmatter.date}</Date>
                <Excerpt>{node.excerpt}</Excerpt>
                <More />
              </CardContent>
            </Card>
          </Link>
        ))}
      </ArticleContent>
    </Layout>
  );
};
