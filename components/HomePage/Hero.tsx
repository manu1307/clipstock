import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicLottie = dynamic(() => import("./LottieSection"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-col items-center py-24 mx-auto md:flex-row">
        <div className="w-5/6 mb-10 lg:w-1/2 md:w-1/2 md:mb-0">
          <DynamicLottie />
        </div>
        <div className="flex flex-col items-center px-10 text-center lg:w-1/2 md:w-1/2 lg:pl-8 md:items-start md:text-left">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl"></h1>
          <p className="mb-8 leading-relaxed">
            <br />
            <span className="font-sans text-xl">우리에게 제일 중요한 바로 </span>
            <span className="font-sans text-3xl font-bold text-gray-900 sm:text-4xl">주가</span>
            <br />
            <br />
            <span className="font-sans text-xl font-bold lg:text-3xl">
              한국형 미국주식 주가 조회
            </span>
          </p>
          <div className="flex justify-center">
            <Link href="/us-stock">
              <a className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
                주가 확인하러 바로가기
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
