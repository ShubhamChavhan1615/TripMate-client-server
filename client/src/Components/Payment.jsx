// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { fetchPlaces } from '../app/Features/PlaceSlice';
// import { FaCreditCard, FaUser, FaCalendarAlt, FaLock, FaFlag, FaRegCheckCircle, FaCashRegister, FaHeadset, FaStar } from 'react-icons/fa';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// const Payment = () => {
//     const navigate = useNavigate()
//     const { id } = useParams();
//     const dispatch = useDispatch();
//     const places = useSelector((state) => state.placeData);
//     const { register, handleSubmit, formState: { errors } } = useForm();

//     useEffect(() => {
//         dispatch(fetchPlaces());
//     }, [dispatch]);

//     const place = places ? places.find(p => p._id === id) : null;

//     const onSubmit = async (data) => {
//         try {
//             console.log(data);

//             const payload = {
//                 name: place.title,
//                 dateTime: new Date(), // Just an example, you can replace it with appropriate value
//                 location: place.location,
//                 description: place.description,
//                 amount: place.price
//             };
//             const authToken = localStorage.getItem("authToken")
//             const response = await axios.post(`https://tripmateserver.onrender.com/trip/trips/activities/${place._id}`, payload, {
//                 headers: {
//                     Authorization: `Bearer ${authToken}`
//                 }
//             });
//             toast.success("enjoy your trip");
//             setTimeout(() => {
//                 navigate("/")
//             }, 999)
//         } catch (error) {
//             toast.error(error);
//             console.log(error);
//         }
//     };

//     if (!places) {
//         return <div className="flex justify-center items-center h-screen text-white">Loading...</div>;
//     }

//     if (!place) {
//         return <div className="flex justify-center items-center h-screen text-white">Place not found</div>;
//     }

