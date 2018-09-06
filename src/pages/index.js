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

const Content = styled.main`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(autofit, minmax(200px, 1fr));
`;

const Category = styled.p`
  color: #BABABA;
  font-size: 18px;
  font-weight: 400;
`;

const Date = styled.p`
  color: #999;
  margin-top: -10px;
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
    <Content>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <article key={node.id}>
          <Link to={node.fields.slug} style={{ textDecoration: 'none' }}>
            <Post>
              <div>
                <Category>
                  {node.frontmatter.category}
                </Category>
              </div>
              <Headline>
                {node.frontmatter.title}
              </Headline>
              <Date>
                  {node.frontmatter.date}
              </Date>
              <Excerpt>
                {node.excerpt}
              </Excerpt>
            </Post>
          </Link>
        </article>
      )}
    </Content>
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