import React from 'react';

const services = [
  {
    title: "Trip Planning",
    description: "Expert assistance in planning your trips with personalized recommendations and itineraries.",
    icon: "🗺️",
    details: "We help you create detailed travel plans, including accommodations, transportation, and activities. Our experts ensure your trip is seamless and enjoyable."
  },
  {
    title: "User Activity",
    description: "Track and manage your travel activities, including bookings, reservations, and more.",
    icon: "📊",
    details: "Stay organized with our user activity tracker. Manage all your travel bookings and reservations in one place, making your travel hassle-free."
  },
  {
    title: "User Documents",
    description: "Store and access your travel documents securely in one place.",
    icon: "📂",
    details: "Keep your travel documents safe and easily accessible. Upload and store your passport, tickets, and other important documents securely."
  },
  {
    title: "User Expenses",
    description: "Monitor your travel expenses and stay within your budget.",
    icon: "💸",
    details: "Keep track of your travel spending and stay within your budget. Our expense tracker helps you monitor all your travel-related expenses."
  },
];

const Services = () => {
  return (
    <div className="services-page container mx-auto py-8 px-4 md:px-0 bg-gray-900 text-gray-300">
      {/* Hero Section */}
      <section
        className="hero-section bg-cover bg-center text-white py-20"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2VydmljZXMlMjB0cmlwfGVufDB8fDB8fHww)',
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-2xl">Explore the services we offer to enhance your travel experience.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-16 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What We Offer</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            We provide a range of services to ensure your travel is smooth, enjoyable, and memorable.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                <div className="icon text-6xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <p className="text-gray-400">{service.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
