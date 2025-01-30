import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/vendor.bundle.css";
import { ReactNode } from 'react';
import type { Metadata } from "next";
import siteconfig from "@/data/config.json";


export const metadata: Metadata = {
  title: siteconfig.title,
  description: siteconfig.description,
};

export default function Layout({
  azalea
}: {
  azalea: ReactNode
}) {  
  return (
    <>{azalea}</>
  );
}