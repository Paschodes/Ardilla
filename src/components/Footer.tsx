import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import download from "../assets/download.svg";
import background from "../assets/background.svg";
import Button from "./Button";

const Footer = () => {
    return (
        <div className="bg-[#8807F7] relative">
            <div className="max-w-6xl mx-auto text-[#FFFFFF] relative z-10 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center flex-col absolute inset-x-0 bottom-[470px]  sm:bottom-40 md:bottom-64 lg:bottom-[470px]">
                    <div className="relative w-[941px] h-[306.37px] flex items-center bg-cover bg-center md:w-[941px]" style={{ backgroundImage: `url(${background})` }}>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-950 to-purple-950 opacity-90"></div>
                        <div className="relative w-full flex md:flex-row justify-between items-center px-20 z-10 sm:px-10 md:px-20">
                            <div className="flex flex-col gap-8 sm:gap-8 md:text-left">
                                <h2 className="font-bold text-4xl w-80 sm:text-4xl md:w-80">Download for free Start saving Today</h2>
                                <Button title="Download for free" className="bg-white text-[#3C0071] w-42 h-[57px] text-sm md:w-42 sm:h-[57px]" />
                            </div>
                            <img src={download} alt="download" className="mt-16 md:mt-16 sm:w-auto" />
                        </div>
                    </div>
                </div>

                <div className="flex text-[13px] leading-8 justify-between md:flex-row sm:mt-96 md:mt-60">
                    <div className="flex w-3/5 gap-24 mt-60 sm:flex-row md:w-3/5 sm:gap-24">
                        <div>
                            <h4 className="font-extrabold">Products</h4>
                            <ul>
                                <li className="font-normal">Savings</li>
                                <li className="font-normal">Dilla</li>
                                <li className="font-normal">Financial Coach</li>
                                <li className="font-normal">Halal</li>
                                <li className="font-normal items-center h-8">Budgeting <span className="w-11 h-4 rounded-full border-solid py-1 px-2 border-[0.69px] border-white text-[5.21px] font-medium">Coming Soon</span></li>
                                <li className="font-normal items-center h-8">Investment <span className="w-11 h-4 rounded-full border-solid py-1 px-2 border-[0.69px] border-white text-[5.21px] font-medium">Coming Soon</span></li>
                                <li className="font-normal items-center h-8">Insurance <span className="w-11 h-4 rounded-full border-solid py-1 px-2 border-[0.69px] border-white text-[5.21px] font-medium">Coming Soon</span></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-extrabold">Company</h4>
                            <ul>
                                <li className="font-normal">About us</li>
                                <li className="font-normal">Careers</li>
                                <li className="font-normal">FAQS</li>
                                <li className="font-normal">Press</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-extrabold">Transparency</h4>
                            <ul>
                                <li className="font-normal">Terms & conditions</li>
                                <li className="font-normal">Information security policy</li>
                                <li className="font-normal">Privacy policy</li>
                                <li className="font-normal">Interest Tool</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex w-2/5 justify-between mt-60  sm:flex-row md:w-2/5 sm:gap-0 ">
                        <div>
                            <h4 className="font-extrabold">Developer</h4>
                            <ul>
                                <li className="font-normal items-center h-8">Connect API <span className="w-11 h-4 rounded-full border-solid py-1 px-2 border-[0.69px] border-white text-[5.21px] font-medium">Coming soon</span></li>
                            </ul>
                        </div>
                        <div>
                            <div>
                                <h4 className="font-extrabold">Address</h4>
                                <ul>
                                    <li className="font-normal">33B, Ogundana street, Allen, Ikeja</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-extrabold">Contact</h4>
                                <ul>
                                    <li className="font-normal">support@ardilla.africa</li>
                                    <li className="font-normal">(234)8010001234</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="bg-[#D1D5DB] my-8" />

                <div>
                    <div className="flex justify-between items-center sm:flex-row sm:text-left">
                        <p className="text-sm font-medium leading-[17.36px] sm:mb-0">© 2023 Ardilla. All right reserved</p>
                        <div className="flex w-44 justify-around sm:w-44">
                            <div className="rounded-full h-8 w-8 flex items-center justify-center border-solid border-white border-[1px]">
                                <SlSocialInstagram />
                            </div>
                            <div className="rounded-full h-8 w-8 flex items-center justify-center border-solid border-white border-[1px]">
                                <SlSocialFacebook />
                            </div>
                            <div className="rounded-full h-8 w-8 flex items-center justify-center border-solid border-white border-[1px]">
                                <SlSocialLinkedin />
                            </div>
                            <div className="rounded-full h-8 w-8 flex items-center justify-center border-solid border-white border-[1px]">
                                <SlSocialTwitter />
                            </div>
                        </div>
                    </div>
                    <p className="text-[13px] font-normal leading-8 w-[1031px]  sm:mt-8">Ardilla operates under the cooperative license of Ardilla Multipurpose Cooperative Society, LSC 18245, We provide 
                        Savings and Fixed deposit services to our users
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
