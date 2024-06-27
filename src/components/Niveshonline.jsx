import React, { useState } from 'react'
import { IoMdSettings } from "react-icons/io";
import { GiAutoRepair } from "react-icons/gi";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";
import { IoAlarm } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import {motion} from 'framer-motion'
const Niveshonline = () => {
    const boxvariant = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                type: "spring",
                when: "beforeChildren",
                staggerChildren: 0.4,
                duration: 0.4,
                delay:0.5
            }
        }
    }
    const listvaraint = {
        hidden: {
            y: "10px",
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
        }
    }
    return (
        <div className=' xl:flex xl:justify-center'>
           <div className=' xl:w-[80rem] px-3 my-20 lg:my-24 lg:flex lg:gap-16'>
            <div className=' niveshonline lg:w-[50%] '>
                <motion.h1
                whileInView={{
                    y:0,
                    opacity:1
                }}
                initial={{
                    y:40,
                    opacity:0
                }}
                transition={{
                    type:"spring",
                    duration:1,
                    delay:0.4
                }}
                className='text-[#DAD9EF] text-[31px] sm:text-[35px] lg:text-[40px] font-semibold text-center lg:text-left'>Why Nivesh <span className='text-[#5A51DF]'>Online</span></motion.h1>
                <motion.ul variants={boxvariant} whileInView="visible" initial="hidden" className=' grid grid-cols-1 sm:grid-cols-2 gap-7 mt-6'>
                    <motion.li  variants={listvaraint} className='flex items-start gap-3 text-[#DAD9EF]'>
                        <IoMdSettings className=' text-7xl relative bottom-4 w-[10%]' />
                        <div className=' flex flex-col gap-3 w-[90%]'>
                            <h2 className=' text-[#5A51DF] text-[20px] font-semibold'>Zero Fees</h2>
                            <p className='text-[15px]'>No Hidden charges. We don’t charge any fees and recommend low cost products.</p>
                        </div>
                    </motion.li>
                    <motion.li variants={listvaraint} className='flex items-start gap-3 text-[#DAD9EF]'>
                        <GiAutoRepair className=' text-7xl relative bottom-4 w-[10%]' />
                        <div className=' flex flex-col gap-3  w-[90%] '>
                            <h2 className=' text-[#5A51DF] text-[20px] font-semibold'>Financial Goals</h2>
                            <p className='text-[15px]'>We help you achieve all your financial goals & lead you to path of Financial Nirvana.</p>
                        </div>
                    </motion.li>
                    <motion.li variants={listvaraint} className='flex items-start gap-3 text-[#DAD9EF] '>
                        <FaWandMagicSparkles className=' text-7xl relative bottom-4 w-[10%]' />
                        <div className=' flex flex-col gap-3 w-[90%]'>
                            <h2 className=' text-[#5A51DF] text-[20px] font-semibold'>Best Advice</h2>
                            <p className='text-[15px]'>Our fund selection in Insurance and Fixed Deposit is unbiased and it works on the sole motto of creating wealth for you.</p>
                        </div>
                    </motion.li>
                    <motion.li variants={listvaraint} className='flex items-start gap-3 text-[#DAD9EF]'>
                        <FaWandMagicSparkles className=' text-7xl relative bottom-4 w-[10%]' />
                        <div className=' flex flex-col gap-3 w-[90%]'>
                            <h2 className=' text-[#5A51DF] text-[20px] font-semibold'>Best Advice</h2>
                            <p className='text-[15px]'>Our fund selection in Insurance and Fixed Deposit is unbiased and it works on the sole motto of creating wealth for you.</p>
                        </div>
                    </motion.li>
                    <motion.li variants={listvaraint} className='flex items-start gap-3 text-[#DAD9EF]'>
                        <FaCopy className=' text-7xl relative bottom-4 w-[10%]' />
                        <div className=' flex flex-col gap-3 w-[90%] '>
                            <h2 className=' text-[#5A51DF] text-[20px] font-semibold'>Transparent</h2>
                            <p className='text-[15px]'>We share your portfolio and hard earned money with complete transparancy through our app, website and whatsapp AI.</p>
                        </div>
                    </motion.li>
                    <motion.li variants={listvaraint} className='flex items-start gap-3 text-[#DAD9EF]'>
                        <IoAlarm className=' text-7xl relative bottom-4 w-[10%]' />
                        <div className=' flex flex-col gap-3  w-[90%]'>
                            <h2 className=' text-[#5A51DF] text-[20px] font-semibold'>Save Time</h2>
                            <p className='text-[15px]'>We do all the hard work for you to save your precious time.</p>
                        </div>
                    </motion.li>
                    <motion.li variants={listvaraint} className='flex items-start gap-3 text-[#DAD9EF]'>
                        <IoPersonCircleOutline className=' text-7xl relative bottom-4 w-[10%]' />
                        <div className=' flex flex-col gap-3 w-[90%] '>
                            <h2 className=' text-[#5A51DF] text-[20px] font-semibold'>Investment Plan
                            </h2>
                            <p className='text-[15px]'>Invest monthly through an SIP or whenever you have the money in best performing funds across the industry.</p>
                        </div>
                    </motion.li>
                </motion.ul>
            </div>
            <div className=' formsection text-[#DAD9EF] mt-10 lg:mt-0 text-[13px] md:text-[14px] lg:w-[50%]'>
                <motion.h1
                 whileInView={{
                    y:0,
                    opacity:1
                }}
                initial={{
                    y:40,
                    opacity:0
                }}
                transition={{
                    type:"spring",
                    duration:1,
                    delay:0.7
                }}
                className=' text-[31px] sm:text-[35px] lg:text-[40px] font-semibold lg:text-left '>Get In Touch</motion.h1>
                <motion.form 
                 whileInView={{
                    y:0,
                    opacity:1
                }}
                initial={{
                    y:40,
                    opacity:0
                }}
                transition={{
                    type:"spring",
                    duration:1,
                    delay:0.8
                }}
                className=' flex flex-col gap-6 mt-6'>
                    <div className="fullname flex flex-col gap-3 relative">
                        <label htmlFor="Number" className=' text-[13px]'>Full Name</label>
                        <input type="text" id="name" name='name' placeholder='Full Name' className=' focus:outline-blue-900 text-sm outline-none bg-[#0B0C1C] py-[10px] px-[14px] border-blue-950 rounded border-[1px] border-solid' />
                        <IoMdPerson className=' text-xl absolute top-11 right-2' />
                    </div>
                    <div className="phonenumber flex flex-col gap-3 relative">
                        <label htmlFor="Number" className=' text-[13px]'>Phone Number</label>
                        <input type="number" id="Number" name="Number" placeholder='Phone Number' className='focus:outline-blue-900 text-sm outline-none bg-[#0B0C1C] py-[10px] px-[14px] border-blue-950 rounded border-[1px] border-solid' />
                        <FaPhoneAlt className='text-xl absolute top-11 right-2' />
                    </div>
                    <div className="email flex flex-col gap-3 relative">
                        <label htmlFor="email" className='text-[13px] '>Email</label>
                        <input type="email" id="email" name="email" placeholder='Email' className='focus:outline-blue-900 text-sm outline-none bg-[#0B0C1C] py-[10px] px-[14px] border-blue-950 rounded border-[1px] border-solid' />
                        <MdEmail className='text-xl absolute top-11 right-2' />
                    </div>
                    <div className="message flex flex-col gap-3 relative">
                        <label htmlFor="message" className='text-[13px] '>Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Type Your Message..." className='focus:outline-blue-900 text-sm outline-none bg-[#0B0C1C] py-[10px] px-[14px] border-blue-950 rounded border-[1px] border-solid'></textarea>
                    </div>
                    <button style={{ transition: "0.5s" }} type='submit' className=' py-[10px] px-[18px] text-base rounded bg-[#332D8E] hover:bg-[#231e69]  border-[1px] border-solid border-blue-500'>Submit</button>
                </motion.form>
            </div>
        </div>
        </div>
        
    )
}

export default Niveshonline