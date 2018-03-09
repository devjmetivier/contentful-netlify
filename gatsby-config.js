module.exports = {
    siteMetadata: {
        title: 'Gatsby Default Starter',
        desc: 'A new Blog',
    },
    pathPrefix: '/levelupgatsby',
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'img',
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                excerpt_separator: '<!-- end -->',
            },
        },
        'gatsby-transformer-remark',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
    ],
};
