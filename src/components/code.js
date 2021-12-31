import React, { useEffect } from "react";
import PropTypes from "prop-types";
import MarkdownIt from "markdown-it";
import Prism from "prismjs";

const md = new MarkdownIt();

const CodeSnippet = ({ markdown }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return <div dangerouslySetInnerHTML={{ __html: md.render(markdown) }} />;
};

CodeSnippet.propTypes = {
  markdown: PropTypes.node.isRequired,
};

export default CodeSnippet;
