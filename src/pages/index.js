import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from 'src/components/layouts';
import {
  Card,
  CategoryLabel,
  CategoryIcon,
  CardContent,
  ArticleContent,
  Date,
  Headline,
  Excerpt,
  More,
} from 'src/components/layouts/basecss';
import { createLabel, createIcon } from '../components/util';

import { IconContext } from 'react-icons';
import { DiHtml5, DDiCss3, DiJavascript1 } from 'react-icons/di';

export const query = graphql`
  query {
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
                {/* <CategoryIcon icon={node.frontmatter.category} /> */}
                <IconContext.Provider value={{ size: 15 }}>
                  <div
                    style={{ display: 'inline-block', verticalAlign: 'middle' }}
                  >
                    {createIcon(node.frontmatter.category)}
                  </div>
                </IconContext.Provider>
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
