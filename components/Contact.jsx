import React from "react";

const Contact = () => {
  return (
    <div className="bg-lightMint min-h-screen text-darkGreen">
      {/* Navbar */}
      <header className="bg-darkGreen shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">JMSS</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="text-white hover:text-lightMint">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-white hover:text-lightMint">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-lightMint">
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
          <h2 className="text-5xl font-bold text-darkGreen mb-6">Contact Us</h2>
          <p className="text-xl text-darkGreen mb-8">
            We'd love to hear from you! Get in touch with us for inquiries, support, or more information.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-darkGreen mb-8">
            Get in Touch with JMSS
          </h3>
          <p className="text-lg text-darkGreen mb-6">
            You can reach out to us through the following channels:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Email Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-darkGreen">
              <h4 className="text-xl font-bold mb-4">Email</h4>
              <p className="text-lg">
                <a href="mailto:jmsenterprises0505@gmail.com" className="text-darkGreen hover:text-lightMint">
                  jmsenterprises0505@gmail.com
                </a>
              </p>
            </div>

            {/* Phone Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-darkGreen">
              <h4 className="text-xl font-bold mb-4">Phone</h4>
              <p className="text-lg">
                <a href="tel:+917447553565" className="text-darkGreen hover:text-lightMint">
                  7447553565
                </a>
              </p>
            </div>
          </div>

          <p className="text-lg text-darkGreen mb-6">
            Alternatively, you can use the contact form below to send us a message directly.
          </p>

          {/* Contact Form */}
          <form className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg text-darkGreen mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-darkGreen rounded-md"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg text-darkGreen mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-darkGreen rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg text-darkGreen mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border border-darkGreen rounded-md"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-darkGreen text-white py-3 px-6 rounded-lg text-lg hover:bg-lightMint transition duration-300"
            >
              Send Message
            </button>
          </form>
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

export default Contact;
