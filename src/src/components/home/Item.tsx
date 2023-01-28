"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ItemProps {
  title: string;
  message: string;
  button: string;
  path: string;
  img: string;
}



const Item: React.FC<ItemProps> = (props) => {
  const { title, message, button, path, img } = props;
  const router = useRouter();

  return (
    <div className="mt-20 flex">
      <div className="w-3/4">
        <p className="text-6xl text-gray-600 font-black font-zenmaru">{title}</p>
        <p className="text-xl mt-2 text-gray-400">私たちについて</p>
        <p className="text-2xl mt-10 mr-10 text-gray-600">{message}</p>
        <button
          className="mt-10 ml-10 py-4 px-6 text-xl bg-transparent border-2 border-slate-700 hover:border-transparent rounded-xl hover:bg-slate-700 text-slate-700 hover:text-white"
          type="button" onClick={() => router.push("/about")}>{button}</button>
      </div>
      <div className="w-3/7">
        <img
          src={img}
          className="border border-gray-400 rounded-xl"
        />
      </div>
    </div>
  );
}

export default Item;