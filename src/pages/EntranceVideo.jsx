// src/pages/EntranceVideo.jsx
import { useRef,useState } from "react";
import vedio from "../vedio/Entrance Walkthrough.webm";
import VideoFooter from "../components/VedioFooter";

export default function EntranceVideo() {
  const videoRef = useRef(null);
const [isMuted, setIsMuted] = useState(false);
  const handlePlay = () => videoRef.current?.play();
  const handlePause = () => videoRef.current?.pause();
  // const handleMute = () => (videoRef.current.muted = !videoRef.current.muted);
  const handleFullscreen = () => videoRef.current.requestFullscreen?.();
  const handleMute = () => {
  if (videoRef.current) {
    const newMutedState = !videoRef.current.muted;
    videoRef.current.muted = newMutedState;
    setIsMuted(newMutedState);
  }
};




  return (
    <div className="fixed inset-0 w-screen h-screen bg-black">
      {/* Video Background */}
      <video
        ref={videoRef}
        src={vedio}
        autoPlay
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-screen object-contain lg:object-cover xl:object-cover"
      />

      {/* Bottom Nav */}
      <div className="absolute bottom-0 w-full bg-black/70 flex flex-col md:flex-row md:items-center">
        <VideoFooter
          handlePlay={handlePlay}
          handlePause={handlePause}
          handleMute={handleMute}
          handleFullscreen={handleFullscreen}
          isMuted={isMuted}
        />
      </div>
    </div>
  );
}
