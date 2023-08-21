"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface NewsItemProps {
  title: string;
  category: string;
  img: string;
  date: string;
}

const NewsItem: React.FC<NewsItemProps> = (props) => {
  const { date, title, category, img } = props;
  const router = useRouter();

  return (
    <div className="mb-20 flex">
      <div className="mr-20">
        <p className="text-lg mt-2 text-gray-500 mb-2">{date}</p>
        <p className="text-2xl text-gray-600">
          {title}
        </p>
        <p className="bg-gray-200 text-gray-400 rounded mt-1 px-2 inline-block mr-2">
          {category}
        </p>
      </div>
      <img
        src={img}
        className="border border-gray-300 rounded-xl w-2/5"
      />
    </div>
  );
};

export default NewsItem;
