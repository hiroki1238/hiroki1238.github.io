import Link from "next/link";

export default function Item() {
  return (
        <div className="mt-20 flex">
          <div className="w-3/4">
            <p className="text-6xl text-gray-600 font-black font-zenmaru">
              {/* ABOUT */}
            </p>
            <p className="text-xl mt-2 text-gray-400">私たちについて</p>
            <p className="text-2xl mt-10 mr-10 text-gray-600">
              {/* 「株式会社たば」は2023年2月にHiroki1238によって設立されたポートフォリオサイトです。 */}
            </p>

            <button className="mt-10 ml-10 py-4 px-6 text-xl bg-transparent border-2 border-slate-700 hover:border-transparent rounded-xl hover:bg-slate-700 text-slate-700 hover:text-white" onClick="loction.href='/about'">
              {/* 会社概要 */}
            </button>  {/* 方法1 */}

            <button className="mt-10 ml-10 py-4 px-6 text-xl bg-transparent border-2 border-slate-700 hover:border-transparent rounded-xl hover:bg-slate-700 text-slate-700 hover:text-white">
              <Link href="/about">会社概要</Link>
            </button>  {/* 方法2 */}

            <Link
              href="/about"
              className="mt-10 ml-10 py-5 px-7 text-xl bg-transparent border-2 border-slate-700 hover:border-transparent rounded-xl hover:bg-slate-700 text-slate-700 hover:text-white">
              会社概要
            </Link>  {/* 方法3 */}
          </div>
          <div className="w-3/7">
            <img
              src="./image/city.jpg"
              className="border border-gray-400 rounded-xl"
            />
          </div>
        </div>
  );
}
