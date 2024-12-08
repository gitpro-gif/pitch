import React from "react";

const FeaturePage = () => {
  return (
    <div className="bg-lightMint min-h-screen text-darkGreen">
      {/* Navbar */}
      <header className="bg-darkGreen shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">CourierApp</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#features" className="text-white hover:text-lightMint">
                  Features
                </a>
              </li>
              <li>
                <a href="/about" className="text-white hover:text-lightMint">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:text-lightMint">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-darkGreen">Our Features</h2>
          <p className="text-lg mb-10 text-darkGreen">
            Explore the cutting-edge features of CourierApp, designed to provide the most secure, efficient, and transparent courier experience.
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-darkGreen">
              <h4 className="text-xl font-bold mb-4">Real-Time Tracking</h4>
              <p>
                Track your deliveries live with up-to-the-minute updates and receive notifications for every step of the process.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-darkGreen">
              <h4 className="text-xl font-bold mb-4">AI-Based Route Optimization</h4>
              <p>
                Our advanced AI technology calculates the fastest delivery route by factoring in real-time traffic and weather conditions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-darkGreen">
              <h4 className="text-xl font-bold mb-4">Secure Payment System</h4>
              <p>
                Blockchain ensures transparency and security for all payments, making sure that your transactions are safe and verifiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Feature Section */}
      <section id="more-features" className="bg-darkGreen py-20">
        <div className="container mx-auto px-6 text-white">
          <h3 className="text-3xl font-bold text-center mb-8">More Features</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-darkGreen">
              <h4 className="text-xl font-bold mb-4">Multi-User Access</h4>
              <p>
                Easily manage multiple users and track deliveries for teams or businesses in a seamless manner.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-darkGreen">
              <h4 className="text-xl font-bold mb-4">Instant Notifications</h4>
              <p>
                Receive instant notifications on order status, route changes, or delivery issues, ensuring full transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-lightMint text-darkGreen py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 CourierApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FeaturePage;
