import Image from "next/image";
import { useEffect, useState } from "react";
import News from "./StockPage/News";
import StockPrice from "./StockPage/StockPrice";
import StockPriceDetail from "./StockPage/StockPriceDetail";

export default function Content(props) {
  const { stockData, newsData } = props;

  const [contentClasses, setContentClasses] = useState("invisible");
  useEffect(() => {
    stockData && setContentClasses("");
  }, [setContentClasses, stockData]);

  const isRising = parseFloat(stockData[8]) > 0;
  const newsDataCutted = newsData ? newsData.feed.slice(0, 5) : [];

  return (
    <div>
      <section className={`text-gray-700 body-font ${contentClasses}`}>
        <div className="container flex flex-col px-5 mx-auto">
          <div className="mx-auto lg:w-4/6">
            <div className="flex flex-col my-10 sm:flex-row">
              <div className="text-center sm:w-1/3 sm:pr-8 sm:py-8">
                <div className="flex flex-col items-center justify-center text-center">
                  <h2 className="mt-4 text-6xl font-black text-gray-900 title-font">
                    {stockData[0] && stockData[0]}
                  </h2>
                  <div className="w-12 h-1 mt-4 mb-4 bg-indigo-700 rounded"></div>
                  <p className="text-base"></p>
                </div>
              </div>
              <div className="pt-4 mx-auto mt-4 text-center border-t border-gray-200 sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 sm:mt-0 sm:text-left">
                <StockPrice
                  isRising={isRising}
                  currentStockPrice={Number(stockData[4]).toFixed(2)}
                  stockPriceChangeNum={Number(stockData[8]).toFixed(2)}
                  stockPriceChangePer={parseFloat(stockData[9]).toFixed(2)}
                />

                <StockPriceDetail
                  isRising={isRising}
                  firstDetail={"전일"}
                  firstDetailInfo={Number(stockData[7]).toFixed(2)}
                  secondDetail={"고가"}
                  secondDetailInfo={Number(stockData[2]).toFixed(2)}
                />
                <StockPriceDetail
                  isRising={isRising}
                  firstDetail={"시가"}
                  firstDetailInfo={Number(stockData[1]).toFixed(2)}
                  secondDetail={"저가"}
                  secondDetailInfo={Number(stockData[3]).toFixed(2)}
                />
              </div>
            </div>
            <div>
              {newsDataCutted.length > 0 && (
                <h1 className="mb-3 text-xl font-bold">관련 현지 뉴스</h1>
              )}{" "}
              {newsDataCutted &&
                newsDataCutted.map((news, index) => {
                  return <News news={news} key={index} />;
                })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
