import Arrow from "./StockPriceComponents/Arrow";

export default function StockPrice(props) {
	const {
		isRising,
		currentStockPrice,
		stockPriceChangeNum,
		stockPriceChangePer,
	} = props;

	return (
		<div className='leading-relaxed mb-1'>
			<div className='leading-relaxed flex items-center font-semibold text-3xl mb-1'>
				<Arrow isRising={isRising} />
				{currentStockPrice} $
				<div
					className={`ml-3 text-lg ${
						isRising ? "text-red-600" : "text-blue-600"
					}`}>
					<div className='flex flex-col ml-1'>
						<span className='text-xs text-black font-normal'>전일대비</span>
						<div className='font-bold'>
							<span className='mr-3'>
								{isRising && "+"}
								{stockPriceChangeNum}
							</span>
							<span>
								({isRising && "+"}
								{stockPriceChangePer}%)
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className='w-3/5 h-1 bg-gray-500 rounded mt-1 mb-4'></div>
		</div>
	);
}
