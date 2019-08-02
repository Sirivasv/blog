export default `
	code[class*='language-'],
	pre[class*='language-'] {
		color: #657b83; /* base00 */
		font-family: 'Fira Mono', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
		font-size: 16px;
		text-align: left;
		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		word-wrap: normal;
		transition: 0.4s ease;

		line-height: 1.65;

		-moz-tab-size: 2;
		-o-tab-size: 2;
		tab-size: 2;

		-webkit-hyphens: none;
		-moz-hyphens: none;
		-ms-hyphens: none;
		hyphens: none;
	}

	pre[class*='language-']::-moz-selection,
	pre[class*='language-'] ::-moz-selection,
	code[class*='language-']::-moz-selection,
	code[class*='language-'] ::-moz-selection {
		background: #eee8d5; /* base02 */
	}

	pre[class*='language-']::selection,
	pre[class*='language-'] ::selection,
	code[class*='language-']::selection,
	code[class*='language-'] ::selection {
		background: #eee8d5; /* base02 */
	}

	/* Code blocks */
	pre[class*='language-'] {
		padding: 1em;
		margin: 0.5em 0;
		overflow: auto;
		border-radius: 0.3em;
	}

	:not(pre) > code[class*='language-'],
	pre[class*='language-'] {
		background-color: rgba(253,246,227,0.5);
	}

	/* handle initial background for dark mode separately to avoid flashing eyes at night */
	body.dark :not(pre) > code[class*='language-'],
	body.dark pre[class*='language-'] {
		background-color: rgba(255, 255, 255, 0.05);
	}

	/* Inline code */
	:not(pre) > code[class*='language-'] {
		color: #6c71c4;
		padding: 0.1em;
		border-radius: 0.3em;
	}

	.token.comment,
	.token.prolog,
	.token.doctype,
	.token.cdata {
		color: #93a1a1; /* base1 */
	}

	.token.punctuation {
		color: #586e75; /* base01 */
	}

	.namespace {
		opacity: 0.7;
	}

	.token.property,
	.token.tag,
	.token.boolean,
	.token.number,
	.token.constant,
	.token.symbol,
	.token.deleted {
		color: #268bd2; /* blue */
	}

	.token.selector,
	.token.attr-name,
	.token.string,
	.token.char,
	.token.builtin,
	.token.url,
	.token.inserted {
		color: #2aa198; /* cyan */
	}

	.token.entity {
		color: #657b83; /* base00 */
		background: #eee8d5; /* base2 */
	}

	.token.atrule,
	.token.attr-value,
	.token.keyword {
		color: #d33682;
		font-style: italic;
		font-family: 'Space Mono';
	}

	.token.function,
	.token.class-name {
		color: #b58900; /* yellow */
	}

	.token.regex,
	.token.important,
	.token.variable {
		color: #cb4b16; /* orange */
	}

	.token.important,
	.token.bold {
		font-weight: bold;
	}
	.token.italic {
		font-family: 'Space Mono';
		font-style: italic;
	}

	.token.entity {
		cursor: help;
	}
`;