export default function Arrow(props) {
	const { isRising } = props;
	return (
		<span className='text-xl mr-2'>
			{isRising ? (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-5 fill-red-600'
					viewBox='0 0 15 18'
					fill='currentColor'>
					<path
						fillRule='evenodd'
						d='M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z'
						clipRule='evenodd'
					/>
				</svg>
			) : (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-5 fill-blue-600'
					viewBox='0 0 15 18'
					fill='currentColor'>
					<path
						fillRule='evenodd'
						d='M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z'
						clipRule='evenodd'
					/>
				</svg>
			)}
		</span>
	);
}
