import Image from "next/image";
import Link from "next/link";
import Item from "components/home/Item";

export default function Home() {
  return (
    <div>
      <div>
        <img src="./image/office.jpg" className="w-full" />
      </div>

      <div className="w-5/7 mr-auto ml-auto">
        <Item
          title="ABOUT"
          message="「株式会社たば」は2023年2月にHiroki1238によって設立されたポートフォリオサイトです。"
          button="会社概要"
          path="/about"
          img="./image/city.jpg"
        />

        <Item
          title=" SERVICE"
          message="株式会社たばはより便利な世の中を実現することを目標に、様々な分野のサービスを開発・提供しています。"
          button="サービス一覧"
          path="/about"
          img="./image/service.jpg"
        />

        <Item
          title="RECRUIT"
          message="少しでも興味をお持ちいただけたら、ぜひエントリーしてみてください。"
          button="サービス一覧"
          path="/about"
          img="./image/employees.jpg"
        />
      </div>

      <div className="mb-36">.....</div>
    </div>
  );
}
