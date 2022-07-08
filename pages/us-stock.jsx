import { useEffect, useState } from "react";
import { version } from "react-dom";
import Content from "../components/Content";
import Layout from "../components/Layout/Layout";

export default function USStockPage(props) {
	const QuoteEndpoint = props.initialData["Global Quote"];
	const startingData = Object.values(QuoteEndpoint);
	const [firstFetch, setFirstFetch] = useState(true);
	const [data, setData] = useState(props.initialData);
	const [newsData, setNewsData] = useState();

	const fetchData = async (ticker) => {
		const req = await fetch(
			`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${process.env.NEXT_PUBLIC_STOCK_API_KEY}`
		);
		const newData = await req.json();
		// console.log(newData["Global Quote"]);
		return setData(Object.values(newData["Global Quote"]));
	};

	const fetchNewsData = async (ticker) => {
		const req = await fetch(
			`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${ticker}&apikey=${process.env.NEXT_PUBLIC_STOCK_API_KEY}`
		);
		const newData = await req.json();
		return setNewsData(newData);
	};

	let ticker;
	const [inputValue, setInputValue] = useState("");

	function handleOnSubmit(event) {
		event.preventDefault();
		ticker = inputValue.toUpperCase();
		fetchData(ticker);
		fetchNewsData(ticker);
		setFirstFetch((prev) => {
			!prev;
		});
		setTimeout(() => {
			setInputValue("");
		}, 50);
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
					placeholder='티커를 입력하세요 ex) AAPL(애플)'
					onChange={handleOnChange}
					name='ticker'
					value={inputValue}
				/>
			</form>
			{startingData ? (
				<Content
					stockData={firstFetch ? startingData : data}
					newsData={newsData}
				/>
			) : (
				<div>새로고침해주세요</div>
			)}
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
