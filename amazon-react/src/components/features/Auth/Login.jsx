import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import AuthLayout from "../../layouts/AuthLayout";
import LoadingScreen from "../../ui/LoadingScreen";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login({ email, password });
      setTimeout(() => {
        navigate("/");
      }, 2000); 
    } catch (error) {
      alert("Login failed");
      setIsLoading(false);
    }
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-4">Sign In</h2>
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-3 border rounded"
        />
        <input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border rounded"
        />
        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded font-medium">
          Sign In
        </button>

        <p className="mt-4 text-sm text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Create your Amazon account
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
