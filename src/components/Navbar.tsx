import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SlArrowDown } from 'react-icons/sl';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from './Button';
import logo from '../assets/logo.svg';
import loginpic from '../assets/loginpic.svg';

interface NavbarProps {
  bgColor?: string;
  textColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  buttonClassName?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  bgColor = 'bg-[#240053]',
  textColor = 'text-white',
  buttonColor = 'bg-[#8807F7]',
  buttonTextColor = 'text-white',
  buttonClassName = '',
}) => {
  const [isProfileDropdownVisible, setIsProfileDropdownVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownVisible(!isProfileDropdownVisible);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${bgColor} p-4`}>
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div>
          <Link to="/">
            <img src={logo} alt="Ardilla Logo" className="h-8 sm:h-10" />
          </Link>
        </div>
        <div className="hidden md:flex items-center">
          <ul className={`flex gap-6 lg:gap-12 ${textColor} text-sm`}>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/">Business</Link></li>
            <li><Link to="/">Company</Link></li>
            <li><Link to="/interest">Learn</Link></li>
          </ul>
        </div>
        <div className="hidden md:flex gap-5 items-center">
          <div className="relative cursor-pointer flex items-center" onClick={toggleProfileDropdown}>
            <img src={loginpic} alt="" className="w-8 h-8 sm:w-12 sm:h-12 rounded-full" />
            <SlArrowDown className={`${textColor} text-xs ml-2`} />
            {isProfileDropdownVisible && (
              <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg py-2">
                <li className="px-4 py-2 hover:bg-gray-100"><Link to="/Profile/about-us">Profile</Link></li>
                <li className="px-4 py-2 hover:bg-gray-100"><Link to="/Profile/login">Login</Link></li>
              </ul>
            )}
          </div>
          <Button
            title="create account"
            bgColor={buttonColor}
            className={`${buttonTextColor} h-[47.89px] w-[175.6px] rounded-full ${buttonClassName}`}
          />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className={`${textColor}`}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className={`flex flex-col gap-4 ${textColor} text-sm`}>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/">Business</Link></li>
            <li><Link to="/">Company</Link></li>
            <li><Link to="/interest">Learn</Link></li>
            <div className="relative cursor-pointer mt-4" onClick={toggleProfileDropdown}>
              <img src={loginpic} alt="" className="w-8 h-8 sm:w-12 sm:h-12 rounded-full" />
              <SlArrowDown className={`${textColor} text-xs ml-2`} />
              {isProfileDropdownVisible && (
                <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg py-2">
                  <li className="px-4 py-2 hover:bg-gray-100"><Link to="/Profile/about-us">Profile</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><Link to="/Profile/login">Login</Link></li>
                </ul>
              )}
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;




// <div className="flex gap-5">
//             <div className="flex items-center relative cursor-pointer" onClick={toggleProfileDropdown}>
//                 <img src={loginpic} alt="" className="w-12 h-12 rounded-full" />
//                 <SlArrowDown className={`${textColor} text-xs ml-2`} />
//                 {isProfileDropdownVisible && (
//                     <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg py-2">
//                     <li className="px-4 py-2 hover:bg-gray-100"><Link to="/Profile/about-us">Profile</Link></li>
//                     {/* <li className="px-4 py-2 hover:bg-gray-100"><Link to="/Profile/messages"></Link>Messages</li>
//                     <li className="px-4 py-2 hover:bg-gray-100"><Link to="/Profile/settings"></Link>Settings</li> */}
//                     <li className="px-4 py-2 hover:bg-gray-100"><Link to="/Profile/login">Login</Link></li>
//                     </ul>
//                 )}
//             </div>
//           <Button
//             title="create account"
//             bgColor={buttonColor}
//             className={`${buttonTextColor} h-[47.89px] w-[175.6px] rounded-full ${buttonClassName}`}
//           />
// </div>