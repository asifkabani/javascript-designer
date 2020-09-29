const dictionary = require('./gatsby-dictionary');

module.exports = {
  siteMetadata: {
    title: 'JavaScript Designer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-theme-material-ui`,
    'gatsby-plugin-styled-components',
    'gatsby-plugin-root-import',
    `gatsby-plugin-feed-mdx`,
    `gatsby-remark-reading-time`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: 'youtube',
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ],
            },
          },
          {
            resolve: `gatsby-remark-acronyms`,
            options: {
              acronyms: dictionary,
            },
          },
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
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