//     return (
//         <div className="container mx-auto p-4">
//             <ToastContainer />
//             <div className="flex flex-col lg:flex-row lg:space-x-8">
//                 <div className="lg:w-2/3 bg-gray-800 p-6 rounded-lg shadow-lg">
//                     <h1 className="text-2xl font-bold mb-4 flex items-center text-white">
//                         <FaCashRegister className="mr-2" /> Payment
//                     </h1>
//                     <h2 className="flex items-center text-gray-400 mb-4">
//                         <FaLock className="mr-2" /> Payments are secure and encrypted
//                     </h2>
//                     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//                         <div>
//                             <label className="font-semibold flex items-center text-gray-300">
//                                 <FaCreditCard className="mr-2" /> Card Number
//                             </label>
//                             <input
//                                 type="text"
//                                 className="border border-gray-600 bg-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-white"
//                                 {...register('cardNumber', { required: true, minLength: 16, maxLength: 16 })}
//                                 placeholder="1234 5678 9012 3456"
//                             />
//                             {errors.cardNumber && <span className="text-red-500">Card number must be 16 digits</span>}
//                         </div>
//                         <div>
//                             <label className="font-semibold flex items-center text-gray-300">
//                                 <FaUser className="mr-2" /> Card Holder Name
//                             </label>
//                             <input
//                                 type="text"
//                                 className="border border-gray-600 bg-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-white"
//                                 {...register('cardHolderName', { required: true })}
//                                 placeholder="John Doe"
//                             />
//                             {errors.cardHolderName && <span className="text-red-500">This field is required</span>}
//                         </div>
//                         <div>
//                             <label className="font-semibold flex items-center text-gray-300">
//                                 <FaCalendarAlt className="mr-2" /> Expiry Date
//                             </label>
//                             <input
//                                 type="month"
//                                 className="border border-gray-600 bg-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-white"
//                                 {...register('expiryDate', { required: true })}
//                             />
//                             {errors.expiryDate && <span className="text-red-500">This field is required</span>}
//                         </div>
//                         <div>
//                             <label className="font-semibold flex items-center text-gray-300">
//                                 <FaLock className="mr-2" /> CVC
//                             </label>
//                             <input
//                                 type="text"
//                                 className="border border-gray-600 bg-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-white"
//                                 {...register('cvc', { required: true, minLength: 3, maxLength: 4 })}
//                                 placeholder="123"
//                             />
//                             {errors.cvc && <span className="text-red-500">CVC must be 3 or 4 digits</span>}
//                         </div>
//                         <div>
//                             <label className="font-semibold flex items-center text-gray-300">
//                                 <FaFlag className="mr-2" /> Country
//                             </label>
//                             <input
//                                 type="text"
//                                 className="border border-gray-600 bg-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-white"
//                                 {...register('country', { required: true })}
//                                 placeholder="India"
//                             />
//                             {errors.country && <span className="text-red-500">This field is required</span>}
//                         </div>
//                         <button
//                             type="submit"
//                             className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
//                         >
//                             Complete Booking
//                         </button>
//                     </form>
//                 </div>
//                 <div className="lg:w-1/3 mt-8 lg:mt-0">
//                     <div className="p-4 border border-gray-600 rounded-md shadow-sm space-y-4 bg-gray-800">
//                         <img src={place.thumbnail} alt={place.title} className="w-full h-40 object-cover rounded-md" />
//                         <div>
//                             <h2 className="text-lg font-semibold text-white">{place.title}</h2>
//                             <p className="text-gray-400">Location: <span className="font-medium text-white">{place.location}</span></p>
//                             <p className="text-gray-400">Rating: <span className="font-medium text-white">{place.rating} <FaStar className="text-yellow-500 inline-block" /></span></p>
//                             <p className="text-gray-400">Total Price: <span className="font-medium text-white">₹{place.price}</span></p>
//                         </div>
//                     </div>
//                     <div className="mt-8 p-4 border border-gray-600 rounded-md shadow-sm space-y-4 bg-gray-800">
//                         <h1 className="text-2xl font-bold flex items-center text-white">
//                             <FaRegCheckCircle className="mr-2" /> Book with Confidence
//                         </h1>
//                         <div className="flex items-center space-x-2">
//                             <FaHeadset className="text-blue-500 text-2xl" />
//                             <div>
//                                 <h2 className="text-lg font-semibold text-white">Customer Support</h2>
//                                 <p className="text-gray-400">Our customer support team is on hand and ready to help. Yup - real humans!</p>
//                                 <p className="text-gray-400">+91 9988629078</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Payment;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { fetchPlaces } from '../app/Features/PlaceSlice';
import { FaCreditCard, FaUser, FaCalendarAlt, FaLock, FaFlag, FaRegCheckCircle, FaCashRegister, FaHeadset, FaStar } from 'react-icons/fa';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap'; // Import a spinner component or use your preferred loading icon

