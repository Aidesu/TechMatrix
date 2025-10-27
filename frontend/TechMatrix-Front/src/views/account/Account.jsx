import { useEffect, useState } from "react";
import { getUserById } from "../../api/api";

export default function Account() {
    const [user, setUser] = useState(null);
    const getLocalUser = localStorage.getItem("user");
    if (!getLocalUser) return;

    useEffect(() => {
        async function fetchData() {
            const userData = await getUserById(getLocalUser);
            setUser(userData);
            console.log(user);
        }
        fetchData();
    }, [getLocalUser]);

    return (
        <main>
            <h1>My account</h1>

            <p>Username: {user?.username}</p>
        </main>
    );
}
