import React from 'react';
import { FaCampground, FaUmbrellaBeach, FaMountain, FaWater, FaCity, FaLeaf, FaUsers, FaSuitcaseRolling, FaThumbsUp, FaRupeeSign } from 'react-icons/fa';
import videoUrl from "../assets/video_20240722_114606_edit.mp4";
import { MdHealthAndSafety } from 'react-icons/md';

const SubSections = () => {
    return (
        <div className='h-auto w-full'>
            <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-6 md:flex md:justify-between md:items-center space-y-6 md:space-y-0">
                <div className="md:w-1/2 space-y-4 animate-fadeIn">
                    <p className="text-lg font-semibold text-yellow-400">Welcome to TripMate</p>
                    <h1 className="text-4xl font-bold leading-tight text-yellow-300 drop-shadow-lg">
                        We are the most fun company for travel and adventure
                    </h1>
                    <p className="text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eum quos repellat ullam sapiente aliquid sunt id voluptas atque corporis.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                        {[
                            { icon: FaCampground, text: 'Camping' },
                            { icon: FaUmbrellaBeach, text: 'Beaches' },
                            { icon: FaMountain, text: 'Mountains' },
                            { icon: FaWater, text: 'Deserts' },
                            { icon: FaCity, text: 'City' }
                        ].map((item, index) => (
                            <span key={index} className="flex cursor-pointer items-center bg-gray-700 hover:bg-gray-800 transition-colors duration-300 text-white px-4 py-2 rounded-full space-x-2">
                                <item.icon />
                                <span>{item.text}</span>
                            </span>
                        ))}
                    </div>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0 animate-fadeIn">
                    <div className="relative overflow-hidden rounded-lg shadow-xl">
                        <img
                            src="https://media.istockphoto.com/id/1511069617/photo/women-hikers-embracing-the-untamed-beauty-of-tasmania-through-exhilarating-bushwalking.webp?b=1&s=170667a&w=0&k=20&c=WtDKjvbHWmW9F05AvxR-E7XglgrXFlkg3XP_lsHJeBA="
                            alt="Hikers"
                            className="w-full object-cover h-96 md:h-auto transform transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-l from-gray-800 via-gray-900 to-black w-full flex flex-col md:flex-row text-white p-6 space-y-6 md:space-y-0 md:space-x-6">
                <div className="relative w-full md:w-1/2 h-64 md:h-96 rounded-lg overflow-hidden">
                    <iframe
                        src={videoUrl}
                        className="absolute inset-0 w-full h-full"
                        allow="encrypted-media"
                        allowFullScreen
                        muted
                    ></iframe>
                </div>
                <div className="text-center w-full md:w-1/2 space-y-2">
                    <p className="text-lg font-semibold text-yellow-400">Availability</p>
                    <h1 className="text-3xl font-bold text-yellow-300">Enjoy Real Adventure</h1>
                    <ul className="space-y-1 text-gray-300">
                        <li className="flex items-center space-x-2">
                            <FaLeaf className="text-green-400" />
                            <span>Ready to adventure and enjoy nature</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaUsers className="text-yellow-400" />
                            <span>Journeys are best measured with friends</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaSuitcaseRolling className="text-blue-400" />
                            <span>Best experiences with TripMate</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-6 md:flex md:justify-between md:items-center space-y-6 md:space-y-0">
                <div className="md:w-1/2 mt-6 md:mt-0 animate-fadeIn">
                    <div className="relative overflow-hidden rounded-lg shadow-xl">
                        <img
                            src="https://media.istockphoto.com/id/1511069617/photo/women-hikers-embracing-the-untamed-beauty-of-tasmania-through-exhilarating-bushwalking.webp?b=1&s=170667a&w=0&k=20&c=WtDKjvbHWmW9F05AvxR-E7XglgrXFlkg3XP_lsHJeBA="
                            alt="Hikers"
                            className="w-full object-cover h-96 md:h-auto transform transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                    </div>
                </div>
                <div className="md:w-1/2 space-y-4 space-x-6 animate-fadeIn">
                    <p className="text-lg font-semibold ml-6 text-yellow-400">Why choose us</p>
                    <h1 className="text-4xl font-bold leading-tight text-yellow-300 drop-shadow-lg">
                        Great opportunity for adventure & travels
                    </h1>
                    <p className="text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eum quos repellat ullam sapiente aliquid sunt id voluptas atque corporis.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                        <ul>
                            <li className="flex items-center space-x-2">
                                <MdHealthAndSafety className="text-green-400" />
                                <div>
                                    <h1 className="text-xl font-semibold">Safety first always</h1>
                                    <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaRupeeSign className="text-yellow-400" />
                                <div>
                                    <h1 className="text-xl font-semibold">Low price & friendly</h1>
                                    <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaThumbsUp className="text-yellow-400" />
                                <div>
                                    <h1 className="text-xl font-semibold">Trusted traveling</h1>
                                    <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SubSections;
