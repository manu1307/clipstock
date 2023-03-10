import Layout from "../components/Layout/Layout";
import Link from "next/link";
import Hero from "../components/HomePage/Hero";

export default function Home() {
  return (
    <Layout>
      <Link href="/us-stock">
        <Hero />
      </Link>
    </Layout>
  );
}
