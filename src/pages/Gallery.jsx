import { useMemo, useState } from 'react';
import image1 from '../assets/GalleryImagesInterior/3 BHK_Bedroom_01.jpg';
import image2 from '../assets/GalleryImagesInterior/3 BHK_Master Bedroom.jpg';
import image3 from '../assets/GalleryImagesInterior/3BHK_Guest Bedroom.jpg';
import image4 from '../assets/GalleryImagesInterior/3BHK_Living_Dining.jpg';
import image5 from '../assets/GalleryImagesInterior/4 BHK_Kitchen.jpg';
import image6 from '../assets/GalleryImagesInterior/4bhk Master Toilet.jpg';
import image7 from '../assets/GalleryImagesInterior/4BHK_Bedroom_03.jpg';
import image8 from '../assets/GalleryImagesInterior/4BHK_Deck Area.jpg';
import image9 from '../assets/GalleryImagesInterior/4BHK_Entertainment Room.jpg';
import image10 from '../assets/GalleryImagesInterior/4BHK_Living Dining_Cam_01.jpg';
import image11 from '../assets/GalleryImagesInterior/4BHK_Master Bedroom_01.jpg';
import image12 from '../assets/GalleryImagesInterior/Gym.jpg';
import image13 from '../assets/GalleryImagesInterior/Reception Area_01.jpg';

import images1 from '../assets/GalleryImagesExterior/L_09.jpg';
import images2 from '../assets/GalleryImagesExterior/L-11.jpg';
import images3 from '../assets/GalleryImagesExterior/L-12.jpg';
import images4 from '../assets/GalleryImagesExterior/L-13.jpg';
import images5 from '../assets/GalleryImagesExterior/L-14.jpg';
import images6 from '../assets/GalleryImagesExterior/L-15.jpg';

import { IoIosCloseCircle } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

import { MdKeyboardArrowLeft } from "react-icons/md";
import Footer from '../components/Footer';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


