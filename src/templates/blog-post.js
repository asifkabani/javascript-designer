import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts';
import {
  BlogCategory,
  Date,
  Headline,
  Excerpt,
} from '../components/layouts/basecss';

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Headline>{post.frontmatter.title}</Headline>
      <BlogCategory>{post.frontmatter.category}</BlogCategory>
      <Date>{post.frontmatter.date}</Date>
      <Excerpt dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
