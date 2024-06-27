import React, { useEffect, useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion'
import { MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [hide, setHide] = useState(false)
    const [open, setOpen] = useState(null)
    useEffect(() => {
        window.innerWidth < 1024 ? setHide(false) : setHide(true)
    }, [])
    const boxvariants = {
        hidden: {
            y: "-10vw",
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.8,
                when: "beforeChildren",
                staggerChildren: 0.2,
                ease: "linear"
            },
        },
        exit: {
            x: "-100vw",
            opacity: 0,
        }
    }
    const listvariant = {
        hidden: {
            x: "-10vw",
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        }
    }
    document.addEventListener("click", () => setOpen(null))
    return (
        <nav className=' xl:flex xl:justify-center sticky top-0 z-50'>
            <div className=' xl:w-[80rem] relative px-3 py-4 flex justify-between items-start lg:items-center  bg-[#080915] '>
                <div className="logo text-3xl text-[#DAD9EF]">
                    mNivesh
                </div>
                <AnimatePresence>
                    {hide && <div className=' px-3 lg:px-0  fixed  left-0  top-[5rem]  z-30 lg:static  w-full lg:w-auto'>
                        <motion.ul
                            variants={window.innerWidth < 1024 ? boxvariants : {}} animate="visible" initial="hidden" exit="exit"
                            className="pagessectionmenu  text-[18px]  lg:text-[15px] xl:text-[18px] gap-7 lg:gap-5 text-[#d8d9ef] flex flex-col items-start lg:flex-row bg-[#0B0C1C] lg:bg-transparent rounded-lg lg:rounded-none py-5 lg:py-0 pl-4 lg:pl-0">
                            <Link to="/"><motion.li variants={window.innerWidth < 1024 ? listvariant : {}}>Home</motion.li></Link>
                            <motion.li className=' relative flex flex-col  ' variants={window.innerWidth < 1024 ? listvariant : {}}>
                                <motion.div
                                    onHoverStart={() => setOpen(1)}
                                    className=' flex  items-center gap-1'>Mutual Funds<IoIosArrowDown style={open === 1 ? { rotate: "180deg", transition: "0.5s" } : { rotate: "0deg", transition: "0.5s" }} /></motion.div>
                                <AnimatePresence>
                                    {open === 1 && <motion.ul
                                        initial={{
                                            y: "-10vw",
                                            scale: 0,
                                            opacity: 0
                                        }}
                                        animate={{
                                            y: 0,
                                            scale: 1,
                                            opacity: 1
                                        }}
                                        transition={{
                                            type: "spring",
                                            duration: 0.8
                                        }}
                                        exit={{
                                            y: "-10vw",
                                            scale: 0,
                                            opacity: 0
                                        }}
                                        className='pop lg:absolute mt-3 lg:mt-0 top-10 left-6 flex flex-col items-start gap-3 bg-[#0B0C1C] border-[1px] border-solid border-blue-950 p-[24px] rounded-2xl text-[18px]'>
                                       <Link to='/fund/equity-mutual-fund'><li>Equity Mutual Funds</li></Link>
                                       <Link to='/fund/hybrid-mutual-fund'><li>Hybrid Mutual Funds</li></Link>
                                       <Link to='/latest-nav'><li>Latest NAV</li></Link>
                                       <Link to='/sip-calculator'><li>Calculators</li></Link>
                                       <Link to='/fund/debt-mutual-fund'><li>Debt Mutual Funds</li></Link>
                                       <Link to='/fund/systematic-mutual-fund'><li>Systematic Funds</li></Link>
                                       <Link to='/nfo'><li>NFO</li></Link>
                                       <Link to='/mf-performance'><li>MF Performance</li></Link>
                                    </motion.ul>}
                                </AnimatePresence>

                            </motion.li>
                            <motion.li className=' relative flex flex-col  ' variants={window.innerWidth < 1024 ? listvariant : {}}>
                                <motion.div
                                    onHoverStart={() => setOpen(2)}
                                    className=' flex  items-center gap-1 ' >Insurance<IoIosArrowDown style={open === 2 ? { rotate: "180deg", transition: "0.5s" } : { rotate: "0deg", transition: "0.5s" }} /></motion.div>
                                <AnimatePresence>
                                    {open === 2 && <motion.ul
                                        initial={{
                                            y: "-10vw",
                                            scale: 0,
                                            opacity: 0
                                        }}
                                        animate={{
                                            y: 0,
                                            scale: 1,
                                            opacity: 1
                                        }}
                                        transition={{
                                            type: "spring",
                                            duration: 0.8
                                        }}
                                        exit={{
                                            y: "-10vw",
                                            scale: 0,
                                            opacity: 0
                                        }}
                                        className='pop lg:absolute mt-3 lg:mt-0 top-10 left-6 flex flex-col items-start gap-3 bg-[#0B0C1C] border-[1px] border-solid border-blue-950 p-[24px] rounded-2xl text-[18px]'>
                                        <li>Health Insurance</li>
                                        <li>Corporate Insurance</li>
                                        <li>Life Insurance</li>
                                        <li>Calculators</li>
                                        <li>Motor Insurance</li>
                                        <li>Travel Insurance</li>
                                    </motion.ul>}
                                </AnimatePresence>

                            </motion.li>
                            <motion.li className=' relative flex flex-col  ' variants={window.innerWidth < 1024 ? listvariant : {}}>
                                <motion.div
                                    onHoverStart={() => setOpen(3)}
                                    className=' flex  items-center gap-1'>Stock market<IoIosArrowDown style={open === 3 ? { rotate: "180deg", transition: "0.5s" } : { rotate: "0deg", transition: "0.5s" }} /></motion.div>
                                <AnimatePresence>
                                    {open === 3 && <motion.ul
                                        initial={{
                                            y: "-10vw",
                                            scale: 0,
                                            opacity: 0
                                        }}
                                        animate={{
                                            y: 0,
                                            scale: 1,
                                            opacity: 1
                                        }}
                                        transition={{
                                            type: "spring",
                                            duration: 0.8
                                        }}
                                        exit={{
                                            y: "-10vw",
                                            scale: 0,
                                            opacity: 0
                                        }}
                                        className='pop lg:absolute mt-3 lg:mt-0 top-10 left-6 flex flex-col items-start gap-3 bg-[#0B0C1C] border-[1px] border-solid border-blue-950 p-[24px] rounded-2xl text-[18px]'>
                                        <li>Domestic EQ</li>
                                        <li>Brokerage Calc</li>
                                        <li>Unlisted Securities</li>
                                        <li>International EQ</li>
                                        <li>Debt Mutual Funds</li>
                                        <li>IPO</li>
                                    </motion.ul>}
                                </AnimatePresence>

                            </motion.li>
                            <motion.li className=' relative flex flex-col  ' variants={window.innerWidth < 1024 ? listvariant : {}}>
                                <motion.div
                                    onHoverStart={() => setOpen(4)}
                                    className=' flex  items-center gap-1'>Fixed Income<IoIosArrowDown style={open === 4 ? { rotate: "180deg", transition: "0.5s" } : { rotate: "0deg", transition: "0.5s" }} /></motion.div>
                                <AnimatePresence>
                                    {open === 4 && <motion.ul
                                        initial={{
                                            y: "-10vw",
                                            scale: 0,
                                            opacity: 0
                                        }}
                                        animate={{
                                            y: 0,
                                            scale: 1,
                                            opacity: 1
                                        }}
                                        transition={{
                                            type: "spring",
                                            duration: 0.8
                                        }}
                                        exit={{
                                            y: "-10vw",
                                            scale: 0,
                                            opacity: 0
                                        }}
                                        className='pop lg:absolute mt-3 lg:mt-0 top-10 left-6 flex flex-col items-start gap-3 bg-[#0B0C1C] border-[1px] border-solid border-blue-950 p-[24px] rounded-2xl text-[18px]'>
                                        <li>Fixed Deposit</li>
                                        <li>Bonds</li>
                                        <li>Capital Gain</li>
                                    </motion.ul>}
                                </AnimatePresence>

                            </motion.li>
                            <motion.li variants={window.innerWidth < 1024 ? listvariant : {}}>Our Blogs</motion.li>
                            <motion.li variants={window.innerWidth < 1024 ? listvariant : {}} className=''>
                                <ul className='flex lg:hidden gap-3'>
                                    <li>
                                        <Link to="/login">
                                            <button className=' bg-[#0F1024] px-[18px] py-2 rounded border-[1px] border-solid border-gray-500'>Login</button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sign">
                                            <button className=' bg-[#332D8E] px-[18px] py-2  rounded border-[1px] border-solid border-blue-500'>Sign up</button>
                                        </Link>
                                    </li>
                                </ul>
                            </motion.li>

                        </motion.ul>
                    </div>}
                </AnimatePresence>
                {hide ? <button className="hamburger lg:hidden" onClick={() => setHide(false)}>
                    <MdClose className=' text-[#d8d9ef] text-4xl' />
                </button> :
                    <button className="hamburger lg:hidden" onClick={() => setHide(true)}>
                        <IoMdMenu className=' text-[#d8d9ef] text-4xl' />
                    </button>}
                <div className="btns text-[#D8D9EF] text-[16px]   gap-4 items-center hidden lg:flex">
                    <Link to='/login'>
                        <button className=' bg-[#0F1024] px-[18px] py-2 rounded border-[1px] border-solid border-gray-500'>Login</button>
                    </Link>
                    <Link to='/sign'>
                        <button style={{ transition: "0.5s" }} className=' bg-[#332D8E] hover:bg-[#231e69] px-[18px] py-2  rounded border-[1px] border-solid border-blue-500'>Sign up</button>
                    </Link>
                </div>
            </div>
        </nav>

    )
}

export default Navbar