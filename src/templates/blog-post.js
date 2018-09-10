import React from 'react';
import { Category, Date, Headline, Content, Excerpt } from '../layouts/basecss';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Content>
      <Headline>{post.frontmatter.title}</Headline>
      <Category>{post.frontmatter.category}</Category>
      <Date>{post.frontmatter.date}</Date>
      <Excerpt dangerouslySetInnerHTML={{ __html: post.html }} />
    </Content>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        category
        date
      }
    }
  }
`;