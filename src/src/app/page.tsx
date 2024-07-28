import Image from "next/image";
import Item from "@/components/home/Item";

export default function Home() {
  return (
    <div>
      <div>
        <Image
          src="/image/office.jpg"
          width={1000}
          height={1000}
          alt="office"
          style={{ width: '100%', height: 'auto' }} // なぜかImageタグだと画質が悪くなる（tailwindの書き方にはなっていない）
        />
      </div>

      <div className="w-5/7 mr-auto ml-auto">
        <Item
          title="ABOUT"
          message="「株式会社たば」は2023年9月にHiroki1238によって開設されたポートフォリオサイトです。"
          button="会社概要"
          path="/about"
          img="./image/city.jpg"
        />

        <Item
          title=" SERVICE"
          message="「株式会社たば」は世の中を今より少しだけ便利にすることを目標に、様々な分野のサービスを開発・提供しています。"
          button="サービス一覧"
          path="/about"
          img="./image/service.jpg"
        />

        <Item
          title="RECRUIT"
          message="少しでも興味をお持ちいただけたら、ぜひエントリーしてみてください。"
          button="採用情報"
          path="/about"
          img="./image/employees.jpg"
        />
      </div>

      <div className="mb-36" />
    </div>
  );
}
