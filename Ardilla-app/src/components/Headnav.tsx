import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SlArrowDown } from 'react-icons/sl';
import Button from './Button';
import logo from '../assets/logo.svg';
import loginpic from '../assets/loginpic.svg';

interface HeadnavProps {
  bgColor?: string;
  textColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  buttonClassName?: string;
}

const Headnav: React.FC<HeadnavProps> = ({
  bgColor = 'bg-[#240053]',
  textColor = 'text-white',
  buttonColor = 'bg-[#8807F7]',
  buttonTextColor = 'text-white',
  buttonClassName = '',
}) => {
  const [isProductsDropdownVisible, setIsProductsDropdownVisible] = useState(false);
  const [isCompanyDropdownVisible, setIsCompanyDropdownVisible] = useState(false);
  const [isProfileDropdownVisible, setIsProfileDropdownVisible] = useState(false);

  const toggleProductsDropdown = () => {
    setIsProductsDropdownVisible(!isProductsDropdownVisible);
  };

  const toggleCompanyDropdown = () => {
    setIsCompanyDropdownVisible(!isCompanyDropdownVisible);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownVisible(!isProfileDropdownVisible);
  };

  return (
    <div className={`${bgColor}`}>
      <div className="flex items-center justify-between py-10 max-w-6xl mx-auto relative">
        <div className="flex items-center gap-24">
          <Link to="/">
            <img src={logo} alt="Ardilla Logo" />
          </Link>
          <ul className={`flex gap-12 ${textColor} text-sm`}>
            <li className="relative">
              <div onClick={toggleProductsDropdown} className="cursor-pointer">
                Products <SlArrowDown className="inline" />
              </div>
              {isProductsDropdownVisible && (
                <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg py-2">
                  <li className="px-4 py-2 hover:bg-gray-100"><Link to="/products/savings">Savings</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><Link to="/products/dilla">Dilla</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><Link to="/products/financial-coach">Financial Coach</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><Link to="/products/halal">Halal</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><Link to="/products/budgeting">Budgeting</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><Link to="/products/investment">Investment</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><Link to="/products/insurance">Insurance</Link></li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/business">
                Business <span className="text-[10px] bg-[#10001F] border text-white px-3 py-1 rounded-md ml-1">Beta</span> 
              </Link>
            </li>
            <li className='relative'>
              <div onClick={toggleCompanyDropdown} className="cursor-pointer">
                Company <SlArrowDown className="inline" />
              </div>
              {isCompanyDropdownVisible && (
                <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg py-2">
                  <li className="px-4 py-2 hover:bg-gray-100"><Link to="/company/About-us">About Us</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><Link to="/company/careers">Careers</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><Link to="/company/faq">FAQS</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><Link to="/company/press">Press</Link></li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/learn">
                Learn
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <Link to="/sign-in" className={`${textColor}`}>Sign In</Link>
          <Button
            title="Create Account"
            bgColor={buttonColor}
            className={`${buttonTextColor} h-[47.89px] w-[180.6px] rounded-full ${buttonClassName}`}
          />
          <div className="flex items-center relative cursor-pointer" onClick={toggleProfileDropdown}>
            <img src={loginpic} alt="" className="w-10 h-10 rounded-full" />
            <SlArrowDown className={`${textColor} text-xs ml-2`} />
            {isProfileDropdownVisible && (
                <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg py-2">
                  <li className="px-4 py-2 hover:bg-gray-100"><Link to="/">Home</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><Link to="/Profile/about-us">Profile</Link></li>
                  {/* <li className="px-4 py-2 hover:bg-gray-100"><Link to="/Profile/messages"></Link>Messages</li>
                  <li className="px-4 py-2 hover:bg-gray-100"><Link to="/Profile/settings"></Link>Settings</li> */}
                  <li className="px-4 py-2 hover:bg-gray-100"><Link to="/Profile/login">Login</Link></li>
                  {/* <li className="px-4 py-2 hover:bg-gray-100"><Link to="/Profile/logout">Logout</Link></li> */}
                </ul>
              )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Headnav;

