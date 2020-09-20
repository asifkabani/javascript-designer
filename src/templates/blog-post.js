import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { BlogCategory, Details, Headline } from '../components/layouts/basecss';

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        category
        date
      }
    }
  }
`;

export default ({ data }) => {
  const post = data.mdx;

  return (
    <Layout>
      <Headline>{post.frontmatter.title}</Headline>
      <BlogCategory>{post.frontmatter.category}</BlogCategory>
      <Details>{post.frontmatter.date}</Details>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  );
};
