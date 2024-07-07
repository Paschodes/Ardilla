import React from 'react';
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
  return (
    <div className={`${bgColor}`}>
      <div className="flex items-center justify-between py-10 max-w-6xl mx-auto">
        <div>
          <img src={logo} alt="Ardilla Logo" />
        </div>
        <div className="flex">
          <ul className={`flex gap-12 ${textColor} text-sm`}>
            <li>Products</li>
            <li>Business</li>
            <li>Company</li>
            <li>Learn</li>
          </ul>
        </div>
        <div className="flex gap-5">
          <div className="flex items-center">
            <img src={loginpic} alt="" />
            <SlArrowDown className={`${textColor} text-xs`} />
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
