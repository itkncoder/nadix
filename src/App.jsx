import Wrapper from "./layout/wrapper"
import main from "./assets/main.png"
import logo from "./assets/logo.png"
import about from "./assets/about.png"
import flights from "./assets/flights.png"
import hotels from "./assets/hotels.png"
import testiminionals from "./assets/testiminionals.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const App = () => {
    return (
        <div className="bg-[#fff] text-[#051721] min-h-screen">
            <Wrapper>
                <div className="py-[30px] relative">
                    <img src={main} alt="main" className="rounded-[30px]" />
                    <div className="mt-[40px] w-full absolute top-0 left-0 px-[50px]">
                        <header className="flex justify-between items-center">
                            <div>
                                <img src={logo} alt="logo" className="object-cover h-[90px]" />
                            </div>
                            <nav className="text-[#fff] karla font-[400] flex items-center gap-[40px]">
                                <a className="hover:font-[550] transition-all" href="/">Home</a>
                                <a className="hover:font-[550] transition-all" href="/">Flights</a>
                                <a className="hover:font-[550] transition-all" href="/">Hotels</a>
                                <a className="hover:font-[550] transition-all" href="/">Discover</a>
                                <a className="hover:font-[550] transition-all" href="/">About Us</a>
                                <a className="hover:font-[550] transition-all" href="/">Contact</a>
                            </nav>
                            <div className="karla font-[550] flex items-center gap-[32px]">
                                <a className="text-[#fff] hover:underline" href="/">Login</a>
                                <a className="text-[#276968] px-[25px] py-[14px] rounded-[4px] bg-[#fff] transition-all hover:rounded-[10px]" href="/">Sing up</a>
                            </div>
                        </header>
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
                            <a className="text-[#276968] hover:text-[#fff] hover:bg-[#276968] transition-all py-[14px] px-[28px] border border-[#276968] rounded-[4px]" href="/">See all</a>
                        </div>
                        <div className="mt-[50px]">
                            <Swiper
                                    spaceBetween={35}
                                    slidesPerView={2.75}
                                >
                                <SwiperSlide>
                                    <div className="px-[20px] py-[18px] shadow-xl w-fit rounded-[30px] bg-[#FAFBFC]">
                                        <img src="https://www.travelandleisure.com/thmb/RQ3JmT8V2y2fhwr7NY0cgUumcCE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/phuket-thailand-karst-formation-phuket0327-92bd3ce9266148dba74cba5e36c711e2.jpg" alt="pic" className="w-[450px] h-[320px] object-cover rounded-[15px]" />
                                        <div className="mt-[20px]">
                                            <h1 className="text-[#276968] font-bold text-[30px]">Phuket</h1>
                                            <p className="text-[#69747A] karla text-[18px] mt-[8px]"><i class="mr-[8px] fa-solid fa-location-dot text-[22px] text-[#69747A]"></i>Thailand</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="px-[20px] py-[18px] shadow-xl w-fit rounded-[30px] bg-[#FAFBFC]">
                                        <img src="https://a.cdn-hotels.com/gdcs/production18/d1838/041ae6b1-0a88-4c22-a648-53a22dd4a006.jpg?impolicy=fcrop&w=800&h=533&q=medium" alt="pic" className="w-[450px] h-[320px] object-cover rounded-[15px]" />
                                        <div className="mt-[20px]">
                                            <h1 className="text-[#276968] font-bold text-[30px]">Santorini</h1>
                                            <p className="text-[#69747A] karla text-[18px] mt-[8px]"><i class="mr-[8px] fa-solid fa-location-dot text-[22px] text-[#69747A]"></i>Greece</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="px-[20px] py-[18px] shadow-xl w-fit rounded-[30px] bg-[#FAFBFC]">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg" alt="pic" className="w-[450px] h-[320px] object-cover rounded-[15px]" />
                                        <div className="mt-[20px]">
                                            <h1 className="text-[#276968] font-bold text-[30px]">Paris</h1>
                                            <p className="text-[#69747A] karla text-[18px] mt-[8px]"><i class="mr-[8px] fa-solid fa-location-dot text-[22px] text-[#69747A]"></i>France</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="px-[20px] py-[18px] shadow-xl w-fit rounded-[30px] bg-[#FAFBFC]">
                                        <img src="https://picsum.photos/500/350" alt="pic" className="w-[450px] h-[320px] object-cover rounded-[15px]" />
                                        <div className="mt-[20px]">
                                            <h1 className="text-[#276968] font-bold text-[30px]">Phuket</h1>
                                            <p className="text-[#69747A] karla text-[18px] mt-[8px]"><i class="mr-[8px] fa-solid fa-location-dot text-[22px] text-[#69747A]"></i>Thailand</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="mt-[60px] flex gap-[40px] justify-between">
                        <div className="relative">
                            <img src={flights} alt="flights" />
                            <div className="absolute bottom-[35px] left-0 w-full">
                                <div className="text-[#fff] flex flex-col items-center gap-[15px] justify-center">
                                    <h1 className="text-[40px] font-[600]">Flights</h1>
                                    <p className="karla max-w-[390px] text-center">Search flights & places and book for your amazing trips.</p>
                                    <a className="text-[#276968] px-[25px] py-[14px] rounded-[4px] bg-[#fff] transition-all hover:rounded-[10px]" href="/"><i class="fa-solid fa-plane-departure mr-2"></i> Show flights</a>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img src={hotels} alt="flights" />
                            <div className="absolute bottom-[35px] left-0 w-full">
                                <div className="text-[#fff] flex flex-col items-center gap-[15px] justify-center">
                                    <h1 className="text-[40px] font-[600]">Hotels</h1>
                                    <p className="karla max-w-[390px] text-center">Search our best hotels & places and book for your  amazing trips.</p>
                                    <a className="text-[#276968] px-[25px] py-[14px] rounded-[4px] bg-[#fff] transition-all hover:rounded-[10px]" href="/"><i class="fa-solid fa-plane-departure mr-2"></i> Show hotels</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[120px] relative text-[#fff]">
                        <img src={testiminionals} alt="bg" className="w-full h-full rounded-[32px]" />
                        <div className="absolute top-[110px] left-0 w-full">
                            <p className="karla text-center font-bold">Testimonials</p>
                            <h1 className="mt-[3px] text-center text-[32px] font-bold">What they say about us</h1>
                            <div>
                                <Swiper
                                        pagination={true} modules={[Pagination]}
                                        style={{
                                            "--swiper-pagination-color": "#fff",
                                            "--swiper-pagination-bullet-inactive-color": "#858585",
                                            "--swiper-pagination-bullet-inactive-opacity": "1",
                                            "--swiper-pagination-bullet-size": "16px",
                                            "--swiper-pagination-bullet-horizontal-gap": "6px"
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
                                            <p className="mt-[35px] karla max-w-[580px]">“A real sense of community, nurtured” Really appreciate the help and support from the staff during my trips. Very helpful and always available when needed. </p>
                                            <p className="text-[30px] karla font-bold mt-[20px]">Alice Smith</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="flex flex-col items-center justify-center ">
                                            <div className="rating mt-[50px] gap-[12px]">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked disabled />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                                            </div>
                                            <p className="mt-[35px] karla max-w-[580px]">Kayp qilib aylanib keldik, rahmat katta!</p>
                                            <p className="text-[30px] karla font-bold mt-[20px]">KNCoder</p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
            <footer className="bg-[#276968] mt-[120px] py-[95px]">
                <Wrapper>
                    <div className="flex justify-between items-start text-[#fff]">
                        <div>
                            <img src={logo} alt="logo" className="object-cover h-[90px]" />
                            <div className="w-full flex justify-center gap-[10px]">
                                <a href="/">
                                    <img src="https://www.edigitalagency.com.au/wp-content/uploads/facebook-icon-white-png.png" alt="facebook" className="w-[22px]" />
                                </a>
                                <a href="/">
                                    <img src="https://static-00.iconduck.com/assets.00/twitter-icon-2048x1691-4lpbyo0r.png" alt="twitter" className="w-[22px]" />
                                </a>
                                <a href="/">
                                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-white-icon.png" alt="youtube" className="w-[22px]" />
                                </a>
                                <a href="/">
                                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/telegram-white-icon.png" alt="telegram" className="w-[22px]" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <p className="text-[20px] font-[550]">Links</p>
                            <div className="mt-[8px] flex flex-col">
                                <a className="karla hover:underline" href="/">Flights</a>
                                <a className="karla hover:underline" href="/">Stays</a>
                                <a className="karla hover:underline" href="/">Discover</a>
                                <a className="karla hover:underline" href="/">About Us</a>
                                <a className="karla hover:underline" href="/">Contact</a>
                            </div>
                        </div>
                        <div>
                            <p className="text-[20px] font-[550]">Our Activities</p>
                            <div className="mt-[8px] flex flex-col">
                                <a className="karla hover:underline" href="/">Tour</a>
                                <a className="karla hover:underline" href="/">Kayaking</a>
                                <a className="karla hover:underline" href="/">Cruising & Sailing</a>
                                <a className="karla hover:underline" href="/">Multi-activities</a>
                            </div>
                        </div>
                        <div>
                            <p className="text-[20px] font-[550]">About Us</p>
                            <div className="mt-[8px] flex flex-col">
                                <a className="karla hover:underline" href="/">Our Story</a>
                                <a className="karla hover:underline" href="/">Work with us</a>
                            </div>
                        </div>
                        <div>
                            <p className="text-[20px] font-[550]">Contact</p>
                            <div className="mt-[8px] flex flex-col">
                                <a className="karla hover:underline" href="/">Address: Pe.Holandia No.205A</a>
                                <a className="karla hover:underline" href="/">Millennium City,  PH17</a>
                                <a className="karla hover:underline" href="/">Phone: 023 456 7890</a>
                                <a className="karla hover:underline" href="/">Email: phnes.travels@gmail.com</a>
                                <a className="karla hover:underline" href="/">Maps: Millennium City, Accra</a>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </footer>
        </div>
    )
}

export default App