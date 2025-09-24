import masterplan from '../assets/masterplan.jpg'
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import { amenities } from '../data/Amenities';

export default function ExploreRockRidge() {
    const [hoveredId, setHoveredId] = useState(null);
    const navigate = useNavigate();
    return (<>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center h-screen gap-2 ">
            {/* Amenities List */}
            <div
                className="lg:w-[50%] w-full h-full"
            >
                <div className='  bg-[#5d5c61] p-2 text-white text-sm grid grid-cols-2 gap-2 h-auto '>
                    {/* Left side (1–20) */}
                    <div className="space-y-[3.3px]">
                        {[...new Map(
                            amenities.filter((item) => item.id <= 20).map((item) => [item.id, item])
                        ).values()].map((item) => (
                            <div
                                key={item.id}
                                onMouseEnter={() => setHoveredId(item.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className={`cursor-pointer transition  flex items-center p-1 gap-2
                        ${hoveredId === item.id ? "text-black bg-white rounded-lg" : "text-white"}
                            `}
                            >
                                <button
                                    className="bg-black/50 shadow-lg rounded-full text-center text-white w-6 h-6 flex items-center justify-center text-xs"
                                >
                                    {item.id}
                                </button>
                                <span>{item.title}</span>
                            </div>

                        ))}
                    </div>

                    {/* Right side (21–40) */}
                    <div className="space-y-[3.3px]">
                        {[...new Map(
                            amenities.filter((item) => item.id > 20).map((item) => [item.id, item])
                        ).values()].map((item) => (
                            <div
                                key={item.id}
                                onMouseEnter={() => setHoveredId(item.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className={`cursor-pointer transition  flex items-center gap-2 p-1
                              ${hoveredId === item.id ? "text-black bg-white rounded-lg" : "text-white"}
                            `}
                            >
                                <button
                                    className="bg-black/50 shadow-lg rounded-full text-center text-white w-6 h-6 flex items-center justify-center text-xs"
                                >
                                    {item.id}
                                </button>
                                <span>{item.title}</span>
                            </div>

                        ))}
                    </div>
                </div></div>


            <div className="w-full md:w-[75%] max-w-[1200px] ">
                <div
                    className="relative w-full aspect-[16/11] bg-no-repeat bg-center"
                    style={{
                        backgroundImage: `url(${masterplan})`,
                        backgroundSize: "contain",   // 👈 always show full image, no crop
                    }}
                >
                    <div className="absolute lg:top-5 -top-32 left-1/4  lg:left-3/4 flex flex-col  gap-3 md:gap-4">

                        <button onClick={() => navigate(-1)} className="bg-black/50 rounded-lg text-white hover:bg-black/80 font-bold px-4 md:px-8 py-2 text-center gap-2 flex justify-center items-center text-sm md:text-base">
                            <IoMdArrowRoundBack /> Back
                        </button>


                        <Link to="/explorewalkthrough">
                            <button className="bg-black/50 rounded-lg text-white hover:bg-black/80 font-bold px-4 md:px-6 py-2 text-center gap-2 flex justify-center items-center text-sm md:text-base">
                                <FaArrowRight /> Explore
                            </button>
                        </Link>
                    </div>


                    {/* Markers */}
                    {amenities.map((item, idx) => (
                        <div
                            key={`${item.id}-${idx}`} // 👈 differentiate duplicates
                            id={`amenity-${item.id}-${idx}`}
                            className={`absolute w-1 h-1 lg:w-3 lg:h-3 rounded-full cursor-pointer text-[5px] lg:text-[8px] text-center
                            ${hoveredId === item.id ? "bg-yellow-400 scale-125 text-black" : "bg-red-600 text-white"}
                            transition`}
                            style={{ top: `${item.top}%`, left: `${item.left}%` }}
                            data-tooltip-id={`tooltip-${item.id}-${idx}`}
                            data-tooltip-content={item.title}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >{item.id}</div>
                    ))}

                    {/* Tooltips */}
                    {amenities.map((item, idx) => (
                        <Tooltip
                            key={`${item.id}-${idx}`}
                            id={`tooltip-${item.id}-${idx}`}
                            place="top"
                            style={{ backgroundColor: "#333", color: "#fff", fontSize: "14px" }}
                        />
                    ))}
                </div>
            </div>
        </div>

    </>)
}