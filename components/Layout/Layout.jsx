import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {
	return (
		<div className='flex flex-col h-screen'>
			<Head>
				<title>미국주식 주가조회</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<link rel='shortcut icon' href='/dollar-coin.png' />
			</Head>
			<Header />
			<div className='flex-grow'>{props.children}</div>
			<Footer />
		</div>
	);
}
