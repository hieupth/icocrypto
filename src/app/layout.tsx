import type { Metadata } from "next";
import defaultConfig from "@/configs/default.json"
import AzaleaLayout from "@/themes/azalea/layout";


export const metadata: Metadata = {
  title: defaultConfig.title,
  description: defaultConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AzaleaLayout>{children}</AzaleaLayout>
  );
}
