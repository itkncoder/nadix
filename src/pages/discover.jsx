import Wrapper from "../layout/wrapper"
import main from "../assets/main.png"
import logo from "../assets/logo.jpg"
import about from "../assets/about.png"
import flights from "../assets/flights.png"
import hotels from "../assets/hotels.png"
import discover from "../assets/discover.png"
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

const Discover = () => {
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
                            <img src={discover} alt="flights" className="w-full object-cover h-[500px] rounded-[25px] backdrop-brightness-50" />
                            <div className="absolute left-[75px] top-[230px]">
                                <h1 className="font-bold text-[38px] text-[#fff] max-w-[750px]">Discover</h1>
                            </div>
                        </div>
                        
                        <div className="flex mt-[80px] justify-between gap-[10px]">
                            <div className="w-[70%]">
                                <h1 className="karla text-[32px] font-bold">South Island</h1>
                                <p className="mt-[30px] karla max-w-[780px]">
                                    The South Island of New Zealand is renowned for its mountains, lakes and glaciers. The Southern Alps, home to 3,724m-high Aoraki Mt. Cook, run along the entire length of the island. In the southwest is Fiordland National Park, with steep-sided Milford Sound.

                                    In the north is Abel Tasman National Park, known for its trails and ocean kayaking. Queenstown is famed for adventure sports like bungee jumping and skiing.
                                </p>
                                <img src="https://cdn.outsideonline.com/wp-content/uploads/2020/02/04/mountain-lake-new-zealand-si_h.jpg" alt="south island" className="mt-[30px] h-[300px] rounded-xl" />  

                                <h1 className="karla mt-[35px] text-[32px] font-bold">Natural geographic features</h1>
                                <p className="text-[#000] karla text-[18px] mt-[8px]"><i class="mr-[8px] fa-solid fa-location-dot text-[22px] text-[#000]"></i>New Zealand</p>
                                <p className="karla mt-[30px] max-w-[780px]">
                                    The South Island has 15 named maritime fiords which are all located in the southwest of the island in a mountainous area known as Fiordland. The spelling 'fiord' is used in New Zealand rather than 'fjord', although all the maritime fiords use the word Sound in their name instead.

                                    A number of lakes in the Fiordland and Otago regions also fill glacial valleys. Lake Te Anau has three western arms which are fiords (and are named so). Lake McKerrow / Whakatipu Waitai to the north of Milford Sound / Piopiotahi is a fiord with a silted-up mouth. Lake Wakatipu fills a large glacial valley, as do lakes Hakapoua, Poteriteri, Monowai and Hauroko in the far south of Fiordland. Lake Manapouri has fiords as its west, north and south arms..
                                </p>

                                <div className="flex max-w-[780px] justify-between items-center gap-[25px] mt-[30px]">
                                    <img src="https://s.yimg.com/ny/api/res/1.2/qNwdF7t_H90L8fFqFA588Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTMzNQ--/https://s.yimg.com/os/creatr-uploaded-images/2022-06/8c372cc0-f69c-11ec-bafd-195f980b9271" alt="image" className="rounded-xl h-[283px] object-cover w-[380px]" />
                                    <img src="https://res.cloudinary.com/djcyhbk2e/image/upload/c_fit,f_auto,h_800,q_35,w_800/v1/gvv/prod/oqynpfkdfkmhegpqsmb2" alt="image" className="rounded-xl h-[283px] object-cover w-[380px]" />
                                </div>

                                <p className="karla mt-[30px]">
                                    Most of New Zealand's glaciers are in the South Island. They are generally found in the Southern Alps near the Main Divide..

                                    An inventory of South Island glaciers during the 1980s indicated there were about 3,155 glaciers with an area of at least one hectare (2.5 acres).[60] About a sixth of these glaciers covered more than 10 hectares. These include the Fox and Franz Josef glaciers on the West Coast, and the Haupapa / Tasman, Hooker, Mueller and Murchison glaciers in the east.
                                </p>
                            </div>
                            <div className="w-[30%]">
                                <div className="flex justify-between items-center">
                                    <h1 className="karla font-medium text-[20px]">Other Destinations</h1>
                                    <Link className="text-[#276968] hover:text-[#fff] hover:bg-[#276968] transition-all py-[14px] px-[28px] border border-[#276968] rounded-[4px]" to="/flights">See all</Link>
                                </div>
                                <div className="mt-[20px]">
                                    <div className="relative w-fit mt-[15px]">
                                        <img src="https://www.gohawaii.com/sites/default/files/styles/wide_carousel_large/public/content-carousel-images/10105_mauiregionslp_VideoThumbnail_1.jpg?itok=ME4QBSIN" alt="pic" className="w-full h-[300px] hover:scale-105 transition-all object-cover rounded-[15px]" />
                                        <div className="absolute w-[280px] left-[20px] bottom-[25px]">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <h1 className="text-[#fff] font-bold text-[30px]">The island of Maui</h1>
                                                    <p className="text-[#fff] karla text-[18px] mt-[8px]"><i class="mr-[8px] fa-solid fa-location-dot text-[22px] text-[#fff]"></i>Hawaii</p>
                                                </div>
                                            </div>
                                            <a className="text-[#276968] block w-fit text-center px-[35px] py-[12px] mt-[15px] rounded-[4px] bg-[#fff] transition-all hover:rounded-[10px]" href="/">View more</a>
                                        </div>
                                    </div>
                                    <div className="relative w-fit mt-[15px]">
                                        <img src="https://www.travelandleisure.com/thmb/v5FfNKaDH0rxodnYc8yPyRrb8E4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/header-turks-and-caicos-grace-bay-providenciales-TURKSCAICOSTG0621-ffd6b7161b5f4d0bb0bddd6a53e2695f.jpg" alt="pic" className="w-full h-[300px] hover:scale-105 transition-all object-cover rounded-[15px]" />
                                        <div className="absolute w-[280px] left-[20px] bottom-[25px]">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <h1 className="text-[#fff] font-bold text-[30px]">Turks and Caicos Islands</h1>
                                                    <p className="text-[#fff] karla text-[18px] mt-[8px]"><i class="mr-[8px] fa-solid fa-location-dot text-[22px] text-[#fff]"></i>North of Dominican Republic</p>
                                                </div>
                                            </div>
                                            <a className="text-[#276968] block w-fit text-center px-[35px] py-[12px] mt-[15px] rounded-[4px] bg-[#fff] transition-all hover:rounded-[10px]" href="/">View more</a>
                                        </div>
                                    </div>
                                    <div className="relative w-fit mt-[15px]">
                                        <img src="https://travel.usnews.com/dims4/USNEWS/883f183/2147483647/resize/600x400%5E%3E/crop/600x400/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fmain_getty_3DvcjXU.jpg" alt="pic" className="w-full h-[300px] hover:scale-105 transition-all object-cover rounded-[15px]" />
                                        <div className="absolute w-[280px] left-[20px] bottom-[25px]">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <h1 className="text-[#fff] font-bold text-[30px]">Glacier National Park</h1>
                                                    <p className="text-[#fff] karla text-[18px] mt-[8px]"><i class="mr-[8px] fa-solid fa-location-dot text-[22px] text-[#fff]"></i>Montana</p>
                                                </div>
                                            </div>
                                            <a className="text-[#276968] block w-fit text-center px-[35px] py-[12px] mt-[15px] rounded-[4px] bg-[#fff] transition-all hover:rounded-[10px]" href="/">View more</a>
                                        </div>
                                    </div>
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

export default Discover