import Image from "next/image";
import News from "./StockPage/News";
import StockPrice from "./StockPage/StockPrice";
import StockPriceDetail from "./StockPage/StockPriceDetail";

export default function Content(props) {
  const { stockData, newsData } = props;

  console.log(stockData);
  const isRising = parseFloat(stockData[8]) > 0;

  const newsDataCutted = newsData ? newsData.feed.slice(0, 5) : [];
  console.log(newsDataCutted);

  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5  mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col sm:flex-row my-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-black title-font mt-4 text-gray-900 text-6xl">
                  {stockData[0]}
                </h2>
                <div className="w-12 h-1 bg-indigo-700 rounded mt-4 mb-4"></div>
                <p className="text-base"></p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mx-auto mt-4 pt-4 sm:mt-0 text-center sm:text-left">
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
  );
}
