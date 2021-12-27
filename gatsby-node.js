const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const blogPost = path.resolve("./src/templates/blog-post.js");

  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          nodes {
            slug
            title
            excerpt
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    );
    return;
  }

  const posts = result.data.allContentfulBlogPost.nodes;

  // Create pages if posts exist along with previous and next context
  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : posts[index - 1].slug;
      const nextPostSlug =
        index === posts.length - 1 ? null : posts[index + 1].slug;

      createPage({
        path: `/blog/${post.slug}/`,
        component: blogPost,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      });
    });
  }
};
