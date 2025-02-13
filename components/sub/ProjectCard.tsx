import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  href: string;
}

const ProjectCard = ({ src, title, description, href }: Props) => {
  return (
    <div className="relative  overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-[350px]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <Link href={href} className="cursor-pointer" target="_blank">
            🔗
          </Link>
        </div>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
