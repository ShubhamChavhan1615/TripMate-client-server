import React from 'react';
import Places from '../Components/Places';
import SubSections from '../Components/SubSections';

const Home = () => {
  return (
    <div className='h-auto w-full'>
      <div className="relative min-h-screen bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D')]">
      <div className="absolute inset-0 bg-black bg-opacity-35 z-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-2/3 text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mt-16 mb-4 drop-shadow-lg">
          BOOK TOURS, ACTIVITIES & THINGS TO DO!
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
          Best Price Guarantee - Flexible Bookings - Book With Confidence
        </p>
      </div>
      <div className="relative z-10 bg-gray-900 bg-opacity-30 pt-12 pb-28 px-4">
        <Places />
      </div>
    </div>
    <SubSections/>
    </div>
  );
};

export default Home;
