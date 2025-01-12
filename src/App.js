import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch data from the API.");
        }
        const result = await response.json();
        setData(result.slice(0, 3)); // Limit to the first 3 items for display
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-red-600 text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Simple Pipeline App</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#features"
                  className="hover:text-gray-200 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-gray-200 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#data"
                  className="hover:text-gray-200 transition-colors"
                >
                  Data
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-red-600 mb-4">
            Welcome to Simple Pipeline App
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Build, deploy, and manage your React app with ease. This app
            demonstrates modern CI/CD pipelines integrated with GitHub Actions
            and AWS CloudFront.
          </p>
          <button className="mt-6 px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-16 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-red-600 mb-4">
                Responsive Design
              </h4>
              <p className="text-gray-600">
                Enjoy a fully responsive layout optimized for all screen sizes.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-red-600 mb-4">
                Modern CI/CD
              </h4>
              <p className="text-gray-600">
                Learn how to automate your builds and deployments seamlessly.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-red-600 mb-4">
                AWS CloudFront
              </h4>
              <p className="text-gray-600">
                Deploy your app with high availability and fast global delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Section */}
      <section id="data" className="bg-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">API Data</h3>
          {error ? (
            <p className="text-red-600">{error}</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 shadow-md rounded-lg p-4"
                >
                  <h4 className="text-xl font-semibold text-red-600 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Simple Pipeline App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
