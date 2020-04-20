module.exports = {
  siteMetadata: {
    title: 'JavaScript Designer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`,
    `gatsby-theme-material-ui`,
    'gatsby-plugin-styled-components',
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Josefin Sans`, `Mr Dafoe`],
      },
    },
  ],
};
