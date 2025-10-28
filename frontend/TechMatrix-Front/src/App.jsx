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
import Login from "./views/auth/Login.jsx";
import Dashboard from "./views/dashboard/Dashboard.jsx";
import HardwaresDashBoard from "./views/dashboard/hardwares/HardwaresDashBoard.jsx";
import UsersDashBoard from "./views/dashboard/users/UsersDashBoard.jsx";
import CpuDashboard from "./views/dashboard/cpu/CpuDashboard.jsx";
import GpuDashboard from "./views/dashboard/gpu/GpuDashboard.jsx";
import Account from "./views/account/Account.jsx";
import EditAccount from "./views/account/EditAccount.jsx";
import CreateCpuDashboard from "./views/dashboard/cpu/CreateCpuDashboard.jsx";
import CreateGpuDashboard from "./views/dashboard/gpu/CreateGpuDashboard.jsx";
import AskAiView from "./views/askAi/AskAi.jsx";

function App() {
    return (
        <>
            <Header />
            <Routes data-theme="white">
                <Route path={`/`} element={<HomePage />} />
                <Route path={`/hardwares`} element={<Hardwares />} />
                <Route path={`/hardwares/cpu`} element={<Cpu />} />
                <Route path={`/hardwares/cpu/:id`} element={<CpuItem />} />
                <Route path={`/hardwares/gpu`} element={<Gpu />} />
                <Route path={`/hardwares/gpu/:id`} element={<GpuItem />} />
                <Route path={`/about`} element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/account" element={<Account />} />
                <Route path="/edit-account" element={<EditAccount />} />
                <Route path={`/dashboard`} element={<Dashboard />} />
                <Route path={`/dashboard/users`} element={<UsersDashBoard />} />
                <Route path={`/gaius`} element={<AskAiView />} />
                <Route
                    path={`/dashboard/hardwares`}
                    element={<HardwaresDashBoard />}
                />
                <Route
                    path={`/dashboard/hardwares/gpu/:id`}
                    element={<GpuDashboard />}
                />
                <Route
                    path={`/dashboard/hardwares/cpu/:id`}
                    element={<CpuDashboard />}
                />
                <Route
                    path={`/dashboard/hardwares/new/cpu`}
                    element={<CreateCpuDashboard />}
                />
                <Route
                    path={`/dashboard/hardwares/new/gpu`}
                    element={<CreateGpuDashboard />}
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
