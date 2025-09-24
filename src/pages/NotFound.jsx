// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-[#5d5c61] text-white  rounded-lg shadow hover:bg-black transition"
      >
        Go Home
      </Link>
    </div>
  );
}
