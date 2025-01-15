import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/vendor.bundle.css";
import { ReactNode } from 'react';
import type { Metadata } from "next";
import siteconfig from "@/config.json";


export const metadata: Metadata = {
  title: siteconfig.general.title,
  description: siteconfig.general.description,
};

export default function Layout({
  azalea,
  gentian
}: {
  azalea: ReactNode,
  gentian: ReactNode
}) {
  switch(siteconfig.theme) {
    case "gentian": return <>{gentian}</>
    default: return <>{azalea}</>
  }
}