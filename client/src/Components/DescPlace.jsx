import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchPlaces } from '../app/Features/PlaceSlice';

const DescPlace = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const places = useSelector((state) => state.placeData);
  const [currentPlace, setCurrentPlace] = useState(null);
  const [relatedPlaces, setRelatedPlaces] = useState([]);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    dispatch(fetchPlaces());
  }, [dispatch]);

  useEffect(() => {
    if (places.length > 0) {
      const place = places.find((p) => p._id === id);
      setCurrentPlace(place);
      setMainImage(place?.images[0]);

      const related = places.filter((p) => p._id !== id);
      setRelatedPlaces(related);
    }
  }, [places, id]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const handleRelatedPlaceClick = (relatedPlaceId) => {
    navigate(`/place/${relatedPlaceId}`);
  };

  if (!currentPlace) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-2 px-2 md:px-0">
      <div className="flex flex-col items-center justify-center p-2 gap-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">View More Details</h1>
        <div className="product-card bg-gray-800 border overflow-hidden border-gray-700 rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-5xl">
          <div className="flex flex-row md:flex-col p-4 gap-2 md:w-1/4 overflow-x-auto">
            {currentPlace.images.map((image, index) => (
              <img
                key={index}
                className="sub-image cursor-pointer rounded-lg object-cover h-24 w-24 md:h-32 md:w-32 transform hover:scale-105 transition-transform"
                src={image}
                alt={currentPlace.title}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
          <div className="flex flex-col flex-grow p-4 md:w-3/4">
            <img
              className="main-image cursor-pointer rounded-lg object-cover h-64 md:h-96 w-full transform hover:scale-95 transition-transform"
              src={mainImage}
              alt={currentPlace.title}
            />
            <div className="p-5">
              <h5 className="product-title text-2xl font-semibold tracking-tight text-white mb-2">
                {currentPlace.title}
              </h5>
              <p className="product-description text-gray-300 mb-4">
                {currentPlace.description}
              </p>
              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="product-discount text-lg font-bold text-red-500">
                    {currentPlace.discountPercentage}% off
                  </span>
                  <span className="product-price text-xl font-bold text-white">
                    ₹ {currentPlace.discountedPrice}
                  </span>
                  {currentPlace.discountedPrice !== currentPlace.price && (
                    <div className="product-original-price text-sm text-gray-400 line-through">
                      ₹ {currentPlace.price}
                    </div>
                  )}
                </div>
                <Link
                  to={`/book/${currentPlace.title}/${currentPlace._id}`}
                  className="product-button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-5 mt-10">
          Related Places
        </h3>
        <div className="related-products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPlaces.map((relatedPlace) => (
            <div
              key={relatedPlace._id}
              className="related-product-card bg-gray-800 border overflow-hidden border-gray-700 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform"
              onClick={() => handleRelatedPlaceClick(relatedPlace._id)}
            >
              <img
                className="related-product-image cursor-pointer rounded-t-lg object-cover h-48 w-full"
                src={relatedPlace.thumbnail}
                alt={relatedPlace.title}
              />
              <div className="p-5">
                <h5 className="related-product-title text-xl font-semibold tracking-tight text-white mb-2">
                  {relatedPlace.title}
                </h5>
                <p className="related-product-description text-gray-300 mb-4">
                  {relatedPlace.description}
                </p>
                <div className="flex items-center space-x-2">
                  <span className="related-product-price text-lg font-bold text-white">
                    ₹ {relatedPlace.discountedPrice}
                  </span>
                  {relatedPlace.discountedPrice !== relatedPlace.price && (
                    <div className="related-product-original-price text-sm text-gray-400 line-through">
                      ₹ {relatedPlace.price}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DescPlace;
