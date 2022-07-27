import Head from "next/head";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Header from "./Header";
import Script from "next/script";

export default function Layout(props) {
	return (
		<div className='flex flex-col h-screen'>
			<Head>
				<title>미국주식 주가조회</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<link
					rel='shortcut icon'
					href='clip-icon.png'
					// '/dollar-coin.png'
				/>
			</Head>
			<Header />
			<Script src='https://developers.kakao.com/sdk/js/kakao.js'></Script>
			<div className='flex-grow'>{props.children}</div>
			<Footer />
		</div>
	);
}
