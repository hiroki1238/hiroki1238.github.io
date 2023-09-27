import Image from "next/image";
import NewsItem from "@/components/news/Item";

export default function News() {
  return (
    <div className="mt-16 w-5/7 mr-auto ml-auto">
      <div className="mb-16">
        <p className="text-6xl text-gray-600 font-black font-zenmaru">NEWS</p>
        <p className="text-xl mt-2 text-gray-400">ニュース</p>
      </div>

      <div className="grid grid-cols-3">
        <NewsItem
          date="2022.08.26"
          title="「技育CAMPアカデミア」に参加"
          category="勉強会"
          img="./image/news002.png"
          url="https://talent.supporterz.jp/events/301e6f0a-351a-4edb-b4a7-5be1fb5a2458/?utm_source=next&utm_medium=geekcamp"
        />

        <NewsItem
          date="2022.08.26"
          title="「技育CAMPハッカソン」に参加"
          category="ハッカソン"
          img="./image/news001.jpg"
          url="https://talent.supporterz.jp/events/301e6f0a-351a-4edb-b4a7-5be1fb5a2458/?utm_source=next&utm_medium=geekcamp"
        />

        <NewsItem
          date="2022.08.26"
          title="「技育CAMPアカデミア」に参加2"
          category="勉強会"
          img="./image/news002.png"
          url="https://talent.supporterz.jp/events/301e6f0a-351a-4edb-b4a7-5be1fb5a2458/?utm_source=next&utm_medium=geekcamp"
        />

        <NewsItem
          date="2022.08.26"
          title="「技育CAMPハッカソン」に参加2"
          category="ハッカソン"
          img="./image/news001.jpg"
          url="https://talent.supporterz.jp/events/301e6f0a-351a-4edb-b4a7-5be1fb5a2458/?utm_source=next&utm_medium=geekcamp"
        />

        <NewsItem
          date="2022.08.26"
          title="「技育CAMPアカデミア」に参加3"
          category="勉強会"
          img="./image/news002.png"
          url="https://talent.supporterz.jp/events/301e6f0a-351a-4edb-b4a7-5be1fb5a2458/?utm_source=next&utm_medium=geekcamp"
        />

        <NewsItem
          date="2022.08.26"
          title="「技育CAMPハッカソン」に参加3"
          category="ハッカソン"
          img="./image/news001.jpg"
          url="https://talent.supporterz.jp/events/301e6f0a-351a-4edb-b4a7-5be1fb5a2458/?utm_source=next&utm_medium=geekcamp"
        />

        <NewsItem
          date="2022.08.26"
          title="「技育CAMPアカデミア」に参加4"
          category="勉強会"
          img="./image/news002.png"
          url="https://talent.supporterz.jp/events/301e6f0a-351a-4edb-b4a7-5be1fb5a2458/?utm_source=next&utm_medium=geekcamp"
        />

        <NewsItem
          date="2022.08.26"
          title="「技育CAMPハッカソン」に参加4"
          category="ハッカソン"
          img="./image/news001.jpg"
          url="https://talent.supporterz.jp/events/301e6f0a-351a-4edb-b4a7-5be1fb5a2458/?utm_source=next&utm_medium=geekcamp"
        />
      </div>
      <div className="mb-36">.....</div>
    </div>
  );
}
