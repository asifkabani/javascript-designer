import React from "react";
import Link from "gatsby-link";
import { Box, ArticleContent, Category, Date, Headline, Excerpt, More } from '../layouts/basecss';

const createLabel = (category) => {
  let backgroundColor = '';
  switch (category) {
    case 'HTML':
      backgroundColor = '#E44D26'
      break;
    case 'CSS':
      backgroundColor = '#0070BA'
      break;
    case 'JavaScript':
      backgroundColor = '#63A715'
      break;
  }
  return (
    <Category style={{ backgroundColor }}>
      {category}
    </Category>
  );
}

export default ({ data }) => {
  // console.log(data)
  return (
    <ArticleContent>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <Box key={node.id}>
          {createLabel(node.frontmatter.category)}
          <div style={{ padding: 30 }}>
            <Headline>{node.frontmatter.title}</Headline>
            <Date>{node.frontmatter.date}</Date>
            <Excerpt>{node.excerpt}</Excerpt>
            <Link to={node.fields.slug} style={{ textDecoration: 'none' }}>
              <More>Read</More>
            </Link>
          </div>
        </Box>
      )}
    </ArticleContent>
  );
}

export const query = graphql`
  query IndexQuery {
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
`

/* <Box key={node.id}>
<BoxHeading>
  <Category>{node.frontmatter.category}</Category>
</BoxHeading>
<Headline>{node.frontmatter.title}</Headline>
<Date>{node.frontmatter.date}</Date>
<Excerpt>{node.excerpt}</Excerpt>
<Link to={node.fields.slug} style={{ textDecoration: 'none' }}>
  <More>Read</More>
</Link>
</Box> */

