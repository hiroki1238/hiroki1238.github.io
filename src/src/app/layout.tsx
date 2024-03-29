import "./globals.css";
import Head from "next/head";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>株式会社たば</title>
      </head>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <body>
        <section className="font-kosugimaru">
          {/* フォント指定 */}
          <header className="bg-gray-150 h-10 pb-32">
            <nav className="pt-12 flex">
              <Link
                href="/"
                className="mr-6 no-underline text-2xl text-gray-500 hover:text-gray600"
              >
              <img src="./image/logo-kokutetsu.png" className="w-64 h-auto ml-5" /> {/* フォントカラーは#0b81a8 */}
              </Link>

              <div className="ml-auto">
                <Link
                  href="/about"
                  className="mr-6 no-underline text-2xl text-gray-500 hover:text-gray600"
                >
                  会社概要
                </Link>

                <Link
                  href="/service"
                  className="mr-6 no-underline text-2xl text-gray-500 hover:text-gray600"
                >
                  サービス
                </Link>

                <Link
                  href="/news"
                  className="mr-6 no-underline text-2xl text-gray-500 hover:text-gray600"
                >
                  ニュース
                </Link>

                <Link
                  href="/"
                  className="mr-6 no-underline text-2xl text-gray-500 hover:text-gray600"
                >
                  お問い合わせ
                </Link>

                <Link
                  href="/recruit"
                  className="mr-16 no-underline text-2xl text-gray-500 hover:text-gray600"
                >
                  採用情報
                </Link>
              </div>
            </nav>
          </header>
          {children}
        </section>

        <footer className="bg-logo-blue-dark font-kosugimaru">
          {/* フォント指定 */}
          <div className="flex">
            <div>
              <p className="pt-11 pr-7 ml-10">
                <Link
                  href="/description"
                  className="no-underline text-3xl text-white hover:text-gray-300"
                >
                  仮タイトル
                </Link>
              </p>
            </div>

            <div>
              <p className="pt-11 pr-7">
                <Link
                  href="/description"
                  className="no-underline text-3xl text-white hover:text-gray-300"
                >
                  仮タイトル
                </Link>
              </p>
            </div>

            <div>
              <p className="pt-11 pr-7">
                <Link
                  href="/description"
                  className="no-underline text-3xl text-white hover:text-gray-300"
                >
                  仮タイトル
                </Link>
              </p>
            </div>

            <div>
              <p className="pt-11 pr-24">
                <Link
                  href="/description"
                  className="no-underline text-3xl text-white hover:text-gray-300"
                >
                  仮タイトル
                </Link>
              </p>
            </div>
          </div>
          <p className="text-center text-2xl mt-5 py-12 text-white font-zenmaru font-black">
            Copyright © 2023 TABA CORPORATION. All Rights Reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
