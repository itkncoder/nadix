import logo from "../assets/logo.png"
import Wrapper from "../layout/wrapper"

const Footer = () => {
    return (
        <footer className="bg-[#276968] mt-[120px] py-[95px]">
                <Wrapper>
                    <div className="flex justify-between items-start text-[#fff]">
                        <div>
                            <img src={logo} alt="logo" className="object-cover h-[90px]" />
                            <div className="w-full flex justify-start ml-[25px] gap-[12px]">
                                <a href="/">
                                    <img src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph.png" alt="youtube" className="w-[26px]" />
                                </a>
                                <a href="/">
                                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/telegram-white-icon.png" alt="telegram" className="w-[26px]" />
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
    )
}

export default Footer