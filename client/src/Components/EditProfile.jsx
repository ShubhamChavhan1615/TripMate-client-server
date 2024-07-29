import React from 'react';
import { useForm } from 'react-hook-form';

const EditProfile = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add logic to handle form submission, e.g., update user profile
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-6">Edit Profile</h2>

        <div className="mb-6">
          <label htmlFor="fullName" className="block text-gray-400">Full Name</label>
          <input
            id="fullName"
            type="text"
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
            {...register('fullName', { required: 'Full Name is required' })}
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-400">Email</label>
          <input
            id="email"
            type="email"
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="phoneNumber" className="block text-gray-400">Phone Number</label>
          <input
            id="phoneNumber"
            type="text"
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
            {...register('phoneNumber', {
              required: 'Phone Number is required',
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: 'Phone Number should be 10-15 digits'
              }
            })}
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="country" className="block text-gray-400">Country</label>
          <input
            id="country"
            type="text"
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
            {...register('country', { required: 'Country is required' })}
          />
          {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow transition duration-200"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
