'use client'
import page from '@/configs/page.json';
import { Suspense, useEffect, useState } from "react";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = page.theme;
  const [Layout, setLayout] = useState<React.ComponentType<{ children: React.ReactNode }> | null>(null);

  useEffect(()=>{
    import(`@/themes/${theme}/layout`)
    .then((module)=>{
      setLayout(() => module.default)
    })
    .catch((error) => {
      console.error("Failed to load theme:", error);
    });
  },[theme])  

  return (
    <Suspense fallback={<div>Loading...</div>}>
        {Layout ? <Layout>{children}</Layout> : <div>Theme not loaded.</div>}
    </Suspense>
  );
}
