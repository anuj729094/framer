import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=' xl:flex xl:justify-center'>
            <div className='xl:w-[80rem] px-3 my-20 text-[#DAD9EF] md:flex md:gap-3 lg:gap-10'>
                <div className="companydesc">
                    <div className="heading text-[#5A51DF] text-[31px] md:text-[35px] lg:text-[39px] font-semibold ">
                        mNivesh
                    </div>
                    <div className="desc my-4">
                        <p>Milestone Global Moneymart (P) Ltd established in March 2006, earlier with the name of Milestone Portfolio Consultants (P) Ltd, proudly offers a comprehensive suite of saving, investment and insurance products across asset classes,</p>
                        <button className=' my-3 flex items-center gap-1'>Read More <IoIosArrowForward /></button>
                        <ul className=' listoflinks flex items-center gap-2 text-2xl'>
                            <li><IoLogoFacebook /></li>
                            <li><BiLogoPlayStore /></li>
                            <li><FaApple /></li>
                        </ul>
                    </div>
                </div>
                <div className="companylinks mt-10 md:mt-0">
                    <ul className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        <li>
                            <p className=' text-[#5A51DF] text-[20px] font-medium'>Company</p>
                            <ul className=' flex flex-col gap-3 text-[16px] mt-3'>
                                <li>About Us</li>
                                <li>Our Blogs</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>Disclousure & Disclaimer</li>
                                <li>Contact Us</li>
                            </ul>
                        </li>
                        <li>
                            <p className=' text-[#5A51DF] text-[20px] font-medium'>Quick Links</p>
                            <ul className=' flex flex-col gap-3 text-[16px] mt-3'>
                                <li>Brokerage Calculator</li>
                                <li>Fixed Deposit</li>
                                <li>Privacy Policy</li>
                                <li>IPO/FPO</li>
                                <li>Health Insurane</li>
                                <li>Equity Mutual Funds</li>
                            </ul>
                        </li>
                        <li>
                            <p className=' text-[#5A51DF] text-[20px] font-medium'>Contact Us</p>
                            <ul className=' flex flex-col gap-3 text-[16px] mt-3'>
                                <li>
                                    <div className=' flex gap-2 items-center'>
                                        <FaPhoneAlt />
                                        Phone
                                    </div>
                                    <p className=' text-[#FFFFFF7D] text-sm mt-2'>+91&nbsp;8269&nbsp;135&nbsp;135</p>
                                </li>
                                <li>
                                    <div className=' flex gap-2 items-center'>
                                        <MdEmail />
                                        Email
                                    </div>
                                    <p className=' text-[#FFFFFF7D] text-sm mt-2'>info@niveshonline.com</p>
                                </li>
                                <li>
                                    <div className=' flex gap-2 items-center'>
                                        <IoLocationSharp />
                                        Address
                                    </div>
                                    <p className=' text-[#FFFFFF7D] text-sm my-2'>101-G, First Floor, Crown Heights, Sector 10, Rohini, Near Rithala Metro Station, Above Honda Showroom, Delhi-110085</p>
                                    <p className='text-[#FFFFFF7D] text-sm '>SCO114, Sonepat Sector 14, Haryana, 131001, Near Milk Point</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

    )
}

export default Footer