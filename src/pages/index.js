import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layouts';
import {
  Card,
  ArticleContent,
  Date,
  Headline,
  Excerpt,
  More,
} from '../components/layouts/basecss';
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
          <Link to={node.fields.slug} style={{ textDecoration: 'none' }}>
            <Card key={node.id}>
              {createLabel(node.frontmatter.category)}
              <div style={{ padding: 30 }}>
                <Headline>{node.frontmatter.title}</Headline>
                <Date>{node.frontmatter.date}</Date>
                <Excerpt>{node.excerpt}</Excerpt>
                <More />
              </div>
            </Card>
          </Link>
        ))}
      </ArticleContent>
    </Layout>
  );
};
