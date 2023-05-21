import Link from "next/link";

const DynamicLottie = dynamic(() => import("./LottieSection"), {
	ssr: false,
});
import dynamic from "next/dynamic";

export default function Hero() {
	return (
		<section className='text-gray-600 body-font'>
			<div className='container mx-auto flex py-24 md:flex-row flex-col items-center'>
				<div className='lg:w-1/2 md:w-1/2 w-5/6 mb-10 md:mb-0'>
					<DynamicLottie />
				</div>
				<div className='lg:w-1/2 md:w-1/2 lg:pl-8 px-10 flex flex-col md:items-start md:text-left items-center text-center'>
					<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'></h1>
					<p className='mb-8 leading-relaxed'>
						<br />
						<span className='font-sans text-xl'>
							우리에게 제일 중요한 것은 바로{" "}
						</span>
						<span className='font-sans font-bold sm:text-4xl text-3xl text-gray-900'>
							주가
						</span>
						<br />
						<br />
						<span className='font-sans lg:text-3xl text-xl font-bold'>
							한국형 미국주식 주가 조회
						</span>
					</p>
					<div className='flex justify-center'>
						<Link href='/us-stock'>
							<a className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
								주가 확인하러 바로가기
							</a>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
