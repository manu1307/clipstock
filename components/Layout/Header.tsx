import Link from "next/link";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <p className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
          <svg
            className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            ></path>
          </svg>
          <Link href="/">
            <a className="ml-3 text-xl">클립스탁</a>
          </Link>
        </p>
        <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400">
          <Link href="/">
            <a className="mr-5 text-lg hover:text-gray-900">홈</a>
          </Link>
          <Link href="/us-stock">
            <a className="mr-5 text-lg hover:text-gray-900">주가</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
