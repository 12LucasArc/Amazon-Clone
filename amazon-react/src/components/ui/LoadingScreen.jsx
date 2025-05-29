// components/ui/LoadingScreen.jsx
export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <img
        src="/Amazon-logo.png"
        alt="Amazon Logo"
        className="w-32 mb-6 animate-pulse"
      />
      <div className="w-12 h-12 border-4 border-yellow-500 border-dotted rounded-full animate-spin"></div>
    </div>
  );
}
