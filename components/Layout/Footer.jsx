import { InlineReactionButtons } from "sharethis-reactjs";
import { InlineShareButtons } from "sharethis-reactjs";
import { StickyShareButtons } from "sharethis-reactjs";
import { InlineFollowButtons } from "sharethis-reactjs";
import KakaoShareButton from "./KaKaoShareButton";

const sendText = "한국형 미국주식 주가조회";
const sendUrl = "https://us-stock-info-applicaiton.vercel.app/";
const onClickTwitterShare = () => {
	window.open(
		`https://twitter.com/intent/tweet?text=${sendText}&url=${sendUrl}`
	);
};
const onClickFaceBookShare = () => {
	window.open(
		`http://www.facebook.com/sharer/sharer.php?u=${sendText}&url=${sendUrl}`
	);
};

export default function Footer() {
	return (
		<footer className='text-gray-600 mt-4 body-font'>
			<div className='bg-gray-100'>
				<div className='container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col'>
					<a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
						<svg
							className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13'></path>
						</svg>
						<span className='ml-3 text-xl'>클립스탁</span>
					</a>
					<p className='text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4'>
						© 2022 ClipStock —
						<a
							href='https://twitter.com/knyttneve'
							rel='noopener noreferrer'
							className='text-gray-600 ml-1'
							target='_blank'>
							@jasonsc
						</a>
					</p>
					<span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
						<a
							className='text-gray-500 cursor-pointer'
							onClick={onClickFaceBookShare}>
							<svg
								fill='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-5 h-5'
								viewBox='0 0 24 24'>
								<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
							</svg>
						</a>
						<a
							className='ml-3 text-gray-500 cursor-pointer'
							onClick={onClickTwitterShare}>
							<svg
								fill='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-5 h-5'
								viewBox='0 0 24 24'>
								<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
							</svg>
						</a>
						<a className='ml-3 text-gray-500'>
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-5 h-5'
								viewBox='0 0 24 24'>
								<rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
								<path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
							</svg>
						</a>
						{/* <KakaoShareButton /> */}
					</span>
				</div>
			</div>
		</footer>
	);
}
