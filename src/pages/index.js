import React from "react";
import Link from "gatsby-link";
import styled from 'styled-components';

const Post = styled.div`
  background-color: #FFFFFF;
  border-radius: 15px;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);
  padding: 50px;
  font-family: 'Josefin Sans';
`;

const Category = styled.p`
  color: #BABABA;
  font-size: 18px;
  font-weight: 400;
  display: inline;
`;

const Date = styled.p`
  color: #999;
  display: inline;
`;

const Headline = styled.h2`
  color: #676767;
  font-family: 'Josefin Sans';
`;

const Excerpt = styled.p`
  color: #999;
`;

export default ({ data }) => {
  return (
    <main style={{ display: 'grid', gridGap: '30px', gridTemplateColumns: 'repeat(autofit, minmax(200px, 1fr))'}}>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <article key={node.id}>
          <Link to={node.fields.slug} style={{ textDecoration: 'none' }}>
            <Post>
              <div>
                <Category>
                  {node.frontmatter.category}
                </Category>
                <Date>
                  {node.frontmatter.date}
                </Date>
              </div>
              <Headline>
                {node.frontmatter.title}
              </Headline>
              <Excerpt>
                {node.excerpt}
              </Excerpt>
            </Post>
          </Link>
        </article>
      )}
    </main>
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