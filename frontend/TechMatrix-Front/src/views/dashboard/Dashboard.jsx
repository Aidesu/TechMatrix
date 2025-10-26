import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <>
            <main class="admin">
                <h1>[Auth] dashboard</h1>
                <p>
                    > sudo auth --login admin <br />
                    password : <br />
                    [OK] Authenticated as <strong>auth</strong>
                    <br />> initializing TechMatrix/<strong>
                        dashboard
                    </strong>{" "}
                    ...
                    <br />> loading <strong>database manager</strong>... <br />
                    [OK] <span>hardwares</span> module loaded. <br />
                    [OK] user <span>database</span> synced.
                    <ul>
                        <li>
                            <span>></span>{" "}
                            <Link to="/dashboard/hardwares">
                                HARDWARES (system components)
                            </Link>
                        </li>
                        <li>
                            <span>></span>{" "}
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
}
