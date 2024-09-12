import Ikon from "@/components/elements/ikon";
import Modals from "@/components/elements/modals";
import PictureModals from "@/components/elements/picture-modals";
import PlayVideos from "@/components/elements/play-videos";
import VideoModals from "@/components/elements/video-modals";
import Videos from "@/components/elements/videos";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Modals open={true} size="xl" position="center">
        <h3>Header</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Modals>
    </>
  );
}
