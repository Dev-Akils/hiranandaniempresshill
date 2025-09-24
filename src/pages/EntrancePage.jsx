import bgLogo1 from '../assets/Image_435AD409_4145_603B_41CA_4CBBC6497713_en.png';
import bgLogo2 from '../assets/Image_433C72D8_413D_21D9_41B3_1CA66D6EFCA0_en.jpg';
import { useEffect, useRef, useState } from 'react';
import audio from '../audio/audio1.wav';
import EnableAudioPopup from "../components/EnableAudioPopup";
import { useNavigate } from "react-router-dom";

export default function EntrancePage() {
    const [showPopup, setShowPopup] = useState(true);
    const [showAudio, setShowAudio] = useState(false);
    const audioRef = useRef(null);
    const navigate = useNavigate();

    const handleYes = () => {
        sessionStorage.setItem("popupSeen", "true");
        setShowPopup(false);
        setShowAudio(true);
        audioRef.current.play();
    };

    const handleNo = () => {
        sessionStorage.setItem("popupSeen", "true");
        setShowPopup(false);
    };

    const handleExplore = () => {
        navigate("/entrance-video"); // ✅ navigate to video page
    };

    // Show popup only first time
    useEffect(() => {
        const alreadySeen = sessionStorage.getItem("popupSeen");
        if (alreadySeen) {
            setShowPopup(false);
        }
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center w-full h-screen p-4">
            {/* Popup */}
            {showPopup && <EnableAudioPopup onYes={handleYes} onNo={handleNo} />}

            {/* Hidden Audio */}
            {showAudio && (
                <audio ref={audioRef} autoPlay>
                    <source src={audio} type="audio/mpeg" />
                    Your browser does not support audio.
                </audio>
            )}

            {/* Top Logo */}
            <div>
                <img src={bgLogo1} alt="bgLogo1" className="w-40 h-auto object-contain" />
            </div>

            {/* Middle Image */}
            <div>
                <img src={bgLogo2} alt="bgLogo2" className="w-[600px] h-auto object-contain" />
            </div>

            {/* Bottom Button */}
            <div className="mb-6">
                <button
                    onClick={handleExplore}
                    className={`bg-[#616161] ${showPopup ? "hidden" : "block"} font-bold text-xl text-white hover:text-black hover:bg-gradient-to-r hover:from-white/90 hover:to-white/80 px-8 xl:px-28 lg:px-28 md:px-28 py-5 shadow-md transition duration-300 ease-in-out transform`}
                >
                    Click Here to Explore
                </button>
            </div>
        </div>
    );
}
