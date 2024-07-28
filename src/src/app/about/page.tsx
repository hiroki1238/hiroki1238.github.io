import Image from "next/image";

export default function About() {
  return (
    <div className="mt-16 w-5/7 mr-auto ml-auto">
      <p className="text-6xl text-gray-600 font-black font-zenmaru">ABOUT US</p>
      <p className="text-xl mt-2 text-gray-400">私たちについて</p>
      <p className="text-2xl mt-10 mr-10 text-gray-600">
        「株式会社たば」は2023年9月にHiroki1238によって開設されたポートフォリオサイトです。
        <br />
        世の中を今より少しだけ便利にすることを目標に、様々な分野のサービスを開発・提供しています。
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
        <div className="border-b-2 my-3 font-zenmaru font-blac">
          Hiroki Taba
        </div>

        <div className="border-b-2 my-3 text-center">所在地</div>
        <div className="border-b-2 my-3">千葉県 成田市</div>

        <div className="border-b-2 my-3 text-center">お問い合わせ</div>
        <div className="border-b-2 my-3 font-zenmaru font-black">
          hirokitaba@test.com
        </div>

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
          <div className="border-b-2 my-3 text-center width-1/2">2022年</div>
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
        </div>
      </div>

      <div>
        <p className="text-6xl text-gray-600 font-black font-zenmaru">
          EXPERIENCES
        </p>
        <p className="text-xl mt-2 text-gray-400">これまでの経験</p>
        <p className="text-2xl mt-10 mr-10 text-gray-600">
          使用経験のある言語、ツールです。
        </p>

        <p className="mt-6 mb-2 text-xl text-gray-600 font-black font-zenmaru">
          ▪︎業務で使用しているもの
        </p>
        <div className="align-bottom flex items-center">
          <Image
            className="mr-2"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg"
            alt="php"
            width={60}
            height={60}
          />
          <Image
            className="mr-2"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
            width={60}
            height={60}
          />
          <Image
            className="mr-1"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            alt="typescript"
            width={60}
            height={60}
          />
          <Image
            className="mr-1"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="css3"
            width={60}
            height={60}
          />
          <Image
            className="mr-1"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5"
            width={60}
            height={60}
          />
          <Image
            className="mr-1"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
            width={60}
            height={60}
          />
          <Image
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="git"
            width={60}
            height={60}
          />
        </div>
        <p className="mt-6 mb-2 text-xl text-gray-600 font-black font-zenmaru">
          ▪︎その他 使用経験のあるもの
        </p>
        <div className="align-bottom flex items-center">
          <Image
            className="mr-1"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
            alt="c"
            width={60}
            height={60}
          />
          <Image
            className="mr-2"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
            alt="cplusplus"
            width={60}
            height={60}
          />
          <Image
            className="mr-2"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
            alt="php"
            width={60}
            height={60}
          />
          <Image
            className="mr-2"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original-wordmark.svg"
            alt="laravel"
            width={60}
            height={60}
          />
          <Image
            className="mr-2"
            src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
            alt="nextjs"
            width={60}
            height={60}
          />
          <Image
            className="mr-2"
            src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
            alt="tailwind"
            width={60}
            height={60}
          />

          <Image
            className="mr-2"
            src="https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg"
            alt="mariadb"
            width={60}
            height={60}
          />

          <Image
            className="mr-2"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
            alt="mysql"
            width={60}
            height={60}
          />
          <Image
            className="mr-2"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
            alt="postgresql"
            width={60}
            height={60}
          />
          <Image
            className="mr-2"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
            alt="docker"
            width={60}
            height={60}
          />
          <Image
            className="mr-2"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
            alt="aws"
            width={60}
            height={60}
          />
          <Image
            className="mr-1"
            src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
            alt="heroku"
            width={50}
            height={50}
          />
          <Image
            className="mr-2"
            src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg"
            alt="unity"
            width={50}
            height={50}
          />
          <Image
            src="https://download.blender.org/branding/community/blender_community_badge_white.svg"
            alt="blender"
            width={60}
            height={60}
          />
        </div>
      </div>
    </div>
  );
}
