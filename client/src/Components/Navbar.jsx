import React, { useEffect, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../app/Features/UserSclice';
import Logo from "../assets/logo.jfif"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const userDropdownRef = useRef(null);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.userProfileData);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
      setIsUserDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem('authToken');
    window.location.reload();
  };

  return (
    <>
      <nav className="bg-gray-900 border-gray-700 shadow-2xl sticky top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src={Logo} alt="TripMate" className='h-[30px]' /> */}
            <span className="self-center text-2xl font-semibold text-white">TripMate</span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {user?.fullName ? (
              <div className="relative" ref={userDropdownRef}>
                <button
                  onClick={toggleUserDropdown}
                  className="flex items-center space-x-1 text-gray-300 font-medium hover:text-blue-500"
                >
                  <FaRegUserCircle className="mt-1 text-xl" />
                  <span>{user.fullName}</span>
                </button>
                {isUserDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-md shadow-lg">
                    <NavLink
                      to={`/profile/${user._id}`}
                      className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
                    >
                      Profile
                    </NavLink>
                    <NavLink
                      to={`userActivity/${user._id}/${user.fullName}`}
                      className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
                    >
                      Check Activity
                    </NavLink>
                    <span
                      onClick={handleLogOut}
                      className="block cursor-pointer px-4 py-2 text-gray-300 hover:bg-gray-700"
                    >
                      Log out
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/SignUp"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                SignUp
              </Link>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700"
              aria-controls="navbar-cta"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <MdClose className="w-6 h-6" /> : <GiHamburgerMenu className="w-6 h-6" />}
            </button>
          </div>
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-3 md:p-0 rounded md:bg-transparent ${
                      isActive
                        ? 'text-blue-700 bg-blue-700 md:text-blue-500'
                        : 'text-gray-300 hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500'
                    }`
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    `block py-2 px-3 md:p-0 rounded md:bg-transparent ${
                      isActive
                        ? 'text-blue-700 bg-blue-700 md:text-blue-500'
                        : 'text-gray-300 hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500'
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Services"
                  className={({ isActive }) =>
                    `block py-2 px-3 md:p-0 rounded md:bg-transparent ${
                      isActive
                        ? 'text-blue-700 bg-blue-700 md:text-blue-500'
                        : 'text-gray-300 hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500'
                    }`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    `block py-2 px-3 md:p-0 rounded md:bg-transparent ${
                      isActive
                        ? 'text-blue-700 bg-blue-700 md:text-blue-500'
                        : 'text-gray-300 hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500'
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
