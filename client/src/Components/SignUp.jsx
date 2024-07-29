import axios from 'axios';
import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { auth, provider } from "../GoogleSignup/firebase";
import { signInWithPopup } from 'firebase/auth';
import { signUpUser } from '../Services';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const combinedData = {
            ...userData,
            ...data,
            travelInterests: Array.isArray(data.travelInterests) ? data.travelInterests : [data.travelInterests]
        };
        console.log(data);
        try {
            const response = await axios.post(signUpUser, data);
            if (response.status === 200) {
                toast.success("User SignUp successfully");
                localStorage.setItem("authToken", response.data.token);

                setTimeout(() => {
                    navigate('/');
                    window.location.reload();
                }, 888)
            }
        } catch (error) {
            toast.error("SignUp failed. Please try again.");
        }
    };

    const handleSignUpWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUserData({
                    fullName: result.user.displayName,
                    email: result.user.email,
                    profilePicture: result.user.photoURL
                });
                console.log('Google sign-in successful:', result.user);
            })
            .catch(err => {
                toast.error("Google SignUp failed. Please try again.");
                console.log("Error in Google sign-up", err);
            });
    };

    return (
        <>
            <div>
                <ToastContainer />
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-4 mb-3 bg-gray-800 p-4 shadow-md rounded-lg text-white z-[1000px] relative">

                    <div className="mb-2">
                        <label htmlFor="fullName" className="block text-gray-300">Full Name:</label>
                        <input
                            type="text"
                            id="fullName"
                            {...register('fullName')}
                            className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none bg-gray-700 text-gray-300"
                        />
                        {errors.fullName && <span className="text-red-600 text-sm">{errors.fullName.message}</span>}
                    </div>

                    <div className="mb-2">
                        <label htmlFor="email" className="block text-gray-300">Email:</label>
                        <input
                            type="email"
                            id="email" // Corrected here
                            {...register('email')}
                            className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none bg-gray-700 text-gray-300"
                        />
                        {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
                        <span className='text-gray-600' >please enter a valid email address for notification</span>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="phoneNumber" className="block text-gray-300">Phone Number:</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            {...register('phoneNumber', {
                                pattern: {
                                    value: /^\+?[1-9]\d{1,14}$/,
                                    message: 'Invalid phone number'
                                }
                            })}
                            className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none bg-gray-700 text-gray-300"
                        />
                        {errors.phoneNumber && <span className="text-red-600 text-sm">{errors.phoneNumber.message}</span>}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="country" className="block text-gray-300">Country:</label>
                        <input
                            type="text"
                            id="country"
                            {...register('country')}
                            className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none bg-gray-700 text-gray-300"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="travelInterests" className="block text-gray-300">Preferred Travel Interests:</label>
                        <select
                            id="travelInterests"
                            {...register('travelInterests')}
                            multiple
                            className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none bg-gray-700 text-gray-300"
                        >
                            <option value="Adventure">Adventure</option>
                            <option value="Beaches">Beaches</option>
                            <option value="Culture">Culture</option>
                            <option value="Food">Food</option>
                            <option value="Nature">Nature</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="block text-gray-300">Password:</label>
                        <input
                            type="password"
                            id="password"
                            {...register('password', { required: 'Password is required' })}
                            className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none bg-gray-700 text-gray-300"
                        />
                        {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
                    >
                        Sign Up
                    </button>
                    <div className='mt-2'>
                        <span>Already have an account? <Link to="/Login" className="text-blue-400 underline hover:text-blue-300">Login here</Link></span>
                    </div>
                    <br />
                    <br />
                    <hr />
                    <h2 className='text-center'>OR</h2>
                    <div className='w-full flex items-center justify-center mb-4'>
                        <button type="button" onClick={handleSignUpWithGoogle} className='p-2 shadow-lg rounded-xl flex items-center space-x-2 bg-gray-700 hover:bg-gray-600'>
                            <FcGoogle className='inline-block' />
                            <span>Choose Google Account</span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SignUp;
