// import Lottie from "react-lottie-player";
// import lottieJson from "../../public/stock.json";

import "@dotlottie/player-component";

export default function LottieSection() {
	// return (
	// 	<Lottie
	// 		loop
	// 		animationData={lottieJson}
	// 		play
	// 		style={{ width: 500, height: 350 }}
	// 	/>
	// );
	return (
		<div>
			<dotlottie-player
				src='https://assets5.lottiefiles.com/dotlotties/dlf10_oat3z2uf.lottie'
				autoplay
				loop
				style={{ height: "75%", width: "75%" }}
			/>
		</div>
	);
}
