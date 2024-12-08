import React from "react";

const About = () => {
  return (
    <div className="bg-lightMint min-h-screen text-darkGreen">
      {/* Navbar */}
      <header className="bg-darkGreen shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">JMSS</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="/about" className="text-white hover:text-lightMint">
                  About
                </a>
              </li>
              <li>
                <a href="/features" className="text-white hover:text-lightMint">
                  Features
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

      {/* Hero Section */}
      <section className="text-center py-40 bg-lightMint">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-darkGreen mb-6">About JMSS</h2>
          <p className="text-xl text-darkGreen mb-8">
            Revolutionizing industries with cutting-edge technology and innovative solutions.
          </p>
        </div>
      </section>

      {/* About Us Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-darkGreen mb-8 text-center">
            Our Story and Mission
          </h3>
          <p className="text-lg text-darkGreen mb-6">
            JMSS is a forward-thinking company founded by <strong>Tanmay Shambherker</strong>, with <strong>Tanushree Darbeshwar</strong> as the co-founder. At JMSS, we specialize in <strong>digital marketing</strong>, <strong>software development</strong>, and <strong>web development</strong>, delivering innovative solutions to meet the evolving needs of businesses in the digital era.
          </p>
          <p className="text-lg text-darkGreen mb-6">
            Our mission is to empower businesses with cutting-edge technology and creative strategies, driving growth and success in a competitive landscape.
          </p>

          <h4 className="text-2xl font-semibold text-darkGreen mt-6 mb-4">
            Our Key Innovation: "NO SCAM NO FRAUD: The Next-Gen Courier Service"
          </h4>
          <p className="text-lg text-darkGreen mb-6">
            One of our key innovations is the groundbreaking solution designed to redefine the logistics and courier industry. This service prioritizes <strong>trust</strong> and <strong>transparency</strong>, ensuring secure and reliable deliveries for individuals and businesses alike.
          </p>
          <p className="text-lg text-darkGreen mb-6">
            At JMSS, we are committed to building a future where <strong>integrity</strong> and <strong>efficiency</strong> go hand in hand.
          </p>

          <h4 className="text-2xl font-semibold text-darkGreen mt-6 mb-4">
            Join Us
          </h4>
          <p className="text-lg text-darkGreen mb-6">
            Join us as we revolutionize industries with our expertise and dedication to innovation. Let’s create a future where business is not just done, but done with a purpose — for a better tomorrow.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darkGreen text-lightMint py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 JMSS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
