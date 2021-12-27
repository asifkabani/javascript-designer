import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

function Logo() {
  const { site } = useStaticQuery(graphql`
    query SiteName {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const title = site.siteMetadata.title;
  const mainText = title.split(" ")[0];
  const secondaryText = title.split(" ")[1];

  return (
    <Link to="/">
      <h1 className="font-josefinSans font-medium text-jsdYellow text-6xl inline-block leading-3 tracking-tighter pt-10">
        {mainText}
        <br />
        <span className="font-mrDafoe text-white text-6xl inline-block pb-10">
          {secondaryText}
        </span>
      </h1>
    </Link>
  );
}

export default Logo;
