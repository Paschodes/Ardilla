import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SlArrowDown } from 'react-icons/sl';
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
    const toggleProfileDropdown = () => {
        setIsProfileDropdownVisible(!isProfileDropdownVisible);
      };
  return (
    <div className={`${bgColor}`}>
      <div className="flex items-center justify-between py-10 max-w-6xl mx-auto">
        <div>
          <Link to="/">
            <img src={logo} alt="Ardilla Logo" />
          </Link>
        </div>
        <div className="flex">
          <ul className={`flex gap-12 ${textColor} text-sm`}>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/">Business</Link></li>
            <li><Link to="/">Company</Link></li>
            <li><Link to="/interest">Learn</Link></li>
          </ul>
        </div>
        <div className="flex gap-5">
            <div className="flex items-center relative cursor-pointer" onClick={toggleProfileDropdown}>
                <img src={loginpic} alt="" className="w-12 h-12 rounded-full" />
                <SlArrowDown className={`${textColor} text-xs ml-2`} />
                {isProfileDropdownVisible && (
                    <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg py-2">
                    <li className="px-4 py-2 hover:bg-gray-100"><Link to="/Profile/about-us">Profile</Link></li>
                    {/* <li className="px-4 py-2 hover:bg-gray-100"><Link to="/Profile/messages"></Link>Messages</li>
                    <li className="px-4 py-2 hover:bg-gray-100"><Link to="/Profile/settings"></Link>Settings</li> */}
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
      </div>
    </div>
  );
};

export default Navbar;
