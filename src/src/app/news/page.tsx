import Image from "next/image";
import NewsItem from "@/components/news/Item";

export default function News() {
  return (
    <div className="mt-16 w-5/7 mr-auto ml-auto">
      <div className="mt-16 mr-auto ml-auto">
        <p className="text-6xl text-gray-600 font-black font-zenmaru">NEWS</p>
        <p className="text-xl mt-2 text-gray-400">ニュース</p>

        <div className="mb-36"></div>
        <NewsItem
          date="2022.08.26"
          title="「技育CAMPハッカソン」に参加、優秀賞を受賞"
          category="ハッカソン"
          img="./image/news001.jpg"
        />

        <NewsItem
          date="2022.08.26"
          title="「技育CAMPハッカソン」に参加、優秀賞を受賞"
          category="ハッカソン"
          img="./image/news001.jpg"
        />
        </div>
        <div className="mb-36">.....</div>
      </div>
  );
}
