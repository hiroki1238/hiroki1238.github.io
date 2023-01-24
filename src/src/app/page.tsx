import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-16 ml-16">
      <p className="text-4xl mb-16">株式会社たば</p>
      <div className="flex">
        <div>
          <Link href="/about">私たちについて</Link>
          <br />
          <Link href="/about">私たちについて</Link>
          <br />
          <Link href="/about">私たちについて</Link>
        </div>
        <div>
          <img src="./image/office.jpg" className="w-4/5 ml-auto mr-auto" />
        </div>
      </div>
    </div>
  );
}
