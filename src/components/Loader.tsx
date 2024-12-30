import { useState, useEffect } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 2;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white to-blue-200">
      <div className="relative mb-4">
        {/* Central Text */}
        <div className="flex items-center justify-center rounded-full h-16 w-16 bg-gradient-to-br from-white to-blue-100 shadow-xl">
          <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
            ResuMaven
          </span>
        </div>
      </div>
      {/* Progress Bar */}
      <div className="w-64 bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <span className="mt-2 text-blue-700 font-semibold">{progress}%</span>
    </div>
  );
};

export default Loader;
