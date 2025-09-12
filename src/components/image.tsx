"use client";
import type { ComponentProps } from "react";
import NextImage from "next/image";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

//
const basePath = process.env.BASE_PATH || process.env.NEXT_PUBLIC_BASE_PATH || ""

// 
function withBasePath(src: string | StaticImport): string | StaticImport {
  if (typeof src !== "string") return src;
  if (/^https?:\/\//i.test(src)) return src;
  return `${basePath}/${src}`.replace(/\/{2,}/g, "/")
}

export default function Image(props: ComponentProps<typeof NextImage>) {
  return <NextImage {...props} src={withBasePath(props.src)} />;
}