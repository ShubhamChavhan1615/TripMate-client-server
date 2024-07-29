import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from '../Services';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(loginUser, data);
      if (response.status === 200) {
        toast.success("User logged in successfully");
        localStorage.setItem("authToken", response.data.token)
        setTimeout(() => {
          navigate('/');
          window.location.reload();
        }, 888)
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300 p-4">
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto mt-4 bg-gray-800 p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-100 mb-6">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-400">Email:</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'Email is required' })}
            className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none text-gray-200"
          />
          {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-400">Password:</label>
          <input
            type="password"
            id="password"
            {...register('password', { required: 'Password is required' })}
            className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none text-gray-200"
          />
          {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
        >
          Login
        </button>
        <div className="mt-4 text-center text-gray-500">
          <p className="text-sm">Don't have an account? <Link to="/" className="text-blue-400 hover:underline">Sign up</Link></p>
          <p className="text-xs mt-2">Forgot your password? <Link to="#" className="text-blue-400 hover:underline">Reset password</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Login;
