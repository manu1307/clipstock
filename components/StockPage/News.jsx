import Image from "next/dist/client/image";
import Link from "next/dist/client/link";

export default function News(props) {
  const { news } = props;

  return (
    <div className="flex h-36">
      {/* <div>
        <Image
          src={news.banner_image}
          alt="Image"
          width={`120%`}
          height={`120%`}
          layout="fixed"
          className="w-40"
        />
      </div> */}
      <div className="flex flex-col pr-5">
        <Link href={news.url} blank>
          <a target="_blank" className="font-bold text-lg whitespace-pre-line">
            {news.title}
          </a>
        </Link>
        <h2 className="hidden lg:inline-flex text-xs font-semibold">
          {news.authors}
        </h2>
        <h1 className="hidden truncate lg:inline-flex text-xs whitespace-pre-line">
          {news.summary}
        </h1>
      </div>
    </div>
  );
}
