import Image from "next/dist/client/image";
import Link from "next/dist/client/link";

export default function News(props) {
	const { news } = props;

	return (
		<div className='flex'>
			<div>
				<Image
					src={news.banner_image}
					alt='Image'
					width={`120%`}
					height={`120%`}
					layout='fixed'
					className='w-40'
				/>
			</div>
			<div className='flex flex-col px-5'>
				<Link href={news.url} blank>
					<a target='_blank' className='font-bold text-lg'>
						{news.title}
					</a>
				</Link>
				<h2 className='hidden lg:inline-flex text-xs'>{news.authors}</h2>
				<h1 className='hidden lg:inline-flex whitespace-pre-line'>
					{news.summary}
				</h1>
			</div>
		</div>
	);
}
