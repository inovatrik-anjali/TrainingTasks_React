import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa"; // Home icon

export default function BackButton() {
  return (
    <div className="fixed top-4 right-4 z-50">
      <Link
        to="/"
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded shadow-lg hover:bg-blue-700 transition"
      >
        <FaHome size={18} />
        Home
      </Link>
    </div>
  );
}
