import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {
	return (
		<div className='flex flex-col h-screen'>
			<Head>
				<title>미국주식 주가조회 - 클립스탁</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta property='og:title' content='클립스탁' />
				<meta property='og:url' content='clipstock.vercel.app' />
				<meta property='og:description' content='한국형 미국주식 주가조회' />
				<link
					rel='shortcut icon'
					href='clip-icon.png'
					// '/dollar-coin.png'
				/>
			</Head>
			<Header />
			<div className='flex-grow'>{props.children}</div>
			<Footer />
		</div>
	);
}
