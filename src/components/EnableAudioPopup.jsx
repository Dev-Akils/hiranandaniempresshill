// src/components/EnableAudioPopup.jsx
export default function EnableAudioPopup({ onYes, onNo }) {
  return (
    <>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 transition-opacity duration-700"></div>

      {/* Centered Popup */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded-xl shadow-lg text-center w-[300px] space-y-4 transform transition-all duration-300 scale-100 opacity-100">
          <h2 className="text-[#616161] border-b-2 border-[#616161] pb-4 mb-6 text-xl">
            Enable audio?
          </h2>
          <div className="flex gap-3 justify-center">
            <button
              className="text-white px-6 py-2 bg-[#616161] rounded-md hover:bg-[#95CD52] transition"
              onClick={onYes}
            >
              Yes
            </button>
            <button
              className="text-white px-6 py-2 bg-[#616161] rounded-md hover:bg-red-500 transition"
              onClick={onNo}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
