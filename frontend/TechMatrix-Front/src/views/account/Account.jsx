import { useEffect, useState } from "react"


export default function Account() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const getLocalUser = localStorage.getItem("user");
        if (getLocalUser) {
            setUser(JSON.parse(getLocalUser));
        }
    }, []);

    return (
        <main>
            <h1>My account</h1>

            <p>Username: {user?.username}</p>

        </main>
    )
}