import Wrapper from "../layout/wrapper"
import main from "../assets/main.png"
import logo from "../assets/logo.jpg"
import about from "../assets/about.png"
import flights from "../assets/flights.png"
import hotels from "../assets/hotels.png"
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

const Hotels = () => {
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
                    <div className="mt-[50px]">
                        <div className="relative">
                            <img src={hotels} alt="flights" className="w-full object-cover h-[500px] rounded-[25px] backdrop-brightness-50" />
                            <div className="absolute left-[75px] top-[210px]">
                                <h1 className="font-bold text-[38px] text-[#fff] max-w-[750px]">Create your travel wish list and leave the rest for us.</h1>
                                <h1 className="-mt-1 karla text-[20px] text-[#fff]">Special offers to suit your plan.</h1>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-[80px]">
                            <div>
                                <p className="text-[#276968] karla font-bold">Destinations</p>
                                <h1 className="font-bold text-[32px] text-[#051721] mt-[3px]">Discover your love</h1>
                            </div>
                        </div>
                        <div className="mt-[50px] flex flex-wrap gap-[25px]">

                            <div className="relative w-fit">
                                <img src="https://www.theknot.com/tk-media/images/9a506749-95e9-47cf-857e-5374f2205b93~rs_768.h" alt="pic" className="w-[310px] h-[420px] hover:scale-105 transition-all object-cover rounded-[15px]" />
                                <div className="absolute w-[280px] left-[20px] bottom-[25px]">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h1 className="text-[#fff] font-bold text-[30px]">Paris</h1>
                                            <p className="text-[#fff] karla text-[18px] mt-[8px]"><i class="mr-[8px] fa-solid fa-location-dot text-[22px] text-[#fff]"></i>France</p>
                                        </div>
                                        <p className="text-[#fff] font-bold text-[32px]">$ 600</p>
                                    </div>
                                    <a className="text-[#276968] w-full block text-center px-[25px] py-[12px] mt-[15px] rounded-[4px] bg-[#fff] transition-all hover:rounded-[10px]" href="/">Book flight</a>
                                </div>
                            </div>

                            <div className="relative w-fit">
                                <img src="https://www.theknot.com/tk-media/images/9a506749-95e9-47cf-857e-5374f2205b93~rs_768.h" alt="pic" className="w-[310px] h-[420px] hover:scale-105 transition-all object-cover rounded-[15px]" />
                                <div className="absolute w-[280px] left-[20px] bottom-[25px]">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h1 className="text-[#fff] font-bold text-[30px]">Paris</h1>
                                            <p className="text-[#fff] karla text-[18px] mt-[8px]"><i class="mr-[8px] fa-solid fa-location-dot text-[22px] text-[#fff]"></i>France</p>
                                        </div>
                                        <p className="text-[#fff] font-bold text-[32px]">$ 600</p>
                                    </div>
                                    <a className="text-[#276968] w-full block text-center px-[25px] py-[12px] mt-[15px] rounded-[4px] bg-[#fff] transition-all hover:rounded-[10px]" href="/">Book flight</a>
                                </div>
                            </div>

                            <div className="relative w-fit">
                                <img src="https://www.theknot.com/tk-media/images/9a506749-95e9-47cf-857e-5374f2205b93~rs_768.h" alt="pic" className="w-[310px] h-[420px] hover:scale-105 transition-all object-cover rounded-[15px]" />
                                <div className="absolute w-[280px] left-[20px] bottom-[25px]">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h1 className="text-[#fff] font-bold text-[30px]">Paris</h1>
                                            <p className="text-[#fff] karla text-[18px] mt-[8px]"><i class="mr-[8px] fa-solid fa-location-dot text-[22px] text-[#fff]"></i>France</p>
                                        </div>
                                        <p className="text-[#fff] font-bold text-[32px]">$ 600</p>
                                    </div>
                                    <a className="text-[#276968] w-full block text-center px-[25px] py-[12px] mt-[15px] rounded-[4px] bg-[#fff] transition-all hover:rounded-[10px]" href="/">Book flight</a>
                                </div>
                            </div>

                            <div className="relative w-fit">
                                <img src="https://www.theknot.com/tk-media/images/9a506749-95e9-47cf-857e-5374f2205b93~rs_768.h" alt="pic" className="w-[310px] h-[420px] hover:scale-105 transition-all object-cover rounded-[15px]" />
                                <div className="absolute w-[280px] left-[20px] bottom-[25px]">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h1 className="text-[#fff] font-bold text-[30px]">Paris</h1>
                                            <p className="text-[#fff] karla text-[18px] mt-[8px]"><i class="mr-[8px] fa-solid fa-location-dot text-[22px] text-[#fff]"></i>France</p>
                                        </div>
                                        <p className="text-[#fff] font-bold text-[32px]">$ 600</p>
                                    </div>
                                    <a className="text-[#276968] w-full block text-center px-[25px] py-[12px] mt-[15px] rounded-[4px] bg-[#fff] transition-all hover:rounded-[10px]" href="/">Book flight</a>
                                </div>
                            </div>

                            <div className="relative w-fit">
                                <img src="https://www.theknot.com/tk-media/images/9a506749-95e9-47cf-857e-5374f2205b93~rs_768.h" alt="pic" className="w-[310px] h-[420px] hover:scale-105 transition-all object-cover rounded-[15px]" />
                                <div className="absolute w-[280px] left-[20px] bottom-[25px]">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h1 className="text-[#fff] font-bold text-[30px]">Paris</h1>
                                            <p className="text-[#fff] karla text-[18px] mt-[8px]"><i class="mr-[8px] fa-solid fa-location-dot text-[22px] text-[#fff]"></i>France</p>
                                        </div>
                                        <p className="text-[#fff] font-bold text-[32px]">$ 600</p>
                                    </div>
                                    <a className="text-[#276968] w-full block text-center px-[25px] py-[12px] mt-[15px] rounded-[4px] bg-[#fff] transition-all hover:rounded-[10px]" href="/">Book flight</a>
                                </div>
                            </div>

                            <div className="relative w-fit">
                                <img src="https://www.theknot.com/tk-media/images/9a506749-95e9-47cf-857e-5374f2205b93~rs_768.h" alt="pic" className="w-[310px] h-[420px] hover:scale-105 transition-all object-cover rounded-[15px]" />
                                <div className="absolute w-[280px] left-[20px] bottom-[25px]">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h1 className="text-[#fff] font-bold text-[30px]">Paris</h1>
                                            <p className="text-[#fff] karla text-[18px] mt-[8px]"><i class="mr-[8px] fa-solid fa-location-dot text-[22px] text-[#fff]"></i>France</p>
                                        </div>
                                        <p className="text-[#fff] font-bold text-[32px]">$ 600</p>
                                    </div>
                                    <a className="text-[#276968] w-full block text-center px-[25px] py-[12px] mt-[15px] rounded-[4px] bg-[#fff] transition-all hover:rounded-[10px]" href="/">Book flight</a>
                                </div>
                            </div>

                            <div className="relative w-fit">
                                <img src="https://www.theknot.com/tk-media/images/9a506749-95e9-47cf-857e-5374f2205b93~rs_768.h" alt="pic" className="w-[310px] h-[420px] hover:scale-105 transition-all object-cover rounded-[15px]" />
                                <div className="absolute w-[280px] left-[20px] bottom-[25px]">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h1 className="text-[#fff] font-bold text-[30px]">Paris</h1>
                                            <p className="text-[#fff] karla text-[18px] mt-[8px]"><i class="mr-[8px] fa-solid fa-location-dot text-[22px] text-[#fff]"></i>France</p>
                                        </div>
                                        <p className="text-[#fff] font-bold text-[32px]">$ 600</p>
                                    </div>
                                    <a className="text-[#276968] w-full block text-center px-[25px] py-[12px] mt-[15px] rounded-[4px] bg-[#fff] transition-all hover:rounded-[10px]" href="/">Book flight</a>
                                </div>
                            </div>

                            <div className="relative w-fit">
                                <img src="https://www.theknot.com/tk-media/images/9a506749-95e9-47cf-857e-5374f2205b93~rs_768.h" alt="pic" className="w-[310px] h-[420px] hover:scale-105 transition-all object-cover rounded-[15px]" />
                                <div className="absolute w-[280px] left-[20px] bottom-[25px]">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h1 className="text-[#fff] font-bold text-[30px]">Paris</h1>
                                            <p className="text-[#fff] karla text-[18px] mt-[8px]"><i class="mr-[8px] fa-solid fa-location-dot text-[22px] text-[#fff]"></i>France</p>
                                        </div>
                                        <p className="text-[#fff] font-bold text-[32px]">$ 600</p>
                                    </div>
                                    <a className="text-[#276968] w-full block text-center px-[25px] py-[12px] mt-[15px] rounded-[4px] bg-[#fff] transition-all hover:rounded-[10px]" href="/">Book flight</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Wrapper>
            <Footer/>
        </div>
    )
}

export default Hotels