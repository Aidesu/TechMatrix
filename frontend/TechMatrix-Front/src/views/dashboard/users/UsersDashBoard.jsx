import { Link } from "react-router-dom";
import { getAllUsers, getUserById } from "../../../api/api";
import { useState, useEffect } from "react";
import RedirectToHome from "../../../assets/components/redirect/RedirectToHome";

export default function UsersDashBoard() {
    const id = localStorage.getItem("user");
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const usersData = await getAllUsers();
            setUsers(usersData);
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            const userData = await getUserById(id);
            setUser(userData);
        }
        fetchData();
    }, [id]);

    if (user === null) {
        return <h1>Loading in progress</h1>;
    }

    if (user.role == "admin") {
        return (
            <>
                <main class="admin">
                    <button
                        className="backBtn"
                        onClick={() => window.history.back()}
                    >
                        Back
                    </button>
                    <h1>[Auth] User dashboard</h1>
                    <section class="usersSectionDashboard">
                        <table>
                            <thead>
                                <tr>
                                    <th>Index</th>
                                    <th>Username</th>
                                    <th>first name</th>
                                    <th>last name</th>
                                    <th>email address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users &&
                                    users.map((u, i) => (
                                        <tr>
                                            <td>{i}</td>
                                            <td>{u.username}</td>
                                            <td>
                                                {u.name
                                                    ? u.name.first_name
                                                    : "null"}
                                            </td>
                                            <td>
                                                {u.name
                                                    ? u.name.last_name
                                                    : "null"}
                                            </td>
                                            <td>{u.email}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </section>
                </main>
            </>
        );
    } else {
        return <RedirectToHome />;
    }
}
