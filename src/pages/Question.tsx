import { Link } from "react-router-dom";

const Question = () => {
  return (
    <div className="bg-no-repeat bg-center bg-cover min-h-screen flex items-center justify-center" style={{ backgroundImage: "url('https://www.keiseruniversity.edu/wp-content/uploads/2024/08/international-students-bg.jpg')" }}>
      <div className="bg-white shadow-xl rounded-lg p-6 sm:p-10 w-full max-w-md sm:max-w-lg gradient-border">
        <h1 className="text-xl sm:text-3xl font-extrabold text-gray-800 mb-4 sm:mb-6 text-center">
          Who are you?
        </h1>
        <p className="text-gray-800 text-center mb-4 sm:mb-8">
          Select the option that best describes you.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          <Link to={"/documentcategory"} className="flex items-center gap-3 sm:gap-4 bg-gray-100 hover:bg-blue-50 border border-gray-200 hover:border-blue-500 text-gray-800 hover:text-blue-600 font-medium py-3 sm:py-4 px-4 sm:px-6 rounded-lg shadow-sm transition duration-300">
            <div className="p-2 sm:p-3 bg-blue-500 text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6L3 9m9 5l9-5" />
              </svg>
            </div>
            <span className="text-md sm:text-lg">I am a Student</span>
          </Link>

          <Link to={"/pricing"} className="flex items-center gap-3 sm:gap-4 bg-gray-100 hover:bg-green-50 border border-gray-200 hover:border-green-500 text-gray-800 hover:text-green-600 font-medium py-3 sm:py-4 px-4 sm:px-6 rounded-lg shadow-sm transition duration-300">
            <div className="p-2 sm:p-3 bg-green-500 text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4H8l4-4m1 4h3m4 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-md sm:text-lg">I am a Professional</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Question;

