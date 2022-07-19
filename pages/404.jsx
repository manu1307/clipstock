import Link from "next/link";

export default function PageNotFound() {
	return (
		<section className='text-gray-600 body-font'>
			<div className='container px-5 py-24 mx-auto'>
				<div className='xl:w-1/2 lg:w-3/4 w-full mx-auto text-center'>
					<p className='leading-relaxed text-xl sm:text-3xl'>
						페이지를 찾을 수 없습니다.
					</p>
					<p className='text-lg mb-6'>인터넷 연결을 확인해보세요.</p>
					<Link href='/'>
						<a className='text-white bg-indigo-500 border-0  py-3  px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
							다시 시도
						</a>
					</Link>
					<br />
					<span className='inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6'></span>
					<h2 className='text-gray-900 font-medium title-font tracking-wider text-sm'>
						<p className='text-gray-500'>문의사항</p>
						<Link href='mailto:jasonsc@korea.ac.kr'>
							<a>jasonsc@korea.ac.kr</a>
						</Link>
					</h2>
				</div>
			</div>
		</section>
	);
}
