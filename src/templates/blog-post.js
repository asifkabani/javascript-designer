import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Details, Headline, Summary } from '../components/layouts/basecss';

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        category
        date(formatString: "MMMM DD, YYYY")
      }
      slug
    }
  }
`;

export default ({ data }) => {
  const post = data.mdx;
  const shortcodes = { Summary };

  return (
    <Layout>
      <Details>
        {post.frontmatter.date} &bull; {post.frontmatter.category}
      </Details>
      <Headline>{post.frontmatter.title}</Headline>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};
