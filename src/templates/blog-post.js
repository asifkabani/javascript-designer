/*eslint no-unused-vars: "off"*/
/*eslint react/prop-types: "off"*/
/*eslint react/display-name: "off"*/

import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Seo from "../components/seo";
import Layout from "../components/layout";

const Bold = ({ children }) => <span className="bold">{children}</span>;
const Text = ({ children }) => <p className="align-center">{children}</p>;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      );
    },
  },
};

function BlogPostTemplate({ data }) {
  const { title, createdAt, content } = data.contentfulBlogPost;

  // const previous = {
  //   slug: data.previous.slug,
  //   title: data.previous.title,
  // };

  // const next = {
  //   slug: data.next.slug,
  //   title: data.next.title,
  // };

  return (
    <Layout>
      <Seo title={title} />
      <h1 className="">{title}</h1>
      <p className="mt-4 text-base text-gray-500 md:text-lg">{createdAt}</p>
      <div>{content && renderRichText(content, options)}</div>
      <div>
        {/* <div
            dangerouslySetInnerHTML={{
              __html: post.body?.childMarkdownRemark?.html,
            }}
          /> */}
        {/* {(previous || next) && (
            <nav>
              <ul>
                {previous && (
                  <li>
                    <Link to={`/blog/${previous.slug}`} rel="prev">
                      ← {previous.title}
                    </Link>
                  </li>
                )}
                {next && (
                  <li>
                    <Link to={`/blog/${next.slug}`} rel="next">
                      {next.title} →
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          )} */}
      </div>
    </Layout>
  );
}

BlogPostTemplate.propTypes = {
  data: PropTypes.object,
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulBlogPost(slug: { eq: $slug }) {
      contentful_id
      slug
      title
      createdAt(formatString: "MMMM DD, YYYY")
      content {
        raw
      }
    }
    previous: contentfulBlogPost(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulBlogPost(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`;
