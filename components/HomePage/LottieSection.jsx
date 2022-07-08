import "@dotlottie/player-component";

export default function LottieSection() {
	return (
		<div className='flex xl:justify-end justify-center'>
			<dotlottie-player
				src='https://assets5.lottiefiles.com/dotlotties/dlf10_oat3z2uf.lottie'
				autoplay
				loop
				style={{ height: "50%", width: "50%" }}
			/>
		</div>
	);
}