export default function Gallery() {
    const interior = [
        { id: 1, image: image1 },
        { id: 2, image: image2 },
        { id: 3, image: image3 },
        { id: 4, image: image4 },
        { id: 5, image: image5 },
        { id: 6, image: image6 },
        { id: 7, image: image7 },
        { id: 8, image: image8 },
        { id: 9, image: image9 },
        { id: 10, image: image10 },
        { id: 11, image: image11 },
        { id: 12, image: image12 },
        { id: 13, image: image13 },
    ];

    const exterior = [
        { id: 1, image: images1 },
        { id: 2, image: images2 },
        { id: 3, image: images3 },
        { id: 4, image: images4 },
        { id: 5, image: images5 },
        { id: 6, image: images6 },
    ];

    const [filter, setFilter] = useState("interior");
    const [lightbox, setLightbox] = useState({ open: false, src: "", rotation: 0, scale: 1 });

    const images = useMemo(() => (filter === "interior" ? interior : exterior), [filter]);
    const openLightbox = (src) => {
        setLightbox({ open: true, src, rotation: 0, scale: 1 });
    };

    const closeLightbox = () => setLightbox({ open: false, src: "", rotation: 0, scale: 1 });

    const rotateLeft = () => setLightbox(prev => ({ ...prev, rotation: prev.rotation - 90 }));
    const rotateRight = () => setLightbox(prev => ({ ...prev, rotation: prev.rotation + 90 }));
    const zoomIn = () => setLightbox(prev => ({ ...prev, scale: prev.scale + 0.2 }));
    const zoomOut = () => setLightbox(prev => ({ ...prev, scale: Math.max(prev.scale - 0.2, 0.2) }));

    return (<>
        <div className='min-h-screen flex flex-col bg-[#5d5c61] '>
            <div className="p-6 flex-1 text-[#b68534] font-bold">
                {/* Filter Buttons */}
                <div className="flex gap-4 mb-6 w-full flex-col md:flex-row">
                    <div
                        className={`md:w-1/2 w-full py-3 text-center rounded-lg cursor-pointer font-semibold transition-all duration-300
  ${filter === "interior"
                                ? "bg-gradient-to-r from-white/90 to-white/80  shadow-lg"
                                : "bg-gradient-to-r from-black/90 to-black/70  hover:bg-black/60"}`}
                        onClick={() => setFilter("interior")}
                    >
                        Interior
                    </div>
                    <div
                        className={`md:w-1/2 w-full py-3 text-center rounded-lg font-bold cursor-pointer transition-all duration-300
      ${filter === "exterior"
                                ? "bg-gradient-to-r from-white/90 to-white/80  shadow-lg "
                                : "bg-gradient-to-r from-black/90 to-black/70"}`
                        }
                        onClick={() => setFilter("exterior")}
                    >
                        Exterior
                    </div>
                </div>


                {/* Gallery */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {images.map((img) => (
                        <LazyLoadImage
                            key={img.id}
                            src={img.image}
                            alt="images"
                            effect="blur"   // you can use "blur", "opacity", etc.
                            className="w-full h-48 object-cover rounded shadow-lg cursor-pointer transform transition-transform duration-700 ease-in-out hover:scale-105"

                            onClick={() => openLightbox(img.image)}
                        />
                    ))}
                </div>



                {/* Lightbox */}
                {lightbox.open && (
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                        <div className="relative">

                            {/* Left Arrow */}
                            <button
                                className="absolute left-2 top-1/2   text-white/70 bg-black/70 hover:bg-black text-3xl rounded-full hover:text-white transition-all z-50"
                                onClick={() => {
                                    const currentIndex = images.findIndex(img => img.image === lightbox.src);
                                    const prevIndex = (currentIndex - 1 + images.length) % images.length;
                                    setLightbox({ ...lightbox, src: images[prevIndex].image, rotation: 0, scale: 1 });
                                }}
                            >
                                <MdKeyboardArrowLeft />
                            </button>

                            {/* Image */}
                            <div className="flex items-center justify-center">
                                <img
                                    src={lightbox.src}
                                    alt="images"
                                    style={{ transform: `rotate(${lightbox.rotation}deg) scale(${lightbox.scale})`, transition: "transform 0.3s" }}
                                    className="w-[1000px] h-[550px] object-cover rounded transition-transform duration-500 ease-in-out"
                                />
                            </div>

                            {/* Right Arrow */}
                            <button
                                className="absolute right-2 top-1/2 text-white/70 bg-black/70 hover:bg-black text-3xl rounded-full hover:text-white transition-all z-50"
                                onClick={() => {
                                    const currentIndex = images.findIndex(img => img.image === lightbox.src);
                                    const nextIndex = (currentIndex + 1) % images.length;
                                    setLightbox({ ...lightbox, src: images[nextIndex].image, rotation: 0, scale: 1 });
                                }}
                            >
                                <MdKeyboardArrowRight />
                            </button>

                            {/* Close Button */}
                            <button
                                className="absolute top-2 right-2 text-black/70 text-4xl bg-transparent hover:text-yellow-700 transition-all"
                                onClick={closeLightbox}
                            >
                                <IoIosCloseCircle />
                            </button>



                            {/* Controls */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                <button className="px-3 py-1 bg-black/70 text-white rounded hover:bg-black/90" onClick={rotateLeft}>⟲</button>
                                <button className="px-3 py-1 bg-black/70 text-white rounded hover:bg-black/90" onClick={rotateRight}>⟳</button>
                                <button className="px-3 py-1 bg-black/70 text-white rounded hover:bg-black/90" onClick={zoomIn}>+</button>
                                <button className="px-3 py-1 bg-black/70 text-white rounded hover:bg-black/90" onClick={zoomOut}>-</button>
                            </div>
                        </div>
                    </div>
                )}

            </div>

            <Footer />

        </div>
    </>);
}
