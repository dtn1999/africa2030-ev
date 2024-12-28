import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { RawText } from "@builder.io/react";

interface GoalCardProps {
  image: string;
  title: string;
  description: any;
  tag: string;
  link: string;
}

export function ResourceCard({
  image,
  title,
  tag,
  description,
  link,
}: GoalCardProps) {
  return (
    <Link
      href={link ?? "#"}
      target="_blank"
      className="my-10 px-10 grid grid-cols-1 md:grid-cols-2 bg-background shadow-xl rounded-[13px] md:p-[40px] p-[10px] gap-10"
    >
      <div className="h-[480px] w-full">
        <AspectRatio ratio={16 / 9} className="bg-muted w-full h-[480px]">
          <Image
            src={image}
            alt="Photo by Drew Beamer"
            fill
            className="h-full w-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <div className="relative">
        <div className="hidden md:block w-fit bg-primary text-white border-[2px] px-[9px] rounded-[13px] border-primary mt-10 mb-5 uppercase">
          {tag}
        </div>
        <h3 className="text-[30px] font-semibold text-headings mb-[11px]">
          {title}
        </h3>
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          className="text-text"
        ></p>
      </div>
    </Link>
  );
}
