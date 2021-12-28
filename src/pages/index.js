import React from "react";
import { useAllContentfulBlogPosts } from "../hooks/useAllContentfulBlogPosts";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import Layout from "../components/layout";
import Card from "../components/card";
import Button from "../components/button";
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
        <article key={post.contentful_id}>
          <Card>
            <Card.Category>{"Java"}</Card.Category>
            <div className="p-8">
              <Card.Header>{post.title}</Card.Header>
              <Card.Date>{post.createdAt}</Card.Date>
              <Card.Excerpt>{post.excerpt}</Card.Excerpt>
              <Button>Read ⟶</Button>
            </div>
          </Card>
        </article>
      ))}
    </Layout>
  );
}

export default IndexPage;
