import React from 'react'
import { useAllContentfulBlogPosts, useSiteMetadata } from '../hooks'
import Layout from '../components/layout'
import Card from '../components/card'
import Button from '../components/button'
import SEO from '../components/seo'

function IndexPage() {
  const { nodes } = useAllContentfulBlogPosts()
  const { title } = useSiteMetadata()

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title={title}
      />
      <main className="grid gap-12 grid-cols-cards">
        {nodes.map((post) => (
          <article key={post.contentful_id}>
            <Card>
              <Card.Category>{'General'}</Card.Category>
              <div className="p-8">
                <Card.Header>{post.title}</Card.Header>
                <Card.Date>{post.createdAt}</Card.Date>
                <Card.Excerpt>{post.excerpt}</Card.Excerpt>
                <Button to={post.slug}>Read ⟶</Button>
              </div>
            </Card>
          </article>
        ))}
      </main>
    </Layout>
  )
}

export default IndexPage
