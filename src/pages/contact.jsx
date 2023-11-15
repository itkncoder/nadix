import Wrapper from "../layout/wrapper"
import main from "../assets/main.png"
import logo from "../assets/logo.jpg"
import about from "../assets/about.png"
import flights from "../assets/flights.png"
import hotels from "../assets/hotels.png"
import contactus from "../assets/contact.svg"
import testiminionals from "../assets/testiminionals.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Link } from "react-router-dom"

const Contact = () => {
    return (
        <div className="bg-[#fff] text-[#051721] min-h-screen">
            <Wrapper>
                <div className="py-[30px] relative">
                    <header className="flex justify-between items-center">
                        <div>
                            <Link to={"/"}>
                                <img src={logo} alt="logo" className="object-cover w-[320px] h-[100px]" />
                            </Link>
                        </div>
                        <nav className="text-[#000] karla font-[400] flex items-center gap-[40px]">
                            <Link className="hover:font-[550] transition-all" to="/">Home</Link>
                            <Link className="hover:font-[550] transition-all" to="/flights">Flights</Link>
                            <Link className="hover:font-[550] transition-all" to="/hotels">Hotels</Link>
                            <Link className="hover:font-[550] transition-all" to="/discover">Discover</Link>
                            <Link className="hover:font-[550] transition-all" to="/about">About Us</Link>
                            <Link className="hover:font-[550] transition-all" to="/contact">Contact</Link>
                        </nav>
                        <div className="karla font-[550] flex items-center gap-[25px]">
                            <div className="flex justify-start gap-[12px]">
                                <a href="/">
                                    <img src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph.png" alt="youtube" className="p-[5px] rounded-lg bg-[#121212] w-[30px] hover:scale-105 transition-all" />
                                </a>
                                <a href="/">
                                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/telegram-white-icon.png" alt="telegram" className="p-[5px] rounded-lg bg-[#121212] w-[30px] hover:scale-105 transition-all" />
                                </a>
                            </div>
                            <a className="text-[#000] hover:underline" href="/">+998 90 000 00 00</a>
                        </div>
                    </header>
                    <div className="mt-[80px] flex justify-start ml-[80px] gap-[75px] items-center">
                        <div>
                            <h1 className="font-bold text-[32px]">Contact Us</h1>
                            <p className="karla text-[18px]">We are here for you! How can we help?</p>

                            <div className="mt-[20px] flex flex-col gap-[10px]">
                                <input type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xs" />
                                <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
                                <textarea name="" className="border-2 rounded-lg p-[15px] w-fit" placeholder="Go ahead, we are listening.." id="" cols="40" rows="5"></textarea>

                                <p className="hover:text-[#276968] hover:bg-[#fff] cursor-pointer w-fit text-[#fff] bg-[#276968] transition-all py-[14px] px-[38px] border border-[#276968] rounded-[4px]">Submit</p>
                            </div>
                        </div>
                        <div>
                            <img src={contactus} alt="contact" className="w-[380px]" />
                        </div>
                    </div>
                </div>
            </Wrapper>
            <Footer/>
        </div>
    )
}

export default Contact