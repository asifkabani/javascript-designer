import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import authorImage from "../images/ak.jpeg";

function Bio() {
  const {
    author: { name },
  } = useSiteMetadata();

  return (
    <div className="flex justify-center pb-10">
      <img
        className="rounded-full w-14 h-14 ring-jsdYellow ring-2"
        src={authorImage}
        alt={name}
      />
      <p className="text-white w-96">
        Personal blog of {name}. You can follow me on Twitter or get in touch
        with me via email.
      </p>
    </div>
  );
}

export default Bio;
