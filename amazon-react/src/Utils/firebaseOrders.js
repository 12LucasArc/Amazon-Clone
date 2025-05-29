
import { db } from "./firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export const addOrder = async (userId, cartItems, total) => {
  try {
    const orderRef = await addDoc(collection(db, "orders"), {
      userId,
      items: cartItems,
      total,
      createdAt: Timestamp.now()
    });

    console.log("Order placed with ID:", orderRef.id);
    return orderRef.id;
  } catch (error) {
    console.error("Error placing order:", error);
    throw error;
  }
};
