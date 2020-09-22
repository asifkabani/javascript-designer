import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from 'src/components/layouts';
import {
  Card,
  CategoryLabel,
  CardContent,
  ArticleContent,
  Details,
  Headline,
  Excerpt,
  More,
} from 'src/components/layouts/basecss';
import { createLabel } from '../components/util';

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            category
            excerptText
          }
          fields {
            slug
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`;

export default ({ data }) => {
  return (
    <Layout>
      <ArticleContent>
        {data.allMdx.edges.map(({ node }) => (
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
                <Details>
                  {node.frontmatter.date} &bull; {node.fields.readingTime.text}
                </Details>
                <Excerpt>{node.frontmatter.excerptText}</Excerpt>
                <More />
              </CardContent>
            </Card>
          </Link>
        ))}
      </ArticleContent>
    </Layout>
  );
};
