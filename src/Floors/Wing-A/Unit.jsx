import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { floorData } from "../../data/Wing-A-floorData";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function Unit() {
    const { id } = useParams(); // e.g. "1-2"
    const [floorId, unitId] = id.split("-");
    const floorIdNum = Number(floorId);
    const unitIdNum = Number(unitId);

    const navigate = useNavigate();

    const [zoomOpen, setZoomOpen] = useState(false);
    const [videoOpen, setVideoOpen] = useState(false);
    const [videoOpen1, setVideoOpen1] = useState(false);

    // ✅ Find the correct floor first
    const floor = floorData[floorIdNum];

    // ✅ Then find the correct unit in that floor
    const foundUnit = floor?.units.find((u) => u.id === unitIdNum) || null;
    // console.log("kkk" + foundUnit)

    if (!foundUnit) {
        return (
            <div className="flex flex-col w-full items-center justify-center h-screen bg-[#5d5c61] text-center p-6">
                <div className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-md mb-4">
                    Unit not found.
                </div>
                <button
                    onClick={() => navigate(-1)}
                    className="px-5 py-2 rounded-lg border border-white/70 text-white hover:bg-white hover:text-[#5d5c61] transition"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <>
            <div className="w-full h-screen flex flex-col md:flex-row bg-gray-600 justify-center items-center">
                {/* Main Image */}
                <div className="flex w-full md:w-[75%] bg-gray-400 items-center justify-center p-5">
                    <img
                        src={foundUnit.image2D2}
                        alt={`Unit ${foundUnit.id}`}
                        className="w-full h-auto rounded-lg shadow-lg object-contain max-h-[95vh]" />
                </div>

                {/* Right Side Buttons */}
                <div className="flex w-full justify-center items-center md:w-[25%]">
                    <div className="flex flex-col gap-4 justify-center">
                        <button
                            onClick={() => setVideoOpen(true)}
                            className="px-5 py-2 rounded-md text-white bg-gray-700 hover:bg-black transition shadow-md"
                        >
                            Explore Walkthrough
                        </button>
                        <button
                            onClick={() => setVideoOpen1(true)}
                            className="px-5 py-2 rounded-md text-white bg-gray-700 hover:bg-black transition shadow-md"
                        >
                            Explore Smart Home AV
                        </button>

                        <button
                            onClick={() => setZoomOpen(true)}
                            className="px-5 py-2 rounded-md text-white bg-gray-700 hover:bg-black transition shadow-md"
                        >
                            Zoom Image
                        </button>

                        <button
                            onClick={() => navigate(-1)}
                            className="px-5 py-2 rounded-md text-white bg-gray-700 hover:bg-black transition shadow-md"
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>

            {/* 🔍 Zoom Modal */}
            <Modal open={zoomOpen} onClose={() => setZoomOpen(false)}>
                <Box className="flex items-center justify-center h-screen w-screen bg-black/80" sx={{ outline: "none" }}>
                    <IconButton
                        onClick={() => setZoomOpen(false)}
                        sx={{
                            position: "absolute",
                            top: 20,
                            right: 20,
                            color: "white",
                            backgroundColor: "rgba(0,0,0,0.6)",
                            "&:hover": { backgroundColor: "rgba(0,0,0,0.9)" },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <img
                        src={foundUnit.image2D2}
                        alt={`Unit ${foundUnit.id}`}
                        className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg" />
                </Box>
            </Modal>

            {/* 🎥 Video Modal */}
            <Modal open={videoOpen} onClose={() => setVideoOpen(false)}>
                <Box className="flex items-center justify-center h-screen w-screen bg-black/90" sx={{ outline: "none" }}>
                    <IconButton
                        onClick={() => setVideoOpen(false)}
                        sx={{
                            position: "absolute",
                            top: 20,
                            right: 20,
                            color: "white",
                            backgroundColor: "rgba(0,0,0,0.6)",
                            "&:hover": { backgroundColor: "rgba(0,0,0,0.9)" },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    {/* <video
                        src={foundUnit.exploreVedio2D}
                        type="video/webm"
                        controls
                        autoPlay
                        className="max-h-[85vh] max-w-[85vw] rounded-lg shadow-lg" /> */}

                    <div style={{ width: "950px", height: "484px" }}>
                        <wistia-player
                            media-id={foundUnit.exploreVedio2D}
                            wistia-popover="true"
                            aspect="1.7777777777777777"
                            style={{ width: "100%", height: "100%" }}
                        ></wistia-player>
                    </div>

                </Box>
            </Modal>



            <Modal open={videoOpen1} onClose={() => setVideoOpen1(false)}>
                <Box className="flex items-center justify-center h-screen w-screen bg-black/90" sx={{ outline: "none" }}>
                    <IconButton
                        onClick={() => setVideoOpen1(false)}
                        sx={{
                            position: "absolute",
                            top: 20,
                            right: 20,
                            color: "white",
                            backgroundColor: "rgba(0,0,0,0.6)",
                            "&:hover": { backgroundColor: "rgba(0,0,0,0.9)" },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    {/* <video
                        src={floor.ExploreHomes}
                        controls
                        autoPlay
                        className="max-h-[85vh] max-w-[85vw] rounded-lg shadow-lg" /> */}
                    <div style={{ width: "950px", height: "484px" }}>
                        <wistia-player
                            media-id={floor.ExploreHomes}
                            wistia-popover="true"
                            aspect="1.7777777777777777"
                            style={{ width: "100%", height: "100%" }}
                        ></wistia-player>
                    </div>
                </Box>
            </Modal>
        </>
    );
}
