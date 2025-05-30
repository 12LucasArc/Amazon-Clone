import StripeProvider from "../components/stripe/StripeProvider";
import CheckoutForm from "../components/stripe/CheckoutForm";
import Header from "../components/layout/Header"; 

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <main className="p-4 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <StripeProvider>
          <CheckoutForm />
        </StripeProvider>
      </main>
    </>
  );
}
