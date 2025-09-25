import { useRef, useState } from "react";

// import terrace from "../vedio/Terrace Amenities Walkthrough.webm";
import VideoFooter
    from "../components/VedioFooter";

export default function TerraceAminities() {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(false);
    const handlePlay = () => videoRef.current?.play();
    const handlePause = () => videoRef.current?.pause();
    // const handleMute = () => videoRef.current.muted = !videoRef.current.muted;
    const handleFullscreen = () => videoRef.current.requestFullscreen?.();
    const handleMute = () => {
        if (videoRef.current) {
            const newMutedState = !videoRef.current.muted;
            videoRef.current.muted = newMutedState;
            setIsMuted(newMutedState);
        }
    };

    return (
        <div className="relative w-full h-screen bg-black">
            {/* <div className="w-full h-screen aspect-video relative 
                sm:max-w-sm 
                md:max-w-[1900px] 
                lg:max-w-[1900px] 
                xl:max-w-[1920px] 
                2xl:max-w-[2000px] mx-auto"> */}
            {/* Background Video */}
            {/* <video
                ref={videoRef}
                src={terrace}
                autoPlay
                loop

                playsInline
                className="absolute top-0 left-0 w-full h-screen object-contain lg:object-cover xl:object-cover"
            /> */}

            <div style={{ width: "100%", height: "100%" }}>
                <wistia-player
                    media-id="jdpspm1uqo"
                    wistia-popover="true"
                    aspect="1.7777777777777777"
                    style={{ width: "100%", height: "100%" }}
                ></wistia-player>
            </div>
            {/* </div> */}
            {/* Content above video */}
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
