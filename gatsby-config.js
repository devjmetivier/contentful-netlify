module.exports = {
    siteMetadata: {
        title: 'Gatsby Default Starter',
        desc: 'A new Blog',
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: 'i7omi472huhb',
                accessToken: '8e7aaa94d7d792151a9592077eeec8e74aed86942e893114ab2afe453c34e055',
            },
        },
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
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'img',
                path: `${__dirname}/static/assets`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-transformer-remark',
    ],
};

// pathPrefix: '/levelupgatsby',
