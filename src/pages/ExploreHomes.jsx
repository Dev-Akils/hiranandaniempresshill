import { useState } from 'react'
import bgImage from '../assets/GalleryImagesInterior/ReceptionArea_01.jpg'
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
export default function ExploreHomes() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
return (<>
        <div className='min-h-screen'>
            <div
                className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-4xl h-[200px] p-6">

                    {/* WING-A */}
                    <div className="space-y-4">
                        {/* Wing Title */}
                        <div
                            onClick={() => setOpen(!open)}
                            className="w-full text-center p-3 rounded-lg bg-[#555962] text-[#b68534] font-semibold shadow-md cursor-pointer flex justify-between items-center"
                        >
                            <span>Wing-A</span>
                            <span className={`transform transition-transform ${open ? "rotate-180" : ""}`}>
                                ▼
                            </span>
                        </div>

                        {/* Floor Select with Scroll */}
                        {open && (<select
                            size={7}
                            className="w-full p-7 rounded-lg border border-gray-300 shadow-md 
               bg-[#555962] text-white 
               focus:outline-none focus:border-blue-400 transition 
               overflow-y-scroll 
               scrollbar-none"  // 👈 hides scrollbar
                            onChange={(e) => navigate(`/floora/${e.target.value}`)} // 👈 match route
                        >
                            {Array.from({ length: 22 }, (_, i) => (
                                <option key={i} value={i + 1}  // 👈 cleaner: just pass number

                                    className="p-2 hover:rounded-lg">
                                    Floor {i + 1}
                                </option>
                            ))}
                        </select>
                        )}
                    </div>



                      {/* WING-B */}
                    <div className="space-y-4">
                        <div
                            onClick={() => setOpen1(!open1)}
                            className="w-full text-center p-3 rounded-lg bg-[#555962] text-[#b68534] font-semibold shadow-md cursor-pointer flex justify-between items-center"
                        >
                            <span>Wing-B</span>
                            <span className={`transform transition-transform ${open1 ? "rotate-180" : ""}`}>
                                ▼
                            </span>
                        </div>

                        {/* Floor Select with Scroll */}
                        {open1 && (<select
                            size={7}
                            className="w-full p-7 rounded-lg border border-gray-300 shadow-md 
                   bg-[#555962] text-white 
                   focus:outline-none focus:border-blue-400 transition 
                   overflow-y-scroll scrollbar-thin 
                   scrollbar-thumb-gray-500 scrollbar-track-transparent"
                            onChange={(e) => navigate(`/floorb/${e.target.value}`)} // 👈 match route
                        >
                            {Array.from({ length: 22 }, (_, i) => (
                                <option key={i} value={i + 1}  // 👈 cleaner: just pass number

                                    className="p-2 hover:rounded-lg">
                                    Floor {i + 1}
                                </option>
                            ))}
                        </select>
                        )}
                    </div>



                    {/* WING-C */}
                    <div className="space-y-4">
                        <div
                            onClick={() => setOpen2(!open2)}

                            className="w-full text-center p-3 rounded-lg bg-[#555962] text-[#b68534] font-semibold shadow-md cursor-pointer flex justify-between items-center"
                        >
                            <span>Wing-C</span>
                            <span className={`transform transition-transform ${open2 ? "rotate-180" : ""}`}>
                                ▼
                            </span>
                        </div>

                        {/* Floor Select with Scroll */}
                        {open2 && (<select
                            size={7}
                            className="w-full p-7 rounded-lg border border-gray-300 shadow-md 
                   bg-[#555962] text-white 
                   focus:outline-none focus:border-blue-400 transition 
                   overflow-y-scroll scrollbar-thin 
                   scrollbar-thumb-gray-500 scrollbar-track-transparent"
                            onChange={(e) => navigate(`/floorc/${e.target.value}`)} // 👈 match route
                        >
                            {Array.from({ length: 22 }, (_, i) => (
                                <option key={i} value={i + 1}  // 👈 cleaner: just pass number

                                    className="p-2 hover:rounded-lg">
                                    Floor {i + 1}
                                </option>
                            ))}
                        </select>
                        )}
                    </div>



                      {/* WING-D */}
                    <div className="space-y-4">
                        <div
                            onClick={() => setOpen3(!open3)}
                            className="w-full text-center p-3 rounded-lg bg-[#555962] text-[#b68534] font-semibold shadow-md cursor-pointer flex justify-between items-center"
                        >
                            <span>Wing-D</span>
                            <span className={`transform transition-transform ${open3 ? "rotate-180" : ""}`}>
                                ▼
                            </span>
                        </div>

                        {/* Floor Select with Scroll */}
                        {open3 && (<select
                            size={7}
                            className="w-full p-7 rounded-lg border border-gray-300 shadow-md 
                   bg-[#555962] text-white 
                   focus:outline-none focus:border-blue-400 transition 
                   overflow-y-scroll scrollbar-thin 
                   scrollbar-thumb-gray-500 scrollbar-track-transparent"
                            onChange={(e) => navigate(`/floord/${e.target.value}`)} // 👈 match route
                        >
                            {Array.from({ length: 22 }, (_, i) => (
                                <option key={i} value={i + 1}  // 👈 cleaner: just pass number

                                    className="p-2 hover:rounded-lg">
                                    Floor {i + 1}
                                </option>
                            ))}
                        </select>
                        )}
                    </div>

                </div>
            <style>
                    {`
          /* Hide scrollbar (cross-browser) */
            select::-webkit-scrollbar {
            display: none;
             }
            select {
            -ms-overflow-style: none;  /* IE & Edge */
            scrollbar-width: none;     /* Firefox */
             }

            /* Hover effect for options */
            select option:hover {
            background-color: black !important;
            color: #b68534 !important; /* yellow text */
            }

        /* Selected option style */
        select option:checked {
        background-color: white !important;
        color: #FFD700 !important;
        }
        `}
        </style>
        </div>
            {/* footer */}
            <div className='w-full bottom-0 absolute'>
                <Footer />
            </div>
        </div>
    </>)
}