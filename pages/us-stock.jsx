import { useEffect, useState } from "react";
import { version } from "react-dom";
import Content from "../components/Content";
import Layout from "../components/Layout/Layout";

export default function USStockPage(props) {
	const QuoteEndpoint = props.initialData["Global Quote"];
	const startingData = Object.values(QuoteEndpoint);
	const [firstFetch, setFirstFetch] = useState(true);

	const [data, setData] = useState(props.initialData);
	const fetchData = async (ticker) => {
		const req = await fetch(
			`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${process.env.NEXT_PUBLIC_STOCK_API_KEY}`
		);
		const newData = await req.json();
		console.log(newData["Global Quote"]);
		return setData(Object.values(newData["Global Quote"]));
	};

	let ticker;
	const [inputValue, setInputValue] = useState("");

	function handleOnSubmit(event) {
		event.preventDefault();
		ticker = inputValue.toUpperCase();
		fetchData(ticker);
		setFirstFetch((prev) => {
			!prev;
		});
		setTimeout(() => {
			setInputValue("");
		}, 100);
	}
	function handleOnChange(event) {
		setInputValue(event.target.value);
	}

	return (
		<Layout>
			<form
				className='container lg:w-4/6 px-5 pt-5 mx-auto flex'
				onSubmit={handleOnSubmit}>
				<input
					className='text-xl w-full p-2 border-2 border-gray-200 rounded-md focus:border-indigo-300'
					type='text'
					placeholder='티커를 입력하세요'
					onChange={handleOnChange}
					name='ticker'
					value={inputValue}
				/>
			</form>
			<Content stockData={firstFetch ? startingData : data} />
		</Layout>
	);
}

USStockPage.getInitialProps = async (ctx) => {
	const res = await fetch(
		`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=SPY&apikey=${process.env.NEXT_PUBLIC_STOCK_API_KEY}`
	);
	const data = await res.json();
	return { initialData: data };
};
