import Image from "next/image";

export default function Content(props) {
	const { stockData } = props;
	const isRising = parseFloat(stockData[8]) > 0;
	return (
		<section className='text-gray-600 body-font'>
			<div className='container px-5  mx-auto flex flex-col'>
				<div className='lg:w-4/6 mx-auto'>
					<div className='flex flex-col sm:flex-row mt-10'>
						<div className='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
							<div className='flex flex-col items-center text-center justify-center'>
								<h2 className='font-black title-font mt-4 text-gray-900 text-5xl'>
									{stockData[0]}
								</h2>
								<div className='w-12 h-1 bg-indigo-700 rounded mt-4 mb-4'></div>
								<p className='text-base'></p>
							</div>
						</div>
						<div className='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
							<button>상승률</button>
							<div className='leading-relaxed mb-1'>
								<div className='leading-relaxed flex items-center text-3xl mb-1'>
									<span className='text-xl'>
										{isRising ? (
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='h-6 w-6'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'
												strokeWidth='2'>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M8 7l4-4m0 0l4 4m-4-4v18'
												/>
											</svg>
										) : (
											"⛛"
										)}
									</span>
									{Number(stockData[4]).toFixed(2)} $
									<span
										className={`ml-3 ${
											isRising ? "text-red-500" : "text-blue-500"
										}`}>
										<span className='mr-3'>
											({Number(stockData[8]).toFixed(2)})
										</span>

										<span>({`${parseFloat(stockData[9]).toFixed(2)}%`})</span>
									</span>
								</div>
								<div className='w-3/5 h-1 bg-gray-500 rounded mt-1 mb-4'></div>
							</div>

							<p className='leading-relaxed text-lg mb-4'>
								<span className='mr-4'>
									전일 :{" "}
									<span
										className={`font-bold ${
											isRising ? "text-red-500" : "text-blue-500"
										}`}>
										{Number(stockData[7]).toFixed(2)}
									</span>
								</span>

								<span>고가 : {Number(stockData[2]).toFixed(2)}</span>
							</p>
							<p className='leading-relaxed text-lg mb-4'>
								<span className='mr-4'>
									시가 :
									<span
										className={`font-bold ${
											isRising ? "text-red-500" : "text-blue-500"
										}`}>
										{Number(stockData[1]).toFixed(2)}
									</span>
								</span>
								<span>저가 : {Number(stockData[3]).toFixed(2)}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
