import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { PiTimerDuotone } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Login = () => {
    const [togglepassword, setTogglepassword] = useState("password")
    return (
        <div className=' sm:flex sm:justify-center'>
            <div className=' sm:w-[30rem] text-[#DAD9EF] px-3 text-[20px] md:text-[23px] mt-10'>
                <h1 className=' '>Login</h1>
                <div className=' formsection mt-5 text-[13px] md:text-[14px]'>
                    <form className=' flex flex-col gap-6'>
                        <div className="email flex flex-col gap-3 relative">
                            <label htmlFor="email" className=' '>Email</label>
                            <input type="text" id="email" name='email' placeholder='Email' className=' focus:outline-blue-900 text-sm outline-none bg-[#0B0C1C] py-[10px] px-[14px] border-blue-950 rounded border-[1px] border-solid' />
                            <MdEmail className=' absolute top-11 right-2' />
                        </div>
                        <div className="Password flex flex-col gap-3 relative">
                            <label htmlFor="password" className=' text-[13px]'>Password</label>
                            <input type={togglepassword} id="password" name="password" placeholder='Password' className='focus:outline-blue-900 text-sm outline-none bg-[#0B0C1C] py-[10px] px-[14px] border-blue-950 rounded border-[1px] border-solid' />
                            {
                                togglepassword === "password" ? <FaEye className='absolute top-11 right-2' onClick={() => setTogglepassword("text")} /> :
                                    <FaEyeSlash className='absolute top-11 right-2' onClick={() => setTogglepassword("password")} />
                            }

                        </div>
                        <div className="rememberme flex flex-wrap justify-between text-[16px] md:text-[18px] items-center gap-2">
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" name="remember" id="remember" className=' rounded focus:bg-red-400 w-4 h-4 text-blue-800 ' />
                                <label htmlFor="remember" className=' '>Remember Me</label>
                            </div>
                            <div className="foregetpassword">
                                <Link className=' text-[#5A51DF]'>
                                    Forget Password?
                                </Link>
                            </div>
                        </div>

                        <button style={{transition:"0.5s"}} type='submit' className=' py-[10px] px-[18px] text-base rounded bg-[#332D8E] hover:bg-[#231e69]  border-[1px] border-solid border-blue-500'>Login</button>
                    </form>
                </div>
                <div className="otheroptionline flex items-center text-sm md:text-lg my-5 md:my-7">
                    <div className=' bg-[#d8d9ef] h-[1px] w-full'></div>
                    <p className=' px-3 '>or</p>
                    <div className=' bg-[#d8d9ef] h-[1px] w-full'></div>
                </div>
                <div className=" my-7 loginoptions text-center text-[15px] md:text-[16px]  flex flex-col gap-6">
                    <button className='w-full relative  bg-[#0f1024]  rounded border-blue-950 border-[1px] border-solid  py-[13px] px-[18px]'>
                        <FcGoogle className=' text-2xl absolute top-3' />
                        <p className=' text-center'>Continue with Google</p>
                    </button>
                    <button className='w-full relative  bg-[#0f1024] rounded border-blue-950 border-[1px] border-solid  py-[13px] px-[18px]'>
                        <PiTimerDuotone className=' text-2xl absolute top-3' />
                        <p className=' text-center'>Continue with OTP</p>
                    </button>
                </div>


                <div className="dontahveanaccount  my-5">
                    <p className=' text-[16px] md:text-[18px]'>Don't have account? <span className=' text-[#5A51DF]'>
                        <Link to='/sign'>
                            Sign up
                        </Link>
                    </span></p>
                </div>
            </div>
        </div>
    )
}

export default Login