import React, { useState, useEffect } from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-200"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-400"></div>
      </div>
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay (e.g., fetching data, loading assets, etc.)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="p-10">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Welcome to the Website!
          </h1>
          <p className="text-gray-600 mt-4 text-center">
            Your content is now ready to view.
          </p>
        </div>
      )}
    </>
  );
};

export default App;
