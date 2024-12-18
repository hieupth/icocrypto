'use client'
import { Suspense, useEffect, useState } from "react";

type DynamicLayoutProps = {
  theme: string;
  children: React.ReactNode;
};

const DynamicLayout = ({ theme, children }: DynamicLayoutProps) => {
  const [Layout, setLayout] = useState<React.ComponentType<{ children: React.ReactNode }> | null>(null);

  useEffect(() => {
    import(`@/themes/${theme}/layout`)
      .then((module) => {
        setLayout(() => module.default);
      })
      .catch((error) => {
        console.error("Failed to load theme:", error);
      });
  }, [theme]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {Layout ? <Layout>{children}</Layout> : <div>Theme not loaded.</div>}
    </Suspense>
  );
};

export default DynamicLayout;
