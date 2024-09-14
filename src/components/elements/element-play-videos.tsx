/**
 * PlayVideos component
 * 
 * Embeds a YouTube video based on the provided URL. It extracts the video ID from the URL and renders an iframe for playback.
 * 
 * @component
 * @example
 * <PlayVideos src="https://www.youtube.com/watch?v=N2QAAzSyxAg" />
 * 
 * @param {Object} props - The properties for the PlayVideos component.
 * @param {string} props.src - The URL of the YouTube video to embed.
 * 
 * @returns {JSX.Element} The iframe element for embedding the YouTube video or an error message if the URL is invalid.
 * 
 * @author thinhphoenix
 */

import React from 'react';

interface PlayVideosProps {
  src: string;
}

export default function PlayVideos({ src }: PlayVideosProps) {
  // Function to extract video ID from the URL
  const getVideoId = (url: string) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(src);

  if (!videoId) {
    return <p>Invalid YouTube URL</p>;
  }

  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      width={750}
      height={420}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{ border: 'none' }}
      className='video-popup'
    ></iframe>
  );
}