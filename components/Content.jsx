import Image from "next/image";
import { useState } from "react";

function handleOnSubmit() {}

export default function Content(props) {
	const { quoteEndpoint } = props;
	const isRising = parseFloat(quoteEndpoint["10. change percent"]) > 0;
	console.log(isRising);
	return (
		<section className='text-gray-600 body-font'>
			<div className='container px-5 py-24 mx-auto flex flex-col'>
				<div className='lg:w-4/6 mx-auto'>
					<form onSubmit={handleOnSubmit}>
						<input
							className='text-xl w-full p-2 border-2 border-gray-200 rounded-md focus:border-indigo-300'
							type='text'
							placeholder='티커를 입력하세요'
						/>
					</form>
					<div className='flex flex-col sm:flex-row mt-10'>
						<div className='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
							<div className='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400'>
								<svg
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									className='w-10 h-10'
									viewBox='0 0 24 24'>
									<path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
									<circle cx='12' cy='7' r='4'></circle>
								</svg>
							</div>
							<div className='flex flex-col items-center text-center justify-center'>
								<h2 className='font-medium title-font mt-4 text-gray-900 text-lg'>
									{quoteEndpoint["01. symbol"]}
								</h2>
								<div className='w-12 h-1 bg-indigo-500 rounded mt-2 mb-4'></div>
								<p className='text-base'></p>
							</div>
						</div>
						<div className='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
							<p className='leading-relaxed text-lg mb-4'>
								{Number(quoteEndpoint["05. price"]).toFixed(2)}
							</p>
							<p
								className={`font-bold ${
									isRising ? "text-red-500" : "text-blue-500"
								}`}>
								<span className='mr-3'>
									{Number(quoteEndpoint["09. change"]).toFixed(2)}
								</span>

								<span>
									{`${parseFloat(quoteEndpoint["10. change percent"]).toFixed(
										2
									)}%`}
								</span>
							</p>

							<p className='leading-relaxed text-lg mb-4'>
								<span className='mr-4'>
									시가 : {Number(quoteEndpoint["02. open"]).toFixed(2)}
								</span>
								<span>
									고가 : {Number(quoteEndpoint["03. high"]).toFixed(2)}
								</span>
							</p>
							<p className='leading-relaxed text-lg mb-4'>
								<span className='mr-4'>
									저가 : {Number(quoteEndpoint["04. low"]).toFixed(2)}
								</span>
								<span>
									전일 :{" "}
									{Number(quoteEndpoint["08. previous close"]).toFixed(2)}
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
