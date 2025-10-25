import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header>
                <div>
                    <a id="headerTitle" href="">
                        <strong>T</strong>ech<strong>M</strong>atrix
                    </a>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <a href="#">
                                    <Link to="/hardwares">Hardwares</Link>
                                </a>
                            </li>
                            <li>
                                <a href="#">Account</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <hr />
            </header>
        </>
    );
}
