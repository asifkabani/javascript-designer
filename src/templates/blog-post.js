import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {
  BlogPostCategory,
  Details,
  Headline,
} from '../components/layouts/basecss';

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        category
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export default ({ data }) => {
  const post = data.mdx;

  return (
    <Layout>
      <Details>
        {post.frontmatter.date} &bull; {post.frontmatter.category}
      </Details>
      <Headline>{post.frontmatter.title}</Headline>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  );
};
