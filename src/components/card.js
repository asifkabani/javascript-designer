import React from "react";
import PropTypes from "prop-types";

function Card({ category, heading, date, excerpt }) {
  return (
    <article className="bg-white rounded-md shadow-lg transition-shadow hover:shadow-2xl">
      <span className="text-white text-sm font-normal block rounded-t-md p-4 bg-green-600">
        {category}
      </span>
      <div className="p-8">
        <h2 className="font-josefinSans text-gray-700 text-3xl">{heading}</h2>
        <p className="text-gray-500 text-lg">{date}</p>
        <p className="text-gray-500 text-lg leading-6">{excerpt}</p>
      </div>
    </article>
  );
}

Card.propTypes = {
  category: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Card;

// export const Box = styled.article`
//   background-color: #ffffff;
//   border-radius: 15px;
//   box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);
//   font-family: ${(props) => props.theme.font};
//   transition: box-shadow 0.5s;
//   &:hover {
//     box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.3);
//   }
// `;
