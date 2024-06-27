import React from 'react'
import phone from '../assets/phone.png'
import moon from '../assets/moon.png'
import {motion} from 'framer-motion'
const Hero = () => {
  
    const boxvariant = {
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                type:"spring",
                when:"beforeChildren",
                staggerChildren:0.4,
                // duration:0.2
            }
        }
    }
    const listvaraint = {
        hidden:{
            y:"10vw",
            opacity:0
        },
        visible:{
            y:0,
            opacity:1,
           
        }
    }
    return (
        <header className=' xl:flex xl:justify-center lg:mt-10'>
            <div className='lg:h-[100vh] xl:w-[80rem] px-3 flex flex-col lg:flex-row items-center lg:justify-start lg:gap-20 '>
                <motion.div  variants={boxvariant} animate="visible" initial="hidden"  className=' lg:w-[50%] text-center lg:text-start flex flex-col  items-center lg:items-start my-5 lg:my-0 sm:px-20 md:px-32 lg:px-0'>
                    <motion.h1 variants={listvaraint}   transition={{
                        duration:0.7
                    }} className=' text-[#D8D9EF] text-[39px] lg:text-[50px] font-semibold'>
                        Elevate Your financial future with <span className=' text-[#5A51DF]'>mNivesh</span>
                    </motion.h1>
                    <motion.p variants={listvaraint}   transition={{
                        duration:0.7
                    }} className=' text-[#9D9EC7] text-[16px] lg:text-[18px] my-2'>
                    Discover diverse investment options, robust savings accounts, and unmatched financial expertise for stable wealth growth.
                    </motion.p>
                    <motion.ul variants={listvaraint}  transition={{
                        duration:0.7
                    }}  className=' btns flex gap-4  my-4 text-[15px] lg:text-[16px]'>
                        <button className='bg-[#332D8E] px-[18px] text-[#DAD9EF] py-[13px]  rounded border-[1px] border-solid border-blue-500'>Get Mnivesh</button>
                        <button className='bg-[#0F1024] px-[18px] text-[#DAD9EF] py-[13px] rounded border-[1px] border-solid border-gray-500'>Open Account</button>
                    </motion.ul>
                </motion.div>
                <motion.div
                initial={{
                    opacity:0,
                    scale:0
                }}
                animate={{
                    opacity:1,
                    scale:1
                }}
                transition={{
                    type:"spring",
                    duration:1.6,
                    delay:0.8
                }}
                className="phoneimage lg:w-[30rem] lg:bottom-[13rem] relative mt-16  w-[20rem]">
                    <img src={moon} alt=""  className=' absolute z-10' />
                    <img src={phone} alt="" className=' absolute h-[28rem] lg:h-[43rem] z-20 top-[-4rem] left-[3rem] lg:left-[4.5rem] lg:top-[-8rem]' />
                </motion.div>
            </div>
        </header>

    )
}

export default Hero 