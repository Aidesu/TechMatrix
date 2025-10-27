import { Link } from "react-router-dom";
import { getUserById } from "../../api/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const id = localStorage.getItem("user");
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const userData = await getUserById(id);
            setUser(userData);
        }
        fetchData();
    }, [id]);

    if (user) {
        console.log("username : " + user.username);
        console.log("role : " + user.role);
    }

    if (user && user.role == "admin") {
        return (
            <>
                <main class="admin">
                    <h1>[Auth] dashboard</h1>
                    <p>
                        &gt; Initializing TechMatrix/dashboard <br />
                        &gt; sudo auth --login admin <br />
                        password : <br />
                        [OK] Authenticated as <strong>auth</strong>
                        <br />
                        &gt; initializing TechMatrix/<strong>
                            dashboard
                        </strong>{" "}
                        ...
                        <br />
                        &gt; loading <strong>database manager</strong>... <br />
                        [OK] <span>hardwares</span> module loaded. <br />
                        [OK] user <span>database</span> synced.
                        <ul>
                            <li>
                                <span>&gt;</span>{" "}
                                <Link to="/dashboard/hardwares">
                                    HARDWARES (system components)
                                </Link>
                            </li>
                            <li>
                                <span>&gt;</span>{" "}
                                <Link to="/dashboard/users">
                                    USERS (account manager)
                                </Link>
                            </li>
                        </ul>
                        &gt; System startup complete.
                        <br />
                        &gt; _
                    </p>
                </main>
            </>
        );
    } else {
        navigate("http://localhost:5173/404");
    }
}
