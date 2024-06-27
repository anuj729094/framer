import React from 'react'
import {motion} from 'framer-motion'

const About = () => {
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
                delay:0.7
            }
        }
    }
    const listvaraint = {
        hidden: {
            y: 30,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
        }
    }
    return (
        <div className=' xl:flex xl:justify-center'>
            <div className=' xl:w-[80rem] px-3 flex flex-col items-center sm:flex-row lg:justify-between gap-10 lg:gap-0 my-20'>
            <motion.div
             whileInView={{
                y:0,
                opacity:1
             }}
             initial={{
                y:30,
                opacity:0
             }}
             transition={{
                type:"spring",
                duration:0.7,
                delay:0.5
             }}
            className="image w-[15rem] sm:w-[50%] lg:w-[25rem]">
                <img src="https://assets-global.website-files.com/65a25f8bda1fc7eaa2ae2469/65a25f8bda1fc7eaa2ae24a5_Feature%201.png" alt="" />
            </motion.div>
            <motion.div variants={boxvariant} whileInView="visible" initial="hidden" className="aboutus text-[#D8D9EF] text-[16px] md:text-[18px] sm:w-[50%]">
                <motion.h5 
                 variants={listvaraint} transition={{
                    duration:1
                 }}
                className=' text-[#9D9EC7]'>ABOUT OUR COMPANY</motion.h5>
                <motion.h2 variants={listvaraint} transition={{
                    duration:1
                }}
                className=' text-[31px] md:text-[35px] lg:text-[39px] font-semibold mt-2'>Leading Mutual Fund Distribution</motion.h2>
                <motion.p  variants={listvaraint} transition={{
                    duration:1
                }}
                className=' text-[#9D9EC7] my-5'>Milestone Global Moneymart (P) Ltd established in March 2006, earlier with the name of Milestone Portfolio Consultants (P) Ltd, proudly offers a comprehensive suite of saving, investment and insurance products across asset classes, which provide income and wealth creation opportunities to our large retail customer base of 5.5K live accounts. Our strengths lie in delivering simple and accessible investment products for the average household. Client’s satisfaction was, is, and always will be the driving force to give you the best services we got.</motion.p>
                 <motion.button variants={listvaraint}  style={{ transition: "0.5s" }} className=' bg-[#332D8E] hover:bg-[#231e69] px-[18px] py-2  rounded border-[1px] border-solid border-blue-500'>Read More</motion.button>
            </motion.div>
        </div>
        </div>
        
    )
}

export default About