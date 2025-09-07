import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  px-6">
      <div className="text-center">
        <FaExclamationTriangle className="mx-auto text-6xl mb-6 animate-bounce" />
        <h1 className="text-7xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-lg mb-8 opacity-90">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          href="/"
          className="px-6 py-3 rounded-2xl bg-white text-purple-600 font-semibold shadow-lg hover:shadow-xl hover:bg-pink-500 hover:text-white transition duration-300"
        >
          Back to Home
        </Link>
      </div>

      {/* Decorative glowing orbs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>
    </div>
  );
}
