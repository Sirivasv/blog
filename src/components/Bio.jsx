import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { mediaMax } from '@divyanshu013/media';
import { rhythm } from '../utils/typography';
import { getTheme } from '../utils/theme';
import ThemeContext from './ThemeContext';

const Bio = () => {
	const data = useStaticQuery(graphql`
		query BioQuery {
			avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
				childImageSharp {
					fixed(width: 64, height: 64) {
						...GatsbyImageSharpFixed
					}
				}
			}
			site {
				siteMetadata {
					author
					social {
						twitter
						github
						youtube
					}
				}
			}
		}
	`);

	const { author, social } = data.site.siteMetadata;
	const { theme } = useContext(ThemeContext);
	const { color, secondary } = getTheme(theme);
	return (
		<div
			css={{
				display: `grid`,
				gridTemplateColumns: 'auto auto',
				alignItems: 'start',
				a: {
					borderBottomColor: color,
					'&:hover, &:focus': {
						borderBottomStyle: 'solid',
						borderBottomColor: color,
					},
				},
				[mediaMax.small]: {
					gridTemplateColumns: 'auto',
				},
			}}
		>
			<Image
				fixed={data.avatar.childImageSharp.fixed}
				alt={author}
				css={{
					marginTop: 8,
					marginRight: rhythm(1),
					borderRadius: `100%`,
					opacity: 0.87,
					[mediaMax.small]: {
						marginBottom: 8,
					},
				}}
				imgStyle={{
					borderRadius: `50%`,
				}}
			/>
			<div css={{ fontSize: 16, color: secondary }}>
				<p>
					Personal blog of <a href={social.twitter}>{author}</a>. I'm a{' '}
					<a href={social.github}>MS student in computer science at UNAM in México</a>, and I am
					interested in the computational analysis of audio signals.
					I am also interested in cognitive perception of music and creative systems.
					I sometimes play and create songs using GarageBand or Ableton you can fin them in my <a href={social.youtube}>Youtube Channel</a>.
					I also share some news regarding Music Information Retrieval at my <a href={social.twitter}>twitter</a>.
				</p>
			</div>
		</div>
	);
};

export default Bio;
