import "./globals.css";
import Head from "next/head";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>株式会社たば</title>
      </Head>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <section className="font-kosugimaru"> {/* フォント指定 */}
        <header className="bg-white h-10 pb-32">
          <nav className="pt-12">
          <Link
              href="/description"
              className="mr-6 no-underline text-3xl text-gray-500 hover:text-gray600"
            >
              株式会社たば（ロゴを設置）
            </Link>

            <Link
              href="/description"
              className="mr-6 no-underline text-3xl text-gray-500 hover:text-gray600"
            >
              会社概要
            </Link>
            <Link
              href="/description"
              className="mr-6 no-underline text-3xl text-gray-500 hover:text-gray600"
            >
              サービス
            </Link>
            <Link
              href="/description"
              className="mr-6 no-underline text-3xl text-gray-500 hover:text-gray600"
            >
              ニュース
            </Link>
            <Link
              href="/description"
              className="mr-6 no-underline text-3xl text-gray-500 hover:text-gray600"
            >
              お問い合わせ
            </Link>
            <Link
              href="/description"
              className="mr-4 no-underline text-3xl text-gray-500 hover:text-gray600"
            >
              採用情報
            </Link>
          </nav>
        </header>
        <body>{children}</body>
      </section>
      <footer className="bg-gray-200 font-kosugimaru"> {/* フォント指定 */}
        <div className="flex">
          <div>
            <p className="pt-11 pr-7">
              <Link
                href="/description"
                className="no-underline text-3xl text-gray-500 hover:text-gray600"
              >
                仮タイトル
              </Link>
            </p>
          </div>

          <div>
            <p className="pt-11 pr-7">
              <Link
                href="/description"
                className="no-underline text-3xl text-gray-500 hover:text-gray600"
              >
                仮タイトル
              </Link>
            </p>
          </div>

          <div>
            <p className="pt-11 pr-7">
              <Link
                href="/description"
                className="no-underline text-3xl text-gray-500 hover:text-gray600"
              >
                仮タイトル
              </Link>
            </p>
          </div>

          <div>
            <p className="pt-11 pr-24">
              <Link
                href="/description"
                className="no-underline text-3xl text-gray-500 hover:text-gray-600"
              >
                仮タイトル
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-2xl mt-5 py-12 text-gray-600 font-zenmaru font-black">
          Copyright © 2023 TABA CORPORATION. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
