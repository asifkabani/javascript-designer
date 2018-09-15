import React from 'react';
import { BlogCategory, Date, Headline, Content, Excerpt } from '../layouts/basecss';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <Headline>{post.frontmatter.title}</Headline>
      <BlogCategory>{post.frontmatter.category}</BlogCategory>
      <Date>{post.frontmatter.date}</Date>
      <Excerpt dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        category
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;