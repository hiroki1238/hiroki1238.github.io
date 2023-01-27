import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <img src="./image/office.jpg" className="w-full" />
      </div>

      <div className="mt-20 ml-36">
        <p className="text-6xl text-gray-600 font-black font-zenmaru">ABOUT</p>
        <p className="text-xl mt-2 text-gray-400">私たちについて</p>
        <p className="text-2xl mt-10 text-gray-600">「株式会社たば」は2023年2月にHiroki1238によって設立されたポートフォリオサイトです。</p>
      </div>
    </div>
  );
}
