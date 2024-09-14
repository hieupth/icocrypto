"use client";
import React, { useState } from "react";
import Image from "next/image";
import PlayVideos from "@/components/elements/element-play-videos";
import VideoModals from "@/components/elements/element-video-modals";

interface VideosProps {
  type?: number; // Make type optional
  thumb: string;
  src: string; // Added src prop
}

const Videos: React.FC<VideosProps> = ({ type = 0, thumb, src }) => { // Provide default value for type
  const [toggleVideo, setToggleVideo] = useState(false);

  const handleVideo = () => {
    setToggleVideo(true);
  };

  return (
    <>
      {toggleVideo && (
        <VideoModals open={toggleVideo} onClose={() => setToggleVideo(false)}>
          <PlayVideos src={src} /> {/* Use src prop here */}
        </VideoModals>
      )}
      {type === 1 && (
        <div className="nk-block-video">
          <div
            style={{ position: "relative", width: "500px", height: "300px" }}
          >
            <Image
              src={thumb}
              layout="fill"
              objectFit="cover"
              alt="Video thumbnail"
            />
            <a
              onClick={handleVideo}
              href="#"
              className={`nk-block-video-play video-popup btn-play btn-play-sm btn-play`}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
                textDecoration: "none",
              }}
            >
              <em className="fas fa-play"></em>
            </a>
          </div>
        </div>
      )}
      {type === 2 && (
        <div className="nk-block-video">
          <div
            style={{ position: "relative", width: "500px", height: "300px" }}
          >
            <Image
              src={thumb}
              layout="fill"
              objectFit="cover"
              alt="Video thumbnail"
            />
            <a
              onClick={handleVideo}
              href="#"
              className={`nk-block-video-play video-popup btn-play btn-play-sm btn-play-s2`}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 9,
              }}
            >
              <em className="btn-play-icon"></em>
            </a>
          </div>
        </div>
      )}
      {type === 3 && (
        <div className="nk-block-video">
          <div
            style={{ position: "relative", width: "500px", height: "300px" }}
          >
            <Image
              src={thumb}
              layout="fill"
              objectFit="cover"
              alt="Video thumbnail"
            />
            <a
              onClick={handleVideo}
              href="#"
              className={`nk-block-video-play video-popup btn-play btn-play-sm btn-play-s3`}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
              }}
            >
              <svg
                className="btn-play-icon-s2"
                viewBox="0 0 24 34"
                style={{
                  marginLeft: "2.5px",
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M0.212,32.552 C0.427,32.851 0.769,33.010 1.117,33.010 C1.337,33.010 1.559,32.947 1.752,32.814 L23.521,17.879 C23.816,17.678 23.991,17.350 23.991,16.998 C23.991,16.646 23.816,16.319 23.521,16.115 L1.752,1.181 C1.415,0.950 0.972,0.922 0.606,1.107 C0.240,1.292 0.010,1.661 0.010,2.064 L0.010,22.480 C0.010,23.076 0.506,23.558 1.116,23.558 C1.727,23.558 2.222,23.076 2.222,22.480 L2.222,4.142 L20.963,16.998 L0.479,31.049 C-0.020,31.393 -0.140,32.066 0.212,32.552 Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      )}
      {type === 0 && (
        <div className="nk-block-video nk-responsive-video embed-responsive embed-responsive-16by9 round">
          <PlayVideos src={src} />
        </div>
      )}
    </>
  );
};

export default Videos;