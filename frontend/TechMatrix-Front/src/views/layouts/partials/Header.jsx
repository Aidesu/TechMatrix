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
            console.log(userId);
            console.log(userData);
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
                    <nav>
                        <ul>
                            <li>
                                <Link class="admin" to="/dashboard">
                                    Dashboard
                                </Link>
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
                                    <Link to="/account">{user.username}
                                        <img src={user.image || "https://bleedingcool.com/wp-content/uploads/2023/10/fallout-1-900x900.jpg"} class="avatar"></img>
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
