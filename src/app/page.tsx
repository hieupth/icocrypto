'use client'
import Ikon from "@/components/elements/element-ikon";
import Modals from "@/components/elements/element-modals";
import PictureModals from "@/components/elements/element-picture-modals";
import PlayVideos from "@/components/elements/element-play-videos";
import VideoModals from "@/components/elements/element-video-modals";
import Videos from "@/components/elements/element-videos";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)

  const openHandle = () => {
    setOpen(true)
  }

  const closeHandle = () => {
    setOpen(false)
  }

  const openHandle2 = () => {
    setOpen2(true)
  }

  const closeHandle2 = () => {
    setOpen2(false)
  }

  return (
    <>
      <Videos src="https://www.youtube.com/watch?v=3m30BWkkssA"
      type={1}
      thumb="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZr3ZgReTYWifTT4rRFIl4h506L_mViQRAQ&s"
      />
      <button onClick={openHandle}>Open modals content <Ikon ico="ikon-bulb"/></button>
        <Modals size="xl" position="center" open={open} onClose={closeHandle}>
          <div className="row">
              <img src="https://neweralive.na/wp-content/uploads/2024/06/lloyd-sikeba.jpg" className="col-6"/>
              <div className="col-6">
                <h3>Header</h3>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias provident optio aperiam est possimus veritatis, suscipit pariatur laboriosam deserunt aspernatur voluptas, eveniet beatae iure repudiandae aliquid. Debitis dolores vero nisi.</span>
              </div>
          </div>
      </Modals>
      <button onClick={openHandle2}>Open modals picture <Ikon ico="ikon-bulb"/></button>
      <PictureModals src="https://neweralive.na/wp-content/uploads/2024/06/lloyd-sikeba.jpg" open={open2} onClose={closeHandle2}/>
    </>
  );
}