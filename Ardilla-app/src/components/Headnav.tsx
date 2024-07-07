import React from 'react';
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
  return (
    <div className={`${bgColor}`}>
      <div className="flex items-center justify-between py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-8">
          <img src={logo} alt="Ardilla Logo" />
          <ul className={`flex gap-12 ${textColor} text-sm`}>
            <li>Products <SlArrowDown className="inline" /></li>
            <li>Business <span className="text-[10px] bg-[#3D0072] text-white px-2 rounded-md ml-1">NEW</span> <SlArrowDown className="inline" /></li>
            <li>Company <SlArrowDown className="inline" /></li>
            <li>Learn</li>
          </ul>
        </div>
        <div className="flex items-center gap-8">
          <span className={`${textColor}`}>Sign In</span>
          <Button
            title="Create Account"
            bgColor={buttonColor}
            className={`${buttonTextColor} h-[47.89px] w-[180.6px] rounded-full ${buttonClassName}`}
          />
          <div className="flex items-center">
            <img src={loginpic} alt="" className="w-8 h-8 rounded-full" />
            <SlArrowDown className={`${textColor} text-xs ml-2`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headnav;
