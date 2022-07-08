import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {
	return (
		<div>
			<Head>
				<title>미국주식 주가조회</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Header />
			<div className='h-screen'>{props.children}</div>
			<Footer />
		</div>
	);
}
