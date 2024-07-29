import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { contactUs } from '../Services';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(contactUs, data);
      toast.success("Contact details are successfully saved");
      reset();
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <div className="contact-us-page container mx-auto py-8 px-4 md:px-0 bg-gray-900 text-gray-300">
      <ToastContainer />
      {/* Hero Section */}
      <section className="hero-section bg-cover bg-center text-white py-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1572815002563-c32e649fbb39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHR1cmV8ZW58MHx8MHx8fDA%3D)' }}>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-2xl">We would love to hear from you!</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section py-16 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            If you have any questions or need further information, please feel free to reach out to us.
          </p>
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline ${errors.message ? 'border-red-500' : ''}`}
                  rows="5"
                  {...register('message', { required: 'Message is required' })}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>
              <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="contact-details-section py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contact Details</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            You can also reach us at the following addresses and phone numbers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Address */}
            <div className="contact-detail bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2 text-white">Address</h3>
              <p className="text-gray-300">123 Travel Road, Adventure City, Pune</p>
            </div>
            {/* Phone */}
            <div className="contact-detail bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
              <p className="text-gray-300">+91 9359720973</p>
            </div>
            {/* Email */}
            <div className="contact-detail bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
              <p className="text-gray-300">info@TripMate.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section py-16 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Find Us Here</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Locate us on the map to get directions to our office.
          </p>
          <div className="map-container h-64 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345090856!2d144.95373631531672!3d-37.81627927975154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5774c7bb0ef1f59!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1613956457800!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
