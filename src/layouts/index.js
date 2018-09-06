import React from 'react';
import Helmet from 'react-helmet';

import Header from '../layouts/header';
import Footer from '../layouts/footer';
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <section
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </section>
    <Footer />
  </div>
)

export default Layout

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`