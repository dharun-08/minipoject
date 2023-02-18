import Navbar from "./Navbar"
import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Purchase from "./pages/Purchase"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Docs from "./pages/Docs"
function App() {
    return(
        <>
        <Navbar />
        <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/purchase" element={<Purchase />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/docs" element={<Docs />} />
                </Routes>
        </div>
            
        </>
    )
}
export default App