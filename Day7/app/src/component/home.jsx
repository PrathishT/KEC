function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to the Home Page</h1>
      <p className="text-lg text-gray-700 mb-6">
        This is a basic home component using React. Customize it as you like!
      </p>
      <button className="px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300">
        Get Started
      </button>
    </div>
  );
}

export default Home;