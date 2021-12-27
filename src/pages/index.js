import React from "react";
import { useAllContentfulBlogPosts } from "../hooks/useAllContentfulBlogPosts";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import Layout from "../components/layout";
import Card from "../components/card";
import SEO from "../components/seo";

function IndexPage() {
  const { nodes } = useAllContentfulBlogPosts();
  const { title } = useSiteMetadata();

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title={title}
      />
      {nodes.map((post) => (
        <article key={post.id}>
          <Card
            category="JavaScript"
            heading={post.title}
            date={post.createdAt}
            excerpt={post.excerpt}
          />
        </article>
      ))}
    </Layout>
  );
}

export default IndexPage;
