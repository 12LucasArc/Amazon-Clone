import { FaStar } from 'react-icons/fa';
import { useCart } from '../cart/CartContext';

export default function ProductCard({ product }) {
  const { title, description, price, rating, image } = product;
  const { addToCart } = useCart();

  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
        {halfStar && <FaStar className="text-yellow-400 opacity-50" />}
      </>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
      <img src={image} alt={title} className="h-48 object-contain mb-4" />

      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-2 line-clamp-2">{description}</p>

      <div className="flex items-center text-sm text-yellow-500 mb-2">
        {renderStars()}
        <span className="ml-2 text-gray-700">({rating.toFixed(1)})</span>
      </div>

      <p className="text-lg font-bold text-gray-800 mb-4">${price.toFixed(2)}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
