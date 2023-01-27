import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <img src="./image/office.jpg" className="w-full" />
      </div>

      <div className="w-5/7 mr-auto ml-auto">
        <div className="mt-20 flex">
          <div className="w-3/4">
            <p className="text-6xl text-gray-600 font-black font-zenmaru">
              ABOUT
            </p>
            <p className="text-xl mt-2 text-gray-400">私たちについて</p>
            <p className="text-2xl mt-10 mr-10 text-gray-600">
              「株式会社たば」は2023年2月にHiroki1238によって設立されたポートフォリオサイトです。
            </p>
            <button className="mt-10 ml-10 py-4 px-6 text-xl bg-transparent border-2 border-slate-700 hover:border-transparent rounded-xl hover:bg-slate-700 text-slate-700 hover:text-white">
              会社概要
            </button>
          </div>
          <div className="w-3/7">
            <img
              src="./image/city.jpg"
              className="border border-gray-400 rounded-xl"
            />
          </div>
        </div>

        <div className="mt-20 flex">
          <div className="w-3/4">
            <p className="text-6xl text-gray-600 font-black font-zenmaru">
              SERVICE
            </p>
            <p className="text-xl mt-2 text-gray-400">サービス</p>
            <p className="text-2xl mt-10 mr-10 text-gray-600">
              株式会社たばはより便利な世の中を実現することを目標に、様々な分野のサービスを開発・提供しています。
            </p>
            <button className="mt-10 ml-10 py-4 px-6 text-xl bg-transparent border-2 border-slate-700 hover:border-transparent rounded-xl hover:bg-slate-700 text-slate-700 hover:text-white">
              サービス一覧
            </button>
          </div>
          <div className="w-3/7">
            <img
              src="./image/service.jpg"
              className="border border-gray-400 rounded-xl"
            />
          </div>
        </div>

        <div className="mt-20 flex">
          <div className="w-3/4">
            <p className="text-6xl text-gray-600 font-black font-zenmaru">
              RECRUIT
            </p>
            <p className="text-xl mt-2 text-gray-400">採用情報</p>
            <p className="text-2xl mt-10 mr-10 text-gray-600">
              少しでも興味をお持ちいただけたら、ぜひエントリーしてみてください。
            </p>
            <button className="mt-10 ml-10 py-4 px-6 text-xl bg-transparent border-2 border-slate-700 hover:border-transparent rounded-xl hover:bg-slate-700 text-slate-700 hover:text-white">
              採用情報
            </button>
          </div>
          <div className="w-3/7">
            <img
              src="./image/employees.jpg"
              className="border border-gray-400 rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="mb-36">.....</div>
    </div>
  );
}
