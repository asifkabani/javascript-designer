import React from "react";
import Link from "gatsby-link";
import styled from 'styled-components';

const Post = styled.article`
  background-color: 'red';
`;

export default ({ data }) => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '15px',
      boxShadow: '0px 10px 30px 0px rgba(0, 0, 0, 0.1)',
      padding: 50
    }}>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <p>{node.frontmatter.category}</p>
            <h3>
              {node.frontmatter.title}{" "}
              <span color="#BBB">— {node.frontmatter.date}</span>
            </h3>
            <p>
              {node.excerpt}
            </p>
          </Link>
        </div>
      )}
    </div>
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