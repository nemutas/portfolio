import '../styles/globals.css';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { GlobalStyles } from '../styles/GlobalStyles';
import { theme } from '../styles/theme';

import type { AppProps } from 'next/app'
function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		jssStyles?.parentElement?.removeChild(jssStyles)
	}, [])

	return (
		<>
			<Head>
				<title>MyApp</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			</Head>
			<RecoilRoot>
				<GlobalStyles />
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</RecoilRoot>
		</>
	)
}
export default MyApp
