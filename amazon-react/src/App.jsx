// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/features/Auth/Login";
import Register from "./components/features/Auth/Register";
import Home from "./components/pages/Home";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import NotFound from "./components/pages/NotFound";
import { CartProvider } from "./components/features/cart/CartContext";
import CartPage from './components/features/cart/CartPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />

          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
