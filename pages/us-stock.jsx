import { useRef, useState } from "react";
import Content from "../components/Content";
import Layout from "../components/Layout/Layout";
import ErrorMessage from "../components/StockPage/ErrorMessage";
import LoadingSpinner from "../components/StockPage/StockPriceComponents/LoadingSpinner";

export default function USStockPage(props) {
  const QuoteEndpoint = props.initialData["Global Quote"];
  const startingData = Object.values(QuoteEndpoint);
  const [firstFetch, setFirstFetch] = useState(true);
  const [data, setData] = useState(props.initialData);
  const [newsData, setNewsData] = useState();
  const [fetchLoading, setFetchLoading] = useState(false);
  const [fetchSuccess, setFetchSuccess] = useState(true);
  const tickerInput = useRef();

  const fetchData = async (ticker) => {
    setFetchLoading(true);
    const res = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${process.env.NEXT_PUBLIC_STOCK_API_KEY}`
    );
    const newData = await res.json();
    if (newData["Error Message"]) {
      console.log(newData["Error Message"]);
      setFetchLoading(false);
      setFetchSuccess(false);
      setNewsData([]);
      return;
    }
    fetchNewsData(ticker);
    setFetchLoading(false);
    setFetchSuccess(true);
    return setData(Object.values(newData["Global Quote"]));
  };

  const fetchNewsData = async (ticker) => {
    const res = await fetch(
      `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${ticker}&apikey=${process.env.NEXT_PUBLIC_STOCK_API_KEY}`
    );

    const newData = await res.json();
    console.log(newData);

    if (newData["Information"]) {
      console.log(newData["Information"]);
      return;
    }
    console.log("fetch success");
    return setNewsData(newData);
  };

  const checkValidInput = (value) => {
    if (value.trim().length === 0) {
      alert("티커를 입력해주세요.");
      return false;
    } else if (!/^[a-zA-Z]+$/.test(value)) {
      alert("올바른 티커를 입력해주세요.");
      return false;
    }
  };

  function handleOnSubmit(event) {
    event.preventDefault();

    if (checkValidInput(tickerInput.current.value)) {
      return;
    }

    const ticker = tickerInput.current.value.toUpperCase();
    fetchData(ticker);

    setFirstFetch((prev) => {
      !prev;
    });
    tickerInput.current.value = "";
  }

  return (
    <Layout>
      <form
        className="container lg:w-full px-5 pt-5 mx-auto flex"
        onSubmit={handleOnSubmit}
      >
        <input
          className="text-xl lg:w-4/6 mx-auto w-full p-2 border-2 border-gray-200 rounded-md focus:border-indigo-300"
          type="text"
          placeholder="티커를 입력하세요 ex) AAPL(애플)"
          name="ticker"
          ref={tickerInput}
        />
      </form>
      {fetchLoading && <LoadingSpinner />}
      {!fetchLoading && fetchSuccess && (
        <Content
          stockData={firstFetch ? startingData : data}
          newsData={newsData}
        />
      )}
      {!fetchLoading && !fetchSuccess && (
        <ErrorMessage errorType="no company found"></ErrorMessage>
      )}
    </Layout>
  );
}

USStockPage.getInitialProps = async () => {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=SPY&apikey=${process.env.NEXT_PUBLIC_STOCK_API_KEY}`
  );
  const data = await res.json();
  return { initialData: data };
};
