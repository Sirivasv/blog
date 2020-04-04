module.exports = {
	siteMetadata: {
		bio: 'I am a MS student at UNAM in México.',
		title: `Saul Ivan Rivas Vega`,
		author: `Saul Ivan Rivas Vega`,
		description: `Personal blog of Saul Ivan Rivas Vega`,
		siteUrl: `https://sirv.top`,
		social: {
			twitter: `https://twitter.com/sirivasv`,
			github: 'https://github.com/sirivasv',
			youtube: 'https://www.youtube.com/channel/UCdegppamDMrM2L256RxyOMA',
			instagram: 'https://instagram.com/sirivasv',
			facebook: 'https://facebook.com/sirivasv',
			linkedin: 'https://linkedin.com/sirivasv',
			featuredmusic: 'https://distrokid.com/hyperfollow/saulivanrivasvega/asymptotic-notations',
			email: 'mailto:saul.ivan.rivas.vega@outlook.com'
		},
	},
	plugins: [
		`gatsby-plugin-emotion`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					{
						resolve: `gatsby-remark-katex`,
						options: {
							// Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
							strict: `warn`
						}
					},
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`,
					`gatsby-remark-external-links`,
				],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-feed`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Saul Ivan Rivas Vega Blog`,
				short_name: `sirivasv`,
				start_url: `/`,
				background_color: `#121212`,
				theme_color: `#1d1d1d`,
				display: `minimal-ui`,
				icon: `static/favicon.png`,
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				color: `salmon`,
			},
		},
		{
			resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
			options: {
				devMode: false,
			},
		},
		'gatsby-plugin-catch-links',
	],
};
