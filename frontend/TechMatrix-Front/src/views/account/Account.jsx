import { useEffect, useState } from "react"
import { getUserById } from "../../api/api";
import { useNavigate } from "react-router-dom";


export default function Account() {
    const [user, setUser] = useState(null);
    const getLocalUser = localStorage.getItem("user");
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const userData = await getUserById(getLocalUser);
            setUser(userData);
        }
        fetchData();
    }, [getLocalUser]);

    const handleDisconnect = () => {
        localStorage.removeItem("user");
        navigate("/login");
    }


    return (
        <main class="main-account">
            <h1>My account</h1>
            <div class="account-container">
                <div class="account-image">
                    <img src={user?.image} />
                </div>
                <div class="account-info">
                    <p>Username: {user?.username}</p>
                    <p>First name: {user?.name.first_name}</p>
                    <p>Last name: {user?.name.last_name}</p>
                    <p>Email address: {user?.email}</p>
                    <p>joined at: {user?.joined_at}</p>
                </div>
                <div class="account-buttons">
                    <button class="btn-edit">Edit</button>
                    <button class="btn-disconect" onClick={handleDisconnect}>Disconect</button>
                </div>
            </div>

        </main>
    );
}
