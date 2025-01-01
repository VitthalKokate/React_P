const Home = () => {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-8">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to My Website!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            This is a simple homepage created using React and Tailwind CSS. You can modify and customize it to fit your needs.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    );
  };
  
  export default Home;
  