import Head from "next/head";
import Image from "next/image";
import MyApp from "./_app";
import Layout from "../components/Layout/Layout";
import Content from "../components/Content";
import Link from "next/link";

export default function Home() {
	return (
		<Layout>
			<Link href='/us-stock'>
				<a>주식 보러 가기</a>
			</Link>
			{/* <Content /> */}
		</Layout>
	);
}
