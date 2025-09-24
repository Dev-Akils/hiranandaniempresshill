import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Tooltip, Button, Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { floorData } from "../../data/Wing-D-floorData";

export default function FloorD() {
    const { id } = useParams(); // floor id from URL
    // const floorIndex = parseInt(id, 10) - 1;
    // const floor = floorData[floorIndex];
    const floor = floorData[id];
    const [selectedFloor, setSelectedFloor] = useState(null);
    const [hoveredFloor, setHoveredFloor] = useState(null);
    const [zoomOpen, setZoomOpen] = useState(false);
    // console.log("...." + floorData)
    const navigate = useNavigate();

    if (!floor) return <div className="flex flex-col items-center justify-center h-screen bg-[#5d5c61] text-center p-6">
        <div className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-md mb-4">
            Floor data not found.
        </div>

        <button
            onClick={() => navigate(-1)} // go back to previous page
            className="px-5 py-2 rounded-lg border border-white/70 text-white hover:bg-white hover:text-[#5d5c61] transition"
        >
            Go Back
        </button>
    </div>

    return (
        <div className="flex gap-6 flex-col md:flex-row p-5 w-full h-screen">
            {/* Sidebar (Units List) */}
            <div className="md:w-[20%] w-full flex flex-col items-center justify-center border-r p-4">
                <h3 className="text-xl font-semibold mb-4">UNITS</h3>
                {floor.units.map((unit) => (
                    <Button
                        key={unit.id}
                        fullWidth
                        variant="contained"
                        sx={{
                            mb: 2,
                            backgroundColor:
                                hoveredFloor === unit.id || selectedFloor === unit.id
                                    ? "black"
                                    : "#5d5c61",
                            "&:hover": { backgroundColor: "black" },
                            transition: "0.3s"
                        }}
                        onMouseEnter={() => setHoveredFloor(unit.id)}
                        onMouseLeave={() => setHoveredFloor(null)}
                        onClick={() => setSelectedFloor(unit.id)}
                    >
                        {unit.name} ({unit.type})
                    </Button>
                ))}
                <div className="mt-3 space-x-2">
                    {Object.values(floor.buttonSettings).map((btn, idx) => (
                        <button
                            key={idx}
                            className="px-5 py-2 rounded-sm"
                            style={{ backgroundColor: btn.bgColor }}
                        >
                            {btn.text}
                        </button>
                    ))}
                </div>
            </div>

            {/* Floor Plan Image with Polygons */}
            <div className="relative w-full md:h-screen flex items-center justify-center">
                <svg
                    viewBox={floor.imageSettings.svgSize}
                    className="w-full h-auto"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <image
                        href={floor.image}
                        width={floor.imageSettings.imageWidth}
                        height={floor.imageSettings.imageHeight}
                    />
                    {floor.units.map((unit) => (
                        <Tooltip
                            key={unit.id}
                            title={`${unit.name} (${unit.type})`}
                            arrow
                            placement="top"
                            componentsProps={{
                                tooltip: {
                                    sx: {
                                        bgcolor: "#ff7043",
                                        fontSize: "0.85rem",
                                        padding: "5px 8px"
                                    }
                                }
                            }}
                        >
                            <polygon
                                transform="translate(0, 155)"
                                points={unit.polygonPoints}
                                fill={
                                    selectedFloor === unit.id
                                        ? "rgba(255,112,67,0.5)"
                                        : hoveredFloor === unit.id
                                            ? unit.hoverColor
                                            : "transparent"
                                }
                                strokeWidth={2}
                                style={{ cursor: "pointer" }}
                                onMouseEnter={() => setHoveredFloor(unit.id)}
                                onMouseLeave={() => setHoveredFloor(null)}
                                onClick={() => setSelectedFloor(unit.id)}
                            />
                        </Tooltip>
                    ))}
                </svg>
            </div>

            {/* Right Sidebar */}
            <div className="md:w-[20%] w-full flex flex-col items-center justify-center border-r p-4">
                <Link to={`/explore_homes`} className="w-full">
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            mb: 2,
                            backgroundColor: "#5d5c61",
                            "&:hover": { backgroundColor: "black" },
                            transition: "0.3s"
                        }}
                    >
                        Go Back
                    </Button>
                </Link>

                <Button
                    className="w-full"
                    onClick={() => setZoomOpen(true)}
                    variant="outlined"
                    sx={{
                        borderColor: "#5d5c61",
                        color: "#b68534",
                        "&:hover": { borderColor: "#d4a373", color: "#d4a373" }
                    }}
                >
                    Zoom Image
                </Button>

                <div className="mt-3 p-2 border border-gray-300 rounded-sm w-full">
                    <h3 className="text-xl font-semibold mb-4">TOWER FEATURES</h3>
                    <ul className="list-disc list-inside space-y-2 mb-6 text-[12px]">
                        {floor.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Zoom Modal */}
            <Modal open={zoomOpen} onClose={() => setZoomOpen(false)}>
                <Box
                    className="flex items-center justify-center h-screen w-screen bg-black/80"
                    sx={{ outline: "none" }}
                >
                    <IconButton
                        onClick={() => setZoomOpen(false)}
                        sx={{
                            position: "absolute",
                            top: 20,
                            right: 20,
                            color: "white",
                            backgroundColor: "rgba(0,0,0,0.6)",
                            "&:hover": { backgroundColor: "rgba(0,0,0,0.9)" }
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <img
                        src={floor.image}
                        alt={`Floor ${id}`}
                        className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
                    />
                </Box>
            </Modal>
        </div>
    );
}
