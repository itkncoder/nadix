import Wrapper from "../layout/wrapper"
import main from "../assets/main.png"
import logo from "../assets/logo.png"
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

const Home = () => {
    return (
        <div className="bg-[#fff] text-[#051721] min-h-screen">
            <Wrapper>
                <div className="py-[30px] relative">
                    <img src={main} alt="main" className="rounded-[30px]" />
                    <div className="mt-[40px] w-full absolute top-0 left-0 px-[50px]">
                        <Navbar/>
                        <div className="flex items-center w-full flex-col mt-[150px] text-[#FCFCFC]">
                            <h1 className="text-[45px] font-bold">Don’t call it a dream. Call it a plan</h1>
                            <p className="karla font-[400] text-[20px] max-w-[780px] text-center mt-[15px]">Travel the way you wish to go with Phnes Travels helping you discover, live and travel at your own pace.</p>
                        </div>
                    </div>
                    <div className="mt-[120px] flex justify-between items-center">
                        <img src={about} alt="about" className="max-w-[580px]" />
                        <div className="flex justify-start flex-col items-start w-[50%]">
                            <p className="text-[#276968] karla font-bold">About</p>
                            <h1 className="font-bold text-[32px] text-[#051721] mt-[3px]">Plan your perfect trip</h1>
                            <p className="text-[#37454D] font-[400] karla mt-[15px]">Are you looking for an adventurous travel, or just carrying your work alongside you while you travel and explore new places, then your perfect trip is one with us, Phnes travels help you search flights & places, book your most convenient hotels/places at your comfort while we help you discover the world. Welcome to a new dispensation.</p>
                            <div className="mt-[33px] flex items-start gap-[120px]">
                                <div className="flex flex-col items-start">
                                    <p className="text-[#276968] text-[28px] font-bold">150+</p>
                                    <p className="text-[#37454D] karla mt-[5px]">Flight Destinations</p>
                                </div>
                                <div className="flex flex-col items-start">
                                    <p className="text-[#276968] text-[28px] font-bold">250+</p>
                                    <p className="text-[#37454D] karla mt-[5px]">Hotels</p>
                                </div>
                            </div>
                            <div className="mt-[30px] flex items-start gap-[120px]">
                                <div className="flex flex-col items-start">
                                    <p className="text-[#276968] text-[28px] font-bold">80</p>
                                    <p className="text-[#37454D] karla mt-[5px]">Elite Transportation</p>
                                </div>
                                <div className="flex flex-col items-start">
                                    <p className="text-[#276968] text-[28px] font-bold">40+</p>
                                    <p className="text-[#37454D] karla mt-[5px]">We help to find your dream place</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[120px]">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-[#276968] karla font-bold">Top Destinations</p>
                                <h1 className="font-bold text-[32px] text-[#051721] mt-[3px]">Discover your love</h1>
                            </div>
                            <Link className="text-[#276968] hover:text-[#fff] hover:bg-[#276968] transition-all py-[14px] px-[28px] border border-[#276968] rounded-[4px]" to="/flights">See all</Link>
                        </div>
                        <div className="mt-[50px] flex justify-between items-center gap-[20px]">
                            <div className="px-[20px] py-[18px] shadow-xl w-fit rounded-[30px] bg-[#FAFBFC]">
                                <img src="https://www.letsphuket.com/wp-content/uploads/phuket1.jpg" alt="pic" className="w-[450px] h-[320px] object-cover rounded-[15px]" />
                                <div className="mt-[20px]">
                                    <h1 className="text-[#276968] font-bold text-[30px]">Phuket</h1>
                                    <p className="text-[#69747A] karla text-[18px] mt-[8px]"><i class="mr-[8px] fa-solid fa-location-dot text-[22px] text-[#69747A]"></i>Thailand</p>
                                </div>
                            </div>
                            <div className="px-[20px] py-[18px] shadow-xl w-fit rounded-[30px] bg-[#FAFBFC]">
                                <img src="https://a.cdn-hotels.com/gdcs/production18/d1838/041ae6b1-0a88-4c22-a648-53a22dd4a006.jpg?impolicy=fcrop&w=800&h=533&q=medium" alt="pic" className="w-[450px] h-[320px] object-cover rounded-[15px]" />
                                <div className="mt-[20px]">
                                    <h1 className="text-[#276968] font-bold text-[30px]">Santorini</h1>
                                    <p className="text-[#69747A] karla text-[18px] mt-[8px]"><i class="mr-[8px] fa-solid fa-location-dot text-[22px] text-[#69747A]"></i>Greece</p>
                                </div>
                            </div>
                            <div className="px-[20px] py-[18px] shadow-xl w-fit rounded-[30px] bg-[#FAFBFC]">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg" alt="pic" className="w-[450px] h-[320px] object-cover rounded-[15px]" />
                                <div className="mt-[20px]">
                                    <h1 className="text-[#276968] font-bold text-[30px]">Paris</h1>
                                    <p className="text-[#69747A] karla text-[18px] mt-[8px]"><i class="mr-[8px] fa-solid fa-location-dot text-[22px] text-[#69747A]"></i>France</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[60px] flex gap-[40px] justify-between">
                        <div className="relative">
                            <img src={flights} alt="flights" />
                            <div className="absolute bottom-[35px] left-0 w-full">
                                <div className="text-[#fff] flex flex-col items-center gap-[15px] justify-center">
                                    <h1 className="text-[40px] font-[600]">Flights</h1>
                                    <p className="karla max-w-[390px] text-center">Search flights & places and book for your amazing trips.</p>
                                    <Link className="text-[#276968] px-[25px] py-[14px] rounded-[4px] bg-[#fff] transition-all hover:rounded-[10px]" to="/flights"><i class="fa-solid fa-plane-departure mr-2"></i> Show flights</Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img src={hotels} alt="flights" />
                            <div className="absolute bottom-[35px] left-0 w-full">
                                <div className="text-[#fff] flex flex-col items-center gap-[15px] justify-center">
                                    <h1 className="text-[40px] font-[600]">Hotels</h1>
                                    <p className="karla max-w-[390px] text-center">Search our best hotels & places and book for your  amazing trips.</p>
                                    <Link className="text-[#276968] px-[25px] py-[14px] rounded-[4px] bg-[#fff] transition-all hover:rounded-[10px]" to="/hotels"><i class="fa-solid fa-plane-departure mr-2"></i> Show hotels</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[120px] relative text-[#fff]">
                        <img src={testiminionals} alt="bg" className="w-full h-full rounded-[32px]" />
                        <div className="absolute z-50 top-[110px] left-0 w-full">
                            <p className="karla text-center font-bold">Testimonials</p>
                            <h1 className="mt-[3px] text-center text-[32px] font-bold">What they say about us</h1>
                            <div className="px-[20px]">
                                <Swiper
                                    navigation={true}
                                    pagination={true} 
                                    modules={[Pagination, Navigation]}
                                    style={{
                                        "--swiper-pagination-color": "#fff",
                                        "--swiper-pagination-bullet-inactive-color": "#858585",
                                        "--swiper-pagination-bullet-inactive-opacity": "1",
                                        "--swiper-pagination-bullet-size": "16px",
                                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                                        "--swiper-navigation-color": "#fff"
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="flex flex-col items-center justify-center ">
                                            <div className="rating mt-[50px] gap-[12px]">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked disabled />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked disabled />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked disabled />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked disabled />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked disabled />
                                            </div>
                                            <p className="mt-[35px] karla max-w-[580px]">“A real sense of community, nurtured” Really appreciate the help and support from the staff during my trips. Very helpful and always available when needed.</p>
                                            <p className="text-[30px] karla font-bold mt-[20px]">Alice Smith</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="flex flex-col items-center justify-center ">
                                            <div className="rating mt-[50px] gap-[12px]">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked disabled />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked disabled />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked disabled />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked disabled />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked disabled />
                                            </div>
                                            <p className="mt-[35px] karla max-w-[580px]">“A real sense of community, nurtured” Really appreciate the help and support from the staff during my trips. Very helpful and always available when needed.</p>
                                            <p className="text-[30px] karla font-bold mt-[20px]">Aaron</p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
            <Footer/>
        </div>
    )
}

export default Home