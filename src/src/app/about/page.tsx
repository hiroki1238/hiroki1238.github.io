import Image from "next/image";

export default function About() {
  return (
    <div className="mt-16 w-5/7 mr-auto ml-auto">
      <p className="text-6xl text-gray-600 font-black font-zenmaru">ABOUT US</p>
      <p className="text-xl mt-2 text-gray-400">私たちについて</p>
      <p className="text-2xl mt-10 mr-10 text-gray-600">
        「株式会社たば」は2023年9月にHiroki Tabaによって設立されたポートフォリオサイトです。株式会社たばは「毎日楽しい」を目標に、こだわりを持って開発したサービスを提供しています。
      </p>
      <div className="mb-36"></div>

      <p className="text-6xl text-gray-600 font-black font-zenmaru">COMPANY</p>
      <p className="text-xl mt-2 text-gray-400">会社概要</p>

      <div className="text-2xl mt-10 text-gray-600 grid grid-cols-2 w-full">
        <div className="border-b-2 my-3 text-center">会社名</div>
        <div className="border-b-2 my-3">株式会社たば</div>

        <div className="border-b-2 my-3 text-center">設立</div>
        <div className="border-b-2 my-3">2023年9月1日</div>

        <div className="border-b-2 my-3 text-center">代表取締社長</div>
        <div className="border-b-2 my-3">たば ひろき</div>

        <div className="border-b-2 my-3 text-center">資本金</div>
        <div className="border-b-2 my-3">非公開</div>

        <div className="border-b-2 my-3 text-center">所在地</div>
        <div className="border-b-2 my-3">〒286-0023 千葉県成田市成田1番地</div>

        {/* <div className="border-b-2 my-3 text-center">事業内容</div>
        <div className="border-b-2 my-3">EC事業、DX事業など</div> */}
      </div>

      <div className="mb-36"></div>

      <div className="mb-40">
        <p className="text-6xl text-gray-600 font-black font-zenmaru">
          HISTORY
        </p>
        <p className="text-xl mt-2 text-gray-400">沿革</p>
        <div className="text-2xl mt-10 text-gray-600 grid grid-cols-3 w-full">
          <div className="border-b-2 my-3 text-center">2022年</div>
          <div className="border-b-2 my-3 text-center">9月</div>
          <div className="border-b-2 my-3">
            レバテックカレッジ 入社（インターン）
          </div>

          <div className="border-b-2 my-3 text-center">2023年</div>
          <div className="border-b-2 my-3 text-center">9月</div>
          <div className="border-b-2 my-3">会津大学 卒業</div>

          <div className="border-b-2 my-3 text-center">2023年</div>
          <div className="border-b-2 my-3 text-center">9月</div>
          <div className="border-b-2 my-3">WED株式会社 入社（インターン）</div>

          <div className="border-b-2 my-3 text-center">2024年</div>
          <div className="border-b-2 my-3 text-center">4月</div>
          <div className="border-b-2 my-3">WED株式会社 入社（正社員）</div>

          <div className="border-b-2 my-3 text-center">2024年</div>
          <div className="border-b-2 my-3 text-center">?月</div>
          <div className="border-b-2 my-3">???</div>

          <div className="border-b-2 my-3 text-center">2024年</div>
          <div className="border-b-2 my-3 text-center">?月</div>
          <div className="border-b-2 my-3">???</div>
        </div>
      </div>

      <div>
        <p className="text-6xl text-gray-600 font-black font-zenmaru">
          EXPERIENCES
        </p>
        <p className="text-xl mt-2 text-gray-400">これまでの経験</p>
        <p className="mt-6 text-4xl text-gray-600 font-black font-zenmaru">○TOOLS</p>
        <p className="text-2xl mt-10 mr-10 text-gray-600">
          使用経験のある言語、ツールです。
        </p>

      </div>
    </div>
  );
}
