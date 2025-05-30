import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe("pk_test_51RUR1nQo52u7H6FF8ZdsJvUTtqvAATCX7qdpe3w4ulO2qwsX4znHoOwwtriwgDcFO4F333DuEiquuTODUcaHfaDe00KVCtltXM");

export default function StripeProvider({ children }) {
  return <Elements stripe={stripePromise}>{children}</Elements>;
}
