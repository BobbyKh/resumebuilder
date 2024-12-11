const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black to-gray-900">
      <div className="relative">
        {/* 3D Rotating Outer Sphere */}
        <div className="absolute inset-0 flex items-center justify-center perspective-1000">
          <div className="w-36 h-36 border-[6px] border-transparent border-t-blue-500 border-r-pink-500 rounded-full animate-rotate3d"></div>
        </div>

        {/* Pulsating Inner Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-28 h-28 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
        </div>

        {/* 3D Rotating Inner Ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 border-[4px] border-transparent border-b-green-400 border-l-yellow-400 rounded-full animate-spin-reverse-fast"></div>
        </div>

        {/* Central 3D Text */}
        <div className="flex items-center justify-center rounded-full h-16 w-16 bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl">
          <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            ResuMaven
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
