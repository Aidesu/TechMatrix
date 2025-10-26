import { Link } from "react-router-dom";
import { getAllUsers } from "../../../api/api";
import { useState, useEffect } from "react";

export default function UsersDashBoard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const usersData = await getAllUsers();
            setUsers(usersData);
        }
        fetchData();
    }, []);

    return (
        <>
            <main class="admin">
                <h1>[Auth] User dashboard</h1>
                <section class="usersSectionDashboard">
                    <table>
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Username</th>
                                <th>first name</th>
                                <th>last name</th>
                                <th>email</th>
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
                                            {u.name ? u.name.last_name : "null"}
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
}
