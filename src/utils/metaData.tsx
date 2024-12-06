import type { Metadata } from "next";
import defaultConfig from "@/configs/default.json";

export const metadata: Metadata = {
  title: defaultConfig.title,
  description: defaultConfig.description,
};