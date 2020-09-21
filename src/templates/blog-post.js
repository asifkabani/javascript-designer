import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Details, Headline, Summary } from '../components/layouts/basecss';
import { DiscussionEmbed } from 'disqus-react';

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
  console.log(process);
  const post = data.mdx;
  const shortcodes = { Summary };

  // const disqusConfig = {
  //   shortname: process.env.GATSBY_DISQUS_NAME,
  //   config: { identifier: data.slug },
  // };

  return (
    <Layout>
      <Details>
        {post.frontmatter.date} &bull; {post.frontmatter.category}
      </Details>
      <Headline>{post.frontmatter.title}</Headline>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
      {/* <DiscussionEmbed {...disqusConfig} /> */}
    </Layout>
  );
};
