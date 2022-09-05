module.exports = {
  siteMetadata: {
    title: `Theodore Nestel Portfolio site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
    },
    __key: "images"
  }]
};