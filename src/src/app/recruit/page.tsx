import Image from "next/image";

export default function Recruit() {
  return (
    <div className="mt-16 w-5/7 mr-auto ml-auto">
      <div>
        <p className="text-6xl text-gray-600 font-black font-zenmaru">
          WORK ENVIRONMENT
        </p>
        <p className="text-xl mt-2 text-gray-400">働く環境</p>
        <div className="flex">
        <img src="./image/office2.jpg" className="mt-10 h-96 w-96 object-cover mr-6" />
        <img src="./image/entrance.jpg" className="mt-10 h-96 w-96 object-cover" />
        </div>
        <p className="text-2xl mt-10 mr-10 text-gray-600">
          株式会社たばの福利厚生・制度をご紹介します。
        </p>
        <div className="mt-8">
          <a className="py-3 px-5 text-xl bg-transparent border-2 border-slate-700 hover:border-transparent rounded-xl hover:bg-slate-700 text-slate-700 hover:text-white">
            詳しく見る
          </a>
        </div>
      </div>
      <div className="mb-36"></div>
      <div>
        <p className="text-6xl text-gray-600 font-black font-zenmaru">
          JOIN US
        </p>
        <p className="text-xl mt-2 text-gray-400">採用情報</p>
      </div>
      <div className="mb-36"></div>
      <div>
        <p className="text-6xl text-gray-600 font-black font-zenmaru">
          FAQ
        </p>
        <p className="text-xl mt-2 text-gray-400">よくある質問</p>
      </div>
    </div>
  );
}
