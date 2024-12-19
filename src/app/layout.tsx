import "./vendor.bundle.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import defaultConfig from "@/configs/default.json";
import { ReactNode } from 'react';


export const metadata: Metadata = {
  title: defaultConfig.title,
  description: defaultConfig.description,
};

interface LayoutProps {
  azalea: ReactNode
}

export default function Layout({
  azalea
}: LayoutProps) 
{  
  return (
    <>{azalea}</>
  );
}