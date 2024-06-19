import React from 'react'
import { useAllContentfulBlogPosts, useSiteMetadata } from '../hooks'
import { createLabel } from '../util'
import Layout from '../components/layout'
import Card from '../components/card'
import Button from '../components/button'
import Head from '../components/seo'

function IndexPage() {
  const { nodes } = useAllContentfulBlogPosts()
  const { title, description } = useSiteMetadata()

  return (
    <Layout>
      <Head title={title} description={description} />
      <main className="grid grid-cols-cards gap-12">
        {nodes.map((post) => (
          <article key={post.contentful_id}>
            <Card>
              <Card.Category bgColor={createLabel(post.category)}>
                {post.category}
              </Card.Category>
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
