import ServiceItem from "@/components/services/Item";
import Image from "next/image";

export default function Service() {
  return (
    <div className="mt-16 w-5/7 mr-auto ml-auto">
      <p className="text-6xl text-gray-600 font-black font-zenmaru">SERVICE</p>
      <p className="text-xl mt-2 text-gray-400">サービス</p>
      <div className="mt-20 flex justify-center">
        <div className="w-service mr-6">
          <ServiceItem
            img="./image/news001.jpg"
            description="夏休みの宿題撃退アプリ"
            title="小学生の味方"
          />
          <div className="mt-8">
            <a className="py-3 px-5 text-xl bg-transparent border-2 border-slate-700 hover:border-transparent rounded-xl hover:bg-slate-700 text-slate-700 hover:text-white">
              サービスサイトへ
            </a>
          </div>
        </div>
        <div className="w-service ml-6">
          <ServiceItem
            img="./image/news001.jpg"
            description="ライブ会場のレビューサイト"
            title="raion"
          />
          <div className="mt-8">
            <a className="py-3 px-5 text-xl bg-transparent border-2 border-slate-700 hover:border-transparent rounded-xl hover:bg-slate-700 text-slate-700 hover:text-white">
              サービスサイトへ
            </a>
          </div>
        </div>
      </div>
      <div className="mb-36"></div>

      <div className="mb-36">.....</div>
    </div>
  );
}
