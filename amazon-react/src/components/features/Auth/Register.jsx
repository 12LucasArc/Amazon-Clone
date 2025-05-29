import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../../components/layouts/AuthLayout';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../../Utils/firebase';

export default function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });

      console.log("Registered:", userCredential.user);
      navigate("/Login");
    } catch (err) {
      setError(err.message);
      console.error("Firebase registration error:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <AuthLayout>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 mb-6 border rounded-lg focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Register
          </button>

          <p className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <a href="/Login" className="text-blue-600 hover:underline">
              Sign In
            </a>
          </p>
        </form>
      </AuthLayout>
    </div>
  );
}
