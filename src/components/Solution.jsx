import React, { useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion'
const Solution = () => {
    // const [selectedId, setSelectedId] = useState(null)
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
                duration: 0.4
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
            <div className=' xl:w-[80rem] px-3 mt-[27rem] mb-8 lg:mt-[10rem] text-[#DAD9EF] flex flex-col items-center'>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 40
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        type: "spring",
                        duration: 1.2
                    }}
                    className=' text-[31px] sm:text-[35px] lg:text-[40px] font-semibold text-center sm:px-20 md:px-0 md:w-[30rem]'>
                    Best Solutions <span className=' text-[#5A51DF]'>For Your Personal Finance</span>
                </motion.h1>
                <motion.ul variants={boxvariant} whileInView="visible" initial="hidden" className='  grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 w-full gap-y-5 gap-x-7 mt-10 sm:mt-15 lg:mt-16'>
                    {
                        [1, 2, 3, 4, 5, 6].map((item) => <motion.li key={item} variants={listvaraint} 
                        whileHover={{
                            scale:1.07,
                            backgroundColor:"#0F1024",
                            cursor:"pointer"
                        }} 
                        className='finance  bg-[#0B0C1C66] py-[32px] px-[20px] lg:py-[40px] lg:px-[32px] rounded-2xl border-[1px] border-solid border-blue-950'>
                            <img src="https://niveshonline.com/public/front_assets/images/growing.png" alt="" className=' w-12 h-12 border-[1px] border-solid border-blue-950 rounded-full py-2 px-3' />
                            <h2 className=' text-[20px] sm:text-[23px] mt-5 mb-2'>SIP</h2>
                            <p className=' text-[16px] sm:text-[18px] text-[#9D9EC7] '>
                                SIPs are the best route to increase your wealth.
                            </p>
                            <button className=' bg-[#332D8E] rounded px-2 py-2 mt-5' >
                                <FaLongArrowAltRight className=' text-2xl' />
                            </button>
                        </motion.li>)
                    }
                </motion.ul>
            </div>
            {/* <AnimatePresence>
                {selectedId && (
                    <div className=' px-4 bg-[#0B0C1C66] text-[#DAD9EF] fixed z-50 top-0  w-full h-full flex flex-col items-center justify-center'>
                        <motion.div layoutId={selectedId} className='bg-[#0F1024] border-[1px] border-solid border-blue-950  rounded-2xl py-[13px] px-[13px]'>
                            <img src="https://niveshonline.com/public/front_assets/images/growing.png" alt="" className=' w-12 h-12 border-[1px] border-solid border-blue-950 rounded-full py-2 px-3' />
                            <h2 className=' text-[20px] sm:text-[23px] mt-5 mb-2'>SIP</h2>
                            <p className=' text-[16px] sm:text-[18px] text-[#9D9EC7] '>
                                SIPs are the best route to increase your wealth.
                            </p>
                            <div className=' flex gap-2 mt-4'>
                            <button style={{ transition: "0.5s" }} className=' bg-[#332D8E] hover:bg-[#231e69] px-[18px] py-2  rounded border-[1px] border-solid border-blue-500'>More</button>
                            <button onClick={()=>setSelectedId(null)} className=' bg-[#0F1024] px-[18px] py-2 rounded border-[1px] border-solid border-gray-500'>Close</button>
                            </div>
                            
                        </motion.div>
                    </div>
                )}
            </AnimatePresence> */}

        </div>

    )
}

export default Solution