import StripeCheckout from "react-stripe-checkout";
import { useCart } from "../cart/CartContext";

export default function CheckoutButton() {
  const { cartItems } = useCart();

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleToken = async (token) => {
    const response = await fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
        cartItems,
        totalAmount,
      }),
    });

    const data = await response.json();
    if (data.success) {
      alert("Payment successful!");
      // Optionally: clear cart, redirect, etc.
    } else {
      alert("Payment failed.");
    }
  };

  return (
    <StripeCheckout
      stripeKey="pk_test_51RUR1nQo52u7H6FF8ZdsJvUTtqvAATCX7qdpe3w4ulO2qwsX4znHoOwwtriwgDcFO4F333DuEiquuTODUcaHfaDe00KVCtltXM"
      token={handleToken}
      amount={totalAmount * 100} 
      name="Amazon Clone"
      billingAddress
      shippingAddress
    >
      <button className="mt-2 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
        Pay with Card
      </button>
    </StripeCheckout>
  );
}
