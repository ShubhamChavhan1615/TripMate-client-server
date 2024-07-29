import React, { useEffect, useState } from 'react';
import { fetchPlaces } from '../app/Features/PlaceSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { CiStar } from 'react-icons/ci';

const Card = () => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.placeData);
  const { id } = useParams();
  const [prioritizedPlaces, setPrioritizedPlaces] = useState([]);

  useEffect(() => {
    dispatch(fetchPlaces());
  }, [dispatch]);

  useEffect(() => {
    if (id && places.length > 0) {
      const clickedPlace = places.find((place) => place._id === id);
      const otherPlaces = places.filter((place) => place._id !== id);
      setPrioritizedPlaces([clickedPlace, ...otherPlaces]);
    } else {
      setPrioritizedPlaces(places);
    }
  }, [id, places]);

  return (
    <div className="min-h-screen text-white p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {prioritizedPlaces.map((place) => (
          <Link to={`/${place.title}/${place._id}`} key={place.title} >
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-300">
              <img 
                src={place.thumbnail} 
                alt={place.title} 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{place.title}</h2>
              <p className="text-gray-400 mb-2">{place.description}</p>
              <div className="mb-2">
                <span className="text-lg font-semibold text-gray-300">Category: </span>
                <span className="text-gray-400">{place.category}</span>
              </div>
              <div className="mb-2">
                <span className="text-lg font-semibold text-gray-300">Location: </span>
                <span className="text-gray-400">{place.location}</span>
              </div>
              <div className="mb-2">
                <span className="text-lg font-semibold text-gray-300">Rating: </span>
                <span className="text-yellow-400">{place.rating} / 5 <CiStar className='inline-block text-yellow-400' /></span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-lg font-semibold text-gray-300">Price: </span>
                  <span className="text-red-400 line-through">₹{place.price}</span>
                </div>
                <div>
                  <span className="text-lg font-semibold text-gray-300">Discounted Price: </span>
                  <span className="text-green-400">₹{place.discountedPrice}</span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-gray-300">Discount: </span>
                <span className="text-blue-400">{place.discountPercentage}%</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
