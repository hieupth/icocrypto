'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Form from "@/components/elements/element-form";
import Countdown from "@/components/Countdown";
import Chart from "@/components/elements/element-chart";
import Notification from "@/components/elements/element-notification";
import Element_Countdown from "@/components/elements/element-countdown";



export default function Home() {
const router = useRouter()
const handleGo = () => {
  router.push('/about')
}

  return (
    <main >
    {/* <button onClick={handleGo}>Go to about</button> */}
    {/* <Form/> */}
      {/* <Chart/> */}
      {/* <Notification/> */}
      <Element_Countdown/>
      {/* <Countdown title="" percent="" caption="" subtitle="" endDate="01/01/2025"></Countdown> */}
    </main>

  );
}