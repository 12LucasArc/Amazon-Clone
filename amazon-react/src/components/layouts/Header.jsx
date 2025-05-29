import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../features/cart/CartContext";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const { logout, currentUser } = useAuth();
  const { cartItems } = useCart();

  
  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <img
          src="/Amazon-logo.png"
          alt="Amazon"
          className="w-24"
        />
      </Link>

      <div className="flex flex-grow mx-6">
        <input
          type="text"
          placeholder="Search Amazon"
          className="w-full px-4 py-2 rounded-md border border-white bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button className="bg-yellow-500 px-4 py-2 rounded-r-md hover:bg-yellow-600">
          Search
        </button>
      </div>

      <div className="flex items-center gap-6">
        <div>
          <p className="text-xs">Hello, {currentUser?.email || "Guest"}</p>
          <button
            onClick={logout}
            className="text-sm hover:underline focus:outline-none"
          >
            Sign Out
          </button>
        </div>

        <Link to="/orders" className="text-sm hover:underline">
          Orders
        </Link>

        <Link to="/cart" className="flex items-center gap-1 hover:underline">
          <FaShoppingCart />
          <span className="text-sm">({totalItems})</span> {/* ✅ Dynamic count */}
        </Link>
      </div>
    </header>
  );
}
