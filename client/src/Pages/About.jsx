import React from 'react';
import { FaRegHandshake, FaAward, FaHeart } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page container mx-auto py-8 px-4 md:px-0 bg-gray-900 text-gray-300">
      {/* Hero Section */}
      <section
        className="hero-section bg-cover bg-center text-white py-20"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJvdXR8ZW58MHx8MHx8fDA%3D)',
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-2xl">Discover more about our journey and mission.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section py-16 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Mission</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Our mission is to connect travelers around the world and provide unforgettable travel experiences. We strive to offer the best travel packages,
            seamless booking processes, and exceptional customer service. By leveraging cutting-edge technology and a passion for travel, we aim to make your journeys memorable.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Vision</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Our vision is to be the leading travel partner, known for innovative solutions, exceptional service, and a commitment to sustainability. We envision a world where travel is accessible, safe, and enriching for everyone.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section py-16 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Values</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Integrity, Excellence, and Passion are at the heart of everything we do. We believe in creating positive impacts for our clients, partners, and the communities we serve.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="value-card bg-gray-700 p-6 rounded-lg shadow-lg">
              <FaRegHandshake className="text-4xl text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Integrity</h3>
              <p className="text-gray-300">We maintain the highest standards of honesty and transparency in all our interactions.</p>
            </div>
            <div className="value-card bg-gray-700 p-6 rounded-lg shadow-lg">
              <FaAward className="text-4xl text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Excellence</h3>
              <p className="text-gray-300">We strive for excellence in every aspect of our work, from service delivery to customer satisfaction.</p>
            </div>
            <div className="value-card bg-gray-700 p-6 rounded-lg shadow-lg">
              <FaHeart className="text-4xl text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Passion</h3>
              <p className="text-gray-300">Our passion for travel drives us to go above and beyond to create unforgettable experiences.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
