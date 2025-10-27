import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header>
                <div>
                    <Link id="headerTitle" to="/">
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
                                <Link to="/account">Account</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <hr />
            </header>
        </>
    );
}
