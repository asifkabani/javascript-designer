import React from 'react';
import Helmet from 'react-helmet';

import Header from './header';
import Footer from './footer';
import { Content } from './basecss';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}/>
    <Header />
    <Content>
      {children()}
    </Content>
    <Footer />
  </div>
);

export default Layout;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`