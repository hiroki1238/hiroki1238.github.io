"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NewsItemProps {
  title: string;
  category: string;
  img: string;
  date: string;
  url: string;
}

const NewsItem: React.FC<NewsItemProps> = (props) => {
  const { date, title, category, img, url } = props;
  const router = useRouter();

  return (
    <div className="mb-20 mx-12">
      <div className="flex">
        <p className="text-lg mt-2 text-gray-500 mb-2">{date}</p>
        <p className="bg-gray-200 text-gray-400 rounded ml-4 px-2 h-6 mt-2">
          {category}
        </p>
      </div>
      <p className="text-2xl text-gray-600 mb-4">{title}</p>
      <Link href={url}>
        <img
          src={img}
          className="border border-gray-300 rounded-xl shadow-md hover:shadow-2xl aspect-newsimg object-cover"
        />
      </Link>
    </div>
  );
};

export default NewsItem;
