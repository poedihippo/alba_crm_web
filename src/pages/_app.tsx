/* eslint-disable react-hooks/exhaustive-deps */
import 'src/shared/styles/antd.less';
import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider, MutationCache } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';

import { useEffect, useState } from 'react';

import LayoutComponent from 'src/shared/components/Layout';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { checkIsPrivateRoute } from 'src/shared/helpers/route';

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const user = Cookies.get('user');

	useEffect(() => {
		const handleStart = (url: string) => {
			console.log(`Loading: ${url}`);
		};
		const handleStop = () => {};

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleStop);
		router.events.on('routeChangeError', handleStop);

		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeComplete', handleStop);
			router.events.off('routeChangeError', handleStop);
		};
	}, [router]);

	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 60 * 1000, // 1m
						retry: false,
					},
				},
				mutationCache: new MutationCache({
					onError: (err) => {
						console.log(err);
					},
				}),
			}),
	);

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<LayoutComponent isShow={checkIsPrivateRoute(router.route) && !!user}>
					<Component {...pageProps} />
				</LayoutComponent>
			</Hydrate>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default MyApp;
