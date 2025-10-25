import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./views/layouts/partials/Header.jsx";
import Footer from "./views/layouts/partials/Footer.jsx";
import "./App.css";
import HomePage from "./views/home/HomePage.jsx";
import Hardwares from "./views/hardwares/Hardwares.jsx";
import Cpu from "./views/cpu/Cpu.jsx";
import CpuItem from "./views/cpu/CpuItem.jsx";
import Gpu from "./views/gpu/Gpu.jsx";
import GpuItem from "./views/gpu/GpuItem.jsx";
import About from "./views/About/About.jsx";
import NotFound from "./views/notFound/NotFound.jsx";
import Register from "./views/auth/Register.jsx";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path={`/`} element={<HomePage />} />
                <Route path={`/hardwares`} element={<Hardwares />} />
                <Route path={`/hardwares/cpu`} element={<Cpu />} />
                <Route path={`/hardwares/cpu/:id`} element={<CpuItem />} />
                <Route path={`/hardwares/gpu`} element={<Gpu />} />
                <Route path={`/hardwares/gpu/:id`} element={<GpuItem />} />
                <Route path={`/about`} element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
