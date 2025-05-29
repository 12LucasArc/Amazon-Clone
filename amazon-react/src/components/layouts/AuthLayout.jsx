
import amazonLogo from "../../assets/Amazon-logo.png";

export default function AuthLayout({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-md relative z-10">
        <div className="flex justify-center mb-6">
          <img src={amazonLogo} alt="Amazon Logo" className="h-10 object-contain" />
        </div>
        {children}
      </div>
    </div>
  );
}
