const Loader = () => {
  return (
<<<<<<< HEAD
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="animate-spin rounded-full h-32 w-32 object-cover border-t-4 border-b-4 border-white flex items-center justify-center transition duration-300 ease-in-out shadow-lg">
        {/* <img src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/306986137_1413074902492772_8816849520811624683_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BhiOQfERBsMQ7kNvgH_XS4C&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&_nc_gid=AGx5NpTtkXBR0EO5Q483Qsk&oh=00_AYCY3dG84YAvEiisBM2nNE6cjcuVgEfUVdWTnz4DQl8eJw&oe=67590171" alt="" className="w-1/2" /> */}
        <span className="text-4xl font-bold text-white">R</span>
=======
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
>>>>>>> 72c75d9697d451cdc77aee73d4dfd7495ca7a4c0
      </div>
    </div>
  );
};

export default Loader;
