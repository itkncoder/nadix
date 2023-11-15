import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Flights from "./pages/flights"
import Hotels from "./pages/hotels"
import Discover from "./pages/discover"
import About from "./pages/about"
import Contact from "./pages/contact"

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/flights" element={<Flights/>} />
                <Route path="/hotels" element={<Hotels/>} />
                <Route path="/discover" element={<Discover/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </div>
    )
}

export default App