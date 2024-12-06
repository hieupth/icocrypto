import page from '@/configs/page.json';
import type { Metadata } from "next";
import DynamicLayout from '@/app/dynamicLayout';
import defaultConfig from "@/configs/default.json";

export const metadata: Metadata = {
  title: defaultConfig.title,
  description: defaultConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = page.theme;

  return (
    <html>
      <body>
        <DynamicLayout theme={theme}>
          {children}
        </DynamicLayout>    
      </body>
    </html>
  );
}