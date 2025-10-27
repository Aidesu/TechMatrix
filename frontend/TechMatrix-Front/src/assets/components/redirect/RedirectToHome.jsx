import { useNavigate } from "react-router-dom";

export default function RedirectToHome() {
    const navigate = useNavigate();
    navigate("/");
}
