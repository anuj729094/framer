import React from 'react'
import { motion } from 'framer-motion'
const Partners = () => {
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
                // duration: 0.5,
                // delay:0.2
            }
        }
    }
    const listvaraint = {
        hidden: {
            y: 40,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
        }
    }
    return (
        <div className=' xl:flex xl:justify-center '>
            <div className=' xl:w-[80rem] px-3 text-[#DAD9EF] lg:flex lg:flex-col  lg:items-center'>
                <motion.h1
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    initial={{
                        y: 40,
                        opacity: 0
                    }}
                    transition={{
                        type: 'spring',
                        duration: 1,
                        delay: 0.5
                    }}
                    className=' text-center text-[31px] md:text-[35px] lg:text-[39px] font-semibold'>Our <span className='text-[#5A51DF]'>Partners</span></motion.h1>
                <motion.ul
                    variants={boxvariant} whileInView="visible" initial="hidden"
                    className='partners flex gap-5 xl:gap-8 overflow-auto items-center mt-5 md:mt-7'>
                    <motion.li variants={listvaraint} transition={{
                        duration: 0.7
                    }} className=' min-w-[10rem]'>
                        <img src="https://niveshonline.com/public/front_assets/images/mahindra.png" alt="" />
                    </motion.li>
                    <motion.li variants={listvaraint} transition={{
                        duration: 0.7
                    }} className=' min-w-[10rem]'>
                        <img src="https://niveshonline.com/public/front_assets/images/mirae.jpg" alt="" />
                    </motion.li>
                    <motion.li variants={listvaraint} transition={{
                        duration: 0.7
                    }} className=' min-w-[10rem]'>
                        <img src="https://niveshonline.com/public/front_assets/images/motilal.jpg" alt="" />
                    </motion.li>
                    <motion.li variants={listvaraint} transition={{
                        duration: 0.7
                    }} className=' min-w-[10rem]'>
                        < img src="https://niveshonline.com/public/front_assets/images/nippon.jpg" alt="" />
                    </motion.li>
                    <motion.li variants={listvaraint} transition={{
                        duration: 0.7
                    }} className=' min-w-[10rem]'>
                        < img src="https://niveshonline.com/public/front_assets/images/pgim.jpg" alt="" />
                    </motion.li>
                </motion.ul>
            </div>
        </div>

    )
}

export default Partners