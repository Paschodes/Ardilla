
import logo from "../assets/logo.svg"
import loginpic from "../assets/loginpic.svg"
import Button from "./Button";
import { SlArrowDown } from "react-icons/sl";

const Navbar = () => {
    return ( 
        <div className="bg-[#240053] flex items-center justify-around py-4">
            <div>
                <img src={logo} alt="Ardilla Logo" />
            </div>
            <div className="flex">
                <ul className="flex gap-12 text-white">
                    <li>Products</li>
                    <li>Business</li>
                    <li>Company</li>
                    <li>Learn</li>
                </ul>
            </div>
            <div className="flex gap-5">
                <div className="flex items-center">
                    <img src={loginpic} alt="" />
                    <SlArrowDown className="text-white text-xs" />
                </div>
                <Button title="create account" className="bg-[#8807F7] h-[47.89px] w-[175.6px] rounded-3xl"/>
            </div>
        </div>
     );
}
 
export default Navbar;

