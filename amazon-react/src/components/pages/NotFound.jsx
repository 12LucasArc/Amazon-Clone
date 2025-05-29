// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center text-center p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Page not found</p>
      <Link
        to="/"
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded transition"
      >
        Go to Home
      </Link>
    </motion.div>
  );
}
