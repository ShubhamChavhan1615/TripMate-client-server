import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm, useFieldArray } from 'react-hook-form';
import { fetchPlaces } from '../app/Features/PlaceSlice';
import { FaUserFriends, FaPhone, FaEnvelope, FaPlus, FaArrowRight, FaStar, FaMoneyBillWave, FaHeadset } from 'react-icons/fa';
import { fetchUserProfile } from '../app/Features/UserSclice';
import axios from 'axios';
import { addTrip } from '../Services';
import { ToastContainer, toast } from 'react-toastify';


const Booking = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const places = useSelector((state) => state.placeData);
    const user = useSelector((state) => state.userProfileData);
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const { fields, append } = useFieldArray({ control, name: 'friends' });

    useEffect(() => {
        dispatch(fetchPlaces());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchUserProfile());
    }, [dispatch]);

    const place = places ? places.find(p => p._id === id) : null;

    const onSubmit = async (data) => {
        try {
            const tripData = {
                tripName: place.title,
                destination: place.location,
                description: place.description,
                email: data.email,
                friends: data.friends,
                fullName: data.fullName,
                phoneNumber: data.phoneNumber
            };

            const authToken = localStorage.getItem("authToken")
            const response = await axios.post(addTrip, tripData, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authToken}`
                }
            }
            );
            console.log('Trip booked successfully:', response.data);

            toast.success("successfully redirecting to the payment page");
            // Redirect to payment confirmation or another page as needed
            setTimeout(() => {
                navigate(`/payment/confirm/${place.title}/${place._id}`);
            }, 999)
        } catch (error) {
            toast.error("Error booking trip");
            console.error('Error booking trip:', error);
        }
    };

    if (!places) {
        return <div>Loading...</div>;
    }

    if (!place) {
        return <div>Place not found</div>;
    }

    return (
        <div className="container mx-auto p-4 mb-3 text-white">
            <ToastContainer />
            <div className="flex flex-col lg:flex-row lg:space-x-8">
                <div className="lg:w-2/3 bg-gray-800 p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-4 flex items-center">
                        <FaUserFriends className="mr-2" /> Your Details
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="text-sm font-medium flex items-center">
                                <FaEnvelope className="mr-2" /> Email
                            </label>
                            <input
                                type="email"
                                {...register('email', { required: true })}
                                defaultValue={user.email}
                                placeholder="Email"
                                className="mt-1 p-2 block w-full border border-gray-700 bg-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
                        </div>
                        <div>
                            <label className="text-sm font-medium flex items-center">
                                <FaUserFriends className="mr-2" /> Full Name
                            </label>
                            <input
                                type="text"
                                {...register('fullName', { required: true })}
                                placeholder="Full Name"
                                defaultValue={user.fullName}
                                className="mt-1 p-2 block w-full border border-gray-700 bg-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors.fullName && <span className="text-red-500 text-sm">Full Name is required</span>}
                        </div>
                        <div>
                            <label className="text-sm font-medium flex items-center">
                                <FaPhone className="mr-2" /> Phone Number
                            </label>
                            <input
                                type="tel"
                                {...register('phoneNumber', { required: true })}
                                placeholder="Phone Number"
                                defaultValue={user.phoneNumber}
                                className="mt-1 p-2 block w-full border border-gray-700 bg-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors.phoneNumber && <span className="text-red-500 text-sm">Phone Number is required</span>}
                        </div>
                        <span className="text-sm text-gray-400">We will contact you with essential updates or changes to your booking</span>
                        <h1 className="text-2xl font-bold mt-4 flex items-center">
                            <FaUserFriends className="mr-2" /> Friend or Partner Details
                        </h1>
                        {fields.map((item, index) => (
                            <div key={item.id} className="space-y-2">
                                <label className="block text-sm font-medium">
                                    Person {index + 1} Full Name
                                </label>
                                <input
                                    type="text"
                                    {...register(`friends.${index}.fullName`, { required: true })}
                                    placeholder="Full Name"
                                    className="mt-1 p-2 block w-full border border-gray-700 bg-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                                {errors.friends?.[index]?.fullName && <span className="text-red-500 text-sm">Full Name is required</span>}
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => append({ fullName: '' })}
                            className="mt-2 p-2 bg-blue-500 text-white rounded-md flex items-center hover:bg-blue-600 transition duration-300"
                        >
                            <FaPlus className="mr-2" /> Add Another Person
                        </button>
                        <span className="block mt-4 text-sm text-gray-400">
                            By proceeding to checkout, you agree to our <Link to="#" className="text-blue-500">Terms & Conditions and Privacy Policy</Link>.
                        </span>
                        <button type="submit" className="mt-4 p-2 bg-green-500 text-white rounded-md flex items-center hover:bg-green-600 transition duration-300">
                            <FaArrowRight className="mr-2" /> Go to Checkout
                        </button>
                    </form>
                </div>
                <div className="lg:w-1/3 mt-8 lg:mt-0">
                    <div className="p-4 border border-gray-700 rounded-md shadow-sm space-y-4 bg-gray-800">
                        <img src={place.thumbnail} alt={place.title} className="w-full h-40 object-cover rounded-md" />
                        <div>
                            <h2 className="text-lg font-semibold">{place.title}</h2>
                            <p className="text-gray-400">Location: <span className="font-medium">{place.location}</span></p>
                            <p className="text-gray-400">Rating: <span className="font-medium">{place.rating} <FaStar className="text-yellow-500 inline-block" /></span></p>
                            <p className="text-gray-400">Total Price: <span className="font-medium">₹{place.price}</span></p>
                        </div>
                    </div>
                    <div className="mt-8 p-4 border border-gray-700 rounded-md shadow-sm space-y-4 bg-gray-800">
                        <h1 className="text-2xl font-bold flex items-center">
                            Book with Confidence
                        </h1>
                        <div className="flex items-center space-x-2">
                            <div>
                                <h2 className="text-lg font-semibold">Trustpilot</h2>
                                <p className="text-gray-400">4.8 out of 5 <FaStar className="text-yellow-500 inline-block" /> </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaMoneyBillWave className="text-green-500" />
                            <div>
                                <h2 className="text-lg font-semibold">Cashback</h2>
                                <p className="text-gray-400">Get up to 10% Cashback when you book with us.</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaHeadset className="text-blue-500 text-2xl" />
                            <div>
                                <h2 className="text-lg font-semibold">Customer Support</h2>
                                <p className="text-gray-400">Our customer support team is on hand and ready to help. Yup - real humans!</p>
                                <p className="text-gray-400">+91 9988629078</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
