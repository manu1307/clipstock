import Head from "next/head";
import Image from "next/image";
import MyApp from "./_app";
import Layout from "../components/Layout/Layout";
import Content from "../components/Content";

export default function Home() {
	return (
		<Layout>
			<Content />
		</Layout>
	);
}
