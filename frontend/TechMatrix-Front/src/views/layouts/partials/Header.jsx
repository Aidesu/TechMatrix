import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserById } from "../../../api/api";

export default function Header() {
    const userId = localStorage.getItem("user");
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchData() {
            if (!userId) return;
            const userData = await getUserById(userId);
            setUser(userData);
        }
        fetchData();
    }, [userId]);

    return (
        <>
            <header>
                <div>
                    <Link id="headerTitle" to="/">
                        <img src="/TechMatrixLogo.png" alt="Techmatrix logo" />
                        <strong>T</strong>ech<strong>M</strong>atrix
                    </Link>
                    <button id="themeBtn">
                        <img
                            src="/themeLogo/WhiteModeLogo.png"
                            alt="Theme logo"
                        />
                    </button>
                    <nav>
                        <ul>
                            {user && user.role == "admin" ? (
                                <>
                                    <li>
                                        <Link class="admin" to="/dashboard">
                                            Dashboard
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <></>
                            )}
                            <li>
                                <Link to="/gaius">Gaius AI</Link>
                            </li>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/hardwares">Hardwares</Link>
                            </li>
                            <li>
                                {user ? (
                                    <Link className="user-link" to="/account">
                                        {user.username}
                                        <img
                                            src={
                                                user.image ||
                                                "https://bleedingcool.com/wp-content/uploads/2023/10/fallout-1-900x900.jpg"
                                            }
                                            class="avatar"
                                        ></img>
                                    </Link>
                                ) : (
                                    <Link to="/login">Sign In</Link>
                                )}
                            </li>
                        </ul>
                    </nav>
                </div>
                <hr />
            </header>
        </>
    );
}
