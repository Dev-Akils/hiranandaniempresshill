import { FaPlay, FaCirclePause } from "react-icons/fa6";

import { IoIosExpand } from "react-icons/io";
import { HiOutlineSpeakerXMark, HiOutlineSpeakerWave } from 'react-icons/hi2';
export default function VideoFooter({ handlePlay, handlePause, handleMute, handleFullscreen,isMuted }) {
  
  return (
    <div className="absolute bottom-0 w-full bg-black/70 flex flex-col md:flex-row md:items-center">
      {/* Controls */}
      <div className="w-full md:w-[20%] flex justify-center gap-6 py-3 bg-gradient-to-r from-white/90 to-white/80  shadow-lg text-black font-semibold">
        <button onClick={handlePlay} className="hover:text-orange-400 transition">
          <FaPlay size={20} />
        </button>
        <button onClick={handlePause} className="hover:text-orange-400 transition">
          <FaCirclePause size={20} />
        </button>
        <button onClick={handleMute} className="hover:text-orange-400 transition">
          {isMuted ? (
            <HiOutlineSpeakerXMark size={20} /> // Muted icon
          ) : (
            <HiOutlineSpeakerWave size={20} /> // Unmuted icon
          )}
        </button>
        <button onClick={handleFullscreen} className="hover:text-orange-400 transition">
          <IoIosExpand size={22} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="w-full md:flex-1 flex text-[#b68534] flex-wrap justify-center gap-4 md:gap-5 py-3 text-center">
        <a href="/entrance-video" className="text-sm  hover:text-orange-400 transition">
          HOME
        </a>
        <a href="/masterplan" className="text-sm  hover:text-orange-400 transition">
          ROCKRIDGE GREENS
        </a>
        <a href="/terrace_aminities" className="text-sm  hover:text-orange-400 transition">
          EXPLORE TERRACE AMENITIES
        </a>
        <a href="/explore_homes" className="text-sm  hover:text-orange-400 transition">
          EXPLORE HOMES
        </a>
        <a href="/gallery" className="text-sm  hover:text-orange-400 transition">
          GALLERY
        </a>
      </nav>
    </div>
  );
}