const Payment = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    const places = useSelector((state) => state.placeData);
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        dispatch(fetchPlaces());
    }, [dispatch]);

    const place = places ? places.find(p => p._id === id) : null;

    const onSubmit = async (data) => {
        setLoading(true); // Start loading
        try {
            console.log(data);

            const payload = {
                name: place.title,
                dateTime: new Date(), // Just an example, you can replace it with appropriate value
                location: place.location,
                description: place.description,
                amount: place.price
            };
            const authToken = localStorage.getItem("authToken");
            const response = await axios.post(`https://tripmateserver.onrender.com/trip/trips/activities/${place._id}`, payload, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });
            toast.success("Enjoy your trip");
            setTimeout(() => {
                navigate("/");
            }, 1000);
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
            console.log(error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    if (!places) {
        return <div className="flex justify-center items-center h-screen text-white">Loading...</div>;
    }

    if (!place) {
        return <div className="flex justify-center items-center h-screen text-white">Place not found</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <ToastContainer />
            <div className="flex flex-col lg:flex-row lg:space-x-8">
                <div className="lg:w-2/3 bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold mb-4 flex items-center text-white">
                        <FaCashRegister className="mr-2" /> Payment
                    </h1>
                    <h2 className="flex items-center text-gray-400 mb-4">
                        <FaLock className="mr-2" /> Payments are secure and encrypted
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label className="font-semibold flex items-center text-gray-300">
                                <FaCreditCard className="mr-2" /> Card Number
                            </label>
                            <input
                                type="text"
                                className="border border-gray-600 bg-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-white"
                                {...register('cardNumber', { required: true, minLength: 16, maxLength: 16 })}
                                placeholder="1234 5678 9012 3456"
                            />
                            {errors.cardNumber && <span className="text-red-500">Card number must be 16 digits</span>}
                        </div>
                        <div>
                            <label className="font-semibold flex items-center text-gray-300">
                                <FaUser className="mr-2" /> Card Holder Name
                            </label>
                            <input
                                type="text"
                                className="border border-gray-600 bg-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-white"
                                {...register('cardHolderName', { required: true })}
                                placeholder="John Doe"
                            />
                            {errors.cardHolderName && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div>
                            <label className="font-semibold flex items-center text-gray-300">
                                <FaCalendarAlt className="mr-2" /> Expiry Date
                            </label>
                            <input
                                type="month"
                                className="border border-gray-600 bg-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-white"
                                {...register('expiryDate', { required: true })}
                            />
                            {errors.expiryDate && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div>
                            <label className="font-semibold flex items-center text-gray-300">
                                <FaLock className="mr-2" /> CVC
                            </label>
                            <input
                                type="text"
                                className="border border-gray-600 bg-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-white"
                                {...register('cvc', { required: true, minLength: 3, maxLength: 4 })}
                                placeholder="123"
                            />
                            {errors.cvc && <span className="text-red-500">CVC must be 3 or 4 digits</span>}
                        </div>
                        <div>
                            <label className="font-semibold flex items-center text-gray-300">
                                <FaFlag className="mr-2" /> Country
                            </label>
                            <input
                                type="text"
                                className="border border-gray-600 bg-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-white"
                                {...register('country', { required: true })}
                                placeholder="India"
                            />
                            {errors.country && <span className="text-red-500">This field is required</span>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
                            disabled={loading} // Disable button when loading
                        >
                            {loading ? <Spinner animation="border" /> : 'Complete Booking'} {/* Show spinner when loading */}
                        </button>
                    </form>
                </div>
                <div className="lg:w-1/3 mt-8 lg:mt-0">
                    <div className="p-4 border border-gray-600 rounded-md shadow-sm space-y-4 bg-gray-800">
                        <img src={place.thumbnail} alt={place.title} className="w-full h-40 object-cover rounded-md" />
                        <div>
                            <h2 className="text-lg font-semibold text-white">{place.title}</h2>
                            <p className="text-gray-400">Location: <span className="font-medium text-white">{place.location}</span></p>
                            <p className="text-gray-400">Rating: <span className="font-medium text-white">{place.rating} <FaStar className="text-yellow-500 inline-block" /></span></p>
                            <p className="text-gray-400">Total Price: <span className="font-medium text-white">₹{place.price}</span></p>
                        </div>
                    </div>
                    <div className="mt-8 p-4 border border-gray-600 rounded-md shadow-sm space-y-4 bg-gray-800">
                        <h1 className="text-2xl font-bold flex items-center text-white">
                            <FaRegCheckCircle className="mr-2" /> Book with Confidence
                        </h1>
                        <div className="flex items-center space-x-2">
                            <FaHeadset className="text-blue-500 text-2xl" />
                            <div>
                                <h2 className="text-lg font-semibold text-white">Customer Support</h2>
                                <p className="text-gray-400">Our customer support team is on hand and ready to help. Yup - real humans!</p>
                                <p className="text-gray-400">+91 9988629078</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
