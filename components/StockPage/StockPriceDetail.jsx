export default function StockPriceDetail(props) {
	const {
		isRising,
		firstDetail,
		firstDetailInfo,
		secondDetail,
		secondDetailInfo,
	} = props;

	return (
		<div className='leading-relaxed text-lg mb-4'>
			<span className='mr-4 font-bold'>
				{firstDetail} :{" "}
				<span
					className={
						firstDetail === "전일"
							? `text-gray-700`
							: `${isRising ? "text-red-600" : "text-blue-600"}`
					}>
					{firstDetailInfo}
				</span>
			</span>

			<span className='font-bold'>
				{secondDetail} :{" "}
				<span
					className={
						secondDetail === "고가" ? ` text-red-600` : `text-blue-600`
					}>
					{secondDetailInfo}
				</span>
			</span>
		</div>
	);
}
