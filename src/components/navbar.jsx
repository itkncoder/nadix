import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <header className="flex justify-between items-center">
            <div>
                <Link to="/">
                    <img src={logo} alt="logo" className="object-cover h-[90px]" />
                </Link>
            </div>
            <nav className="text-[#fff] karla font-[400] flex items-center gap-[40px]">
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
                        <img src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph.png" alt="youtube" className="w-[26px] hover:scale-105 transition-all" />
                    </a>
                    <a href="/">
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/telegram-white-icon.png" alt="telegram" className="w-[26px] hover:scale-105 transition-all" />
                    </a>
                </div>
                <a className="text-[#fff] hover:underline" href="/">+998 90 000 00 00</a>
            </div>
        </header>
    )
}

export default Navbar