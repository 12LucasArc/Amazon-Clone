import Header from '../../layouts/Header';
import { useCart } from "./CartContext";
import CheckoutButton from '../../checkout/CheckoutButton';

export default function CartPage() {
  const { cartItems, updateQty, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (

    <>
    
    <Header />
    
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded shadow">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p>${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
                    className="w-16 border rounded px-2 py-1"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="text-right text-xl font-bold mt-4">
            Total: ${total.toFixed(2)}
          </div>
          <CheckoutButton />
        </div>
      )}
    </div>
    </>
  );
}
