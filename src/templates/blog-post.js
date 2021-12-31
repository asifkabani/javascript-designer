/*eslint no-unused-vars: "off"*/
/*eslint react/prop-types: "off"*/
/*eslint react/display-name: "off"*/

import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Seo from "../components/seo";
import Layout from "../components/layout";
import CodeSnippet from "../components/code";

const Bold = ({ children }) => (
  <strong className="bg-gray-200">{children}</strong>
);
const Italic = ({ children }) => <em>{children}</em>;
const Underline = ({ children }) => <u>{children}</u>;
const Text = ({ children }) => <p>{children}</p>;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data;
      return (
        <a href={uri} className="underline hover:no-underline text-blue-700">
          {children}
        </a>
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      const isMarkdown = node.content[0].value.startsWith("```");
      if (isMarkdown) {
        return <CodeSnippet markdown={node.content[0].value} />;
      }
      return <Text>{children}</Text>;
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      );
    },
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
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
  const previous = data.previous;
  const next = data.next;

  return (
    <Layout>
      <Seo title={title} />
      <h1 className="text-gray-700">{title}</h1>
      <p className="mt-4 text-base text-gray-500 md:text-lg">{createdAt}</p>
      <div>{content && renderRichText(content, options)}</div>
      <div>
        {(previous || next) && (
          <nav>
            <ul>
              {previous && (
                <li>
                  <Link to={"/" + previous.slug} rel="prev">
                    ← {previous.title}
                  </Link>
                </li>
              )}
              {next && (
                <li>
                  <Link to={"/" + next.slug} rel="next">
                    {next.title} →
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        )}
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
