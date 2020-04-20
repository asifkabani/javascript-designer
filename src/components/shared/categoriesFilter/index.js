import React from 'react';
import shortId from 'shortid';
import { createLabel } from 'src/components/util';
import {
  CategoryFilter,
  CategoryFilterContainer,
} from 'src/components/layouts/basecss';

export default ({ data }) => {
  const blogCategories = data.map(cat => (
    <CategoryFilter
      key={shortId.generate()}
      label={createLabel(cat.node.frontmatter.category)}
    >
      {cat.node.frontmatter.category}
    </CategoryFilter>
  ));

  return (
    <CategoryFilterContainer>
      <CategoryFilter label={createLabel()}>All</CategoryFilter>
      {blogCategories}
    </CategoryFilterContainer>
  );
};
