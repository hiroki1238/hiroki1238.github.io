import Image from "next/image";

export default function About() {
  return (
    <div className="mt-16 w-5/7 mr-auto ml-auto">
      <p className="text-6xl text-gray-600 font-black font-zenmaru">NEWS</p>
      <p className="text-xl mt-2 text-gray-400">ニュース</p>
      <div className="mt-20 flex">
        <div>
        <p className="text-md mt-2 text-gray-500 mb-2">2022.08.26</p>
        <p className="text-xl text-gray-600">「技育CAMPハッカソン」に参加、優秀賞を受賞</p>
        <p className="bg-gray-200 text-gray-400 rounded mt-1 px-2 inline-block mr-2">ハッカソン</p>
        </div>
        <img src="./image/news001.jpg" className="border border-gray-300 rounded-xl w-2/5"/>
      </div>
      <div className="mb-36"></div>

      <div className="mb-36">.....</div>
    </div>
  );
}
