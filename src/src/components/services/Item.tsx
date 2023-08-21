"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ServiceItemProps {
img: string;
description: string;
title: string;
}

const ServiceItem: React.FC<ServiceItemProps> = (props) => {
  const { img, description, title } = props;
  const router = useRouter();

  return (
    <div className="mr-6">
      <img
        src={img}
        className="border border-gray-300 rounded-xl aspect-service object-cover"
      />
      <p className="mt-4 text-xl">{description}</p>
      <p className="mt-5 text-3xl">{title}</p>
    </div>
  );
};

export default ServiceItem;
