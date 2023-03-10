import "@dotlottie/player-component";
import { FC } from "react";

const LottieSection: FC = () => {
  return (
    <div className="flex justify-center xl:justify-end">
      <dotlottie-player
        src="https://assets5.lottiefiles.com/dotlotties/dlf10_oat3z2uf.lottie"
        autoplay
        loop
        style={{ height: "50%", width: "50%" }}
      />
    </div>
  );
};

export default LottieSection;
