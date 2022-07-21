export default function ErrorMessage(props) {
	const { errorType } = props;
	let errorMessageContent = "올바른 티커를 입력해주세요.";

	if (errorType === "no company found") {
		errorMessageContent = "기업을 찾을 수 없습니다. 다시 입력해주세요.";
	}

	return (
		<div className='container lg:w-full px-5 pt-5 mx-auto flex'>
			<p className='text-xl lg:w-4/6 mx-auto w-full text-red-500 font-semibold'>
				{errorMessageContent}
			</p>
		</div>
	);
}
