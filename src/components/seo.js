/*eslint no-unused-vars: "off"*/

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

function SEO({ seoDescription, lang, meta, seoKeywords, seoTitle }) {
  const {
    title,
    description,
    keywords,
    author: { name },
  } = useSiteMetadata();

  const metaTitle = title || seoTitle;
  const metaKeywords = keywords || seoKeywords;
  const metaDescription = description || seoDescription;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={
        [
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: metaTitle,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: name,
          },
          {
            name: `twitter:title`,
            content: metaTitle,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ]
        // .concat(
        //   metaKeywords.length > 0
        //     ? {
        //         name: `keywords`,
        //         content: metaKeywords.join(`, `),
        //       }
        //     : []
        // )
        // .concat(meta)
      }
      title={metaTitle}
      titleTemplate={`%s | ${metaTitle}`}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  keywords: [],
  meta: [],
};

SEO.propTypes = {
  seoDescription: PropTypes.string,
  seoKeywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
  seoTitle: PropTypes.string,
  // seoTitle: PropTypes.string.isRequired,
};

export default SEO;
