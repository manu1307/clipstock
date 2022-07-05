import Content from "../components/Content";
import Layout from "../components/Layout/Layout";

export default function USStockPage(props) {
	const QuoteEndpoint = props.data["Global Quote"];
	return (
		<Layout>
			<Content quoteEndpoint={QuoteEndpoint} />
		</Layout>
	);
}

export async function getServerSideProps() {
	const response = await fetch(
		`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=${process.env.NEXT_PUBLIC_STOCK_API_KEY}`
	);
	const data = await response.json();

	return {
		props: { data }, // will be passed to the page component as props
	};
}
