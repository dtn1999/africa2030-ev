"use client";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import Link from "next/link";

export interface ButtonProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  attributes?: any;
  text?: string;
  link?: string;
  openLinkInNewTab?: boolean;
  variant?: "solid" | "outline" | "ghost" | "link";
  primaryColor: string;
  secondaryColor: string;
}

export function CustomButton({ ...props }: ButtonProps) {
  console.log("props ", props);
  const { attributes = {}, link, text, openLinkInNewTab } = props;
  const { key, ...restAttributes } = attributes;
  const Tag = link ? Link : "span";

  return (
    <Tag
      role="button"
      href={link ?? "#"}
      target={openLinkInNewTab ? "_blank" : undefined}
      key={undefined}
      {...restAttributes}
    >
      {text}
    </Tag>
  );
}