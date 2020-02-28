import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {
  BlogCategory,
  Date,
  Headline,
  Excerpt,
} from '../components/layouts/basecss';

export default () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <>
        <Headline>{data.post.frontmatter.title}</Headline>
        <BlogCategory>{data.post.frontmatter.category}</BlogCategory>
        <Date>{data.post.frontmatter.date}</Date>
        <Excerpt dangerouslySetInnerHTML={{ __html: data.post.html }} />
      </>
    )}
  />
);
