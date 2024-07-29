import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CiBookmarkCheck } from 'react-icons/ci';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdTrophy } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { fetchPlaces } from '../app/Features/PlaceSlice';

const Places = () => {
  const [visiblePlaces, setVisiblePlaces] = useState(4);

  const dispatch = useDispatch();
  const places = useSelector((state) => state.placeData);

  useEffect(() => {
    dispatch(fetchPlaces());
  }, [dispatch]);

  const handleViewMore = () => {
    setVisiblePlaces((prevVisiblePlaces) => prevVisiblePlaces + 4);
  };

  return (
    <div className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Top Popular Places
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {places.slice(0, visiblePlaces).map((place) => (
            <div key={place.title} className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <Link to={`/all/places/${place._id}`}>
                <div className="flex items-center mb-2">
                  <FaMapMarkerAlt className="text-red-500 mr-2" />
                  <h3 className="text-lg font-semibold">{place?.location}</h3>
                </div>
                <p className="mb-2">{place?.description}</p>
              </Link>
            </div>
          ))}
        </div>
        {visiblePlaces < places.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleViewMore}
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg"
            >
              View More
            </button>
          </div>
        )}
      </div>

      <div className="mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-6">
        <h2 className="text-xl flex items-center justify-center cursor-pointer mb-4 sm:mb-0">
          <IoMdTrophy className="text-yellow-500 mr-2" />
          <span>Best Price Guaranteed</span>
        </h2>
        <h2 className="text-xl flex items-center justify-center cursor-pointer mb-4 sm:mb-0">
          <AiOutlineGlobal className="text-green-500 mr-2" />
          <span>Flexible Booking</span>
        </h2>
        <h2 className="text-xl flex items-center justify-center cursor-pointer">
          <CiBookmarkCheck className="text-blue-500 mr-2" />
          <span>Trusted Partner</span>
        </h2>
      </div>
    </div>
  );
};

export default Places;
