import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts';
import {
  BlogCategory,
  Details,
  Headline,
  Excerpt,
} from '../components/layouts/basecss';

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Headline>{post.frontmatter.title}</Headline>
      <BlogCategory>{post.frontmatter.category}</BlogCategory>
      <Details>{post.frontmatter.date}</Details>
      <Excerpt dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
