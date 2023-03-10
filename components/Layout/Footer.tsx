import Link from "next/dist/client/link";

export default function Footer() {
  const sendText = "한국형 미국주식 주가조회 - 클립스탁";
  const sendUrl = "https://clipstock.vercel.app/";

  const shareData = {
    title: "미국주식 주가 조회",
    url: sendUrl,
  };

  const shareLink = async () => {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <footer className="mt-4 text-gray-600 body-font">
      <div className="bg-gray-100">
        <div className="container flex flex-col items-center px-5 py-6 mx-auto sm:flex-row">
          <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
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
            <span className="ml-3 text-xl">클립스탁</span>
          </a>
          <p className="mt-4 text-sm text-gray-500 sm:ml-6 sm:mt-0">
            © 2022 ClipStock —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="ml-1 text-gray-600"
              target="_blank"
            >
              @jasonsc
            </a>
          </p>
          <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-center">
            <span className="hidden md:inline-flex ">
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fclipstock.vercel.app`}
              >
                <a
                  className="text-gray-500 opacity-75 cursor-pointer hover:opacity-100"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
              </Link>
              <Link href={`https://twitter.com/intent/tweet?text=${sendText}&url=${sendUrl}`}>
                <a
                  className="ml-3 text-gray-500 opacity-75 cursor-pointer hover:opacity-100"
                  target="_blank"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-8 h-8 "
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
              </Link>
            </span>

            <a
              className="flex visible p-2 ml-auto rounded-md cursor-pointer md:invisible sm:ml-0 bg-slate-300"
              onClick={shareLink}
            >
              Share
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
