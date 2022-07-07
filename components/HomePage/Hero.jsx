import Link from "next/link";
import LottieSection from "./LottieSection";

export default function Hero() {
	return (
		<section className='text-gray-600 body-font'>
			<div className='container mx-auto flex py-24 md:flex-row flex-col items-center'>
				<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
					<LottieSection />
				</div>
				<div className='lg:flex-grow md:w-1/2 pl-8  flex flex-col md:items-start md:text-left items-center text-center'>
					<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
						간단하게 주가만
					</h1>
					<p className='mb-8 leading-relaxed'>
						우리들에게 제일 중요한 바로 주가
						<br />
						<br />
						하지만 주가등락 색깔 한국 주식시장과 정반대인 미국 주식시장
						<br />
						근데 왜 우리가 맞춰줘야하지?
						<br />
						이제는 한국식으로 미국주식 보자
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
