import Wrapper from "../layout/wrapper"
import main from "../assets/main.png"
import logo from "../assets/logo.jpg"
import about from "../assets/about.png"
import flights from "../assets/flights.png"
import hotels from "../assets/hotels.png"
import aboutus from "../assets/aboutus.png"
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

const About = () => {
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
                            <img src={aboutus} alt="flights" className="w-full object-cover h-[500px] rounded-[25px] backdrop-brightness-50" />
                            <div className="absolute left-[75px] top-[230px]">
                                <h1 className="font-bold text-[38px] text-[#fff] max-w-[750px]">About Us</h1>
                            </div>
                        </div>
                        
                        <div className="mt-[80px] flex justify-between items-center gap-[20px]">
                            <div>
                                <h1 className="font-bold text-[32px]">About Phnes. Travels</h1>
                                <p className="karla mt-[20px]">
                                    Since 1975, Phnes. Travels has been focused on bringing our customers the best in esteem and quality travel game plans. We are enthusiastic about movement and sharing the world’s marvels on the relaxation travel side, and giving corporate explorers hello there contact administrations to encourage their business travel needs.

                                    We’re a worker-claimed travel organization secured by our qualities, trustworthiness, and commitment to client benefit.
                                    Our honor-winning organization reliably positions as a standout amongst other offices in the nation (Travel Weekly, Business Travel Weekly), and is the best individual from the renowned Signature Travel Network, an overall association enabling us to give our clients unmatched advantages.

                                    Since 2009, our solid organizational culture and enthusiasm for our calling have brought about our being named every year as one of the “Best Places To Work” in Accra Ghana. Our administration is dynamic on different tourism warning sheets and panels for movement associations. Fulfilled workers lead to fulfilled clients. We know the development and accomplishment of our organization relies on satisfying our customer’s needs each day. That is additionally our guarantee.
                                </p>
                            </div>
                            <img className="max-w-[500px] rounded-2xl" src="https://images.squarespace-cdn.com/content/v1/578aa6abd1758e37cc6aa3a9/1533068471321-YI017QMUL0SNH81XWBQP/GrinnellLakeExplorer.jpg?format=1000w" alt="image" />
                        </div>

                    </div>
                </div>
            </Wrapper>
            <Footer/>
        </div>
    )
}

export default About