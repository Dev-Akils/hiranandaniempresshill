

export default function VideoFooter() {
  return (
    <div className=" bottom-0 w-full bg-black/70 flex flex-col md:flex-row md:items-center">
    {/* Navigation */}
    <nav className="w-full md:flex-1 flex flex-wrap justify-center gap-4 md:gap-5 text-[#b68534]  py-3 text-center">
        <a href="/entrance-video" className="text-sm  hover:text-orange-400 transition">
          HOME
        </a>
        <a href="/masterplan" className="text-sm  hover:text-orange-400 transition">
          ROCKRIDGE GREENS
        </a>
        <a href="/terrace_aminities" className="text-sm hover:text-orange-400 transition">
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
