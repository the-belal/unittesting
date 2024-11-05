import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import SignUp from "./pages/SignUp/SignUp.jsx";
const Navigation = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<Home />}></Route>
            <Route path="/services" element={<Home />}></Route>
            <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        </BrowserRouter>
    );
}

export default Navigation;