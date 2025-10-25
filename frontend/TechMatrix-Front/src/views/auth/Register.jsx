import { useState } from "react";
import { registerUser } from "../../api/api.jsx";

export default function Register() {
    const [formUser, setformUser] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = async (e) => {
        setformUser({ ...formUser, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

        if (!passwordRegex.test(formUser.password)) {
            setMessage(
                "Password must contain one uppercase , lowercase, one number, and least 8 characters long "
            );
            return;
        }

        if (formUser.password !== formUser.confirmPassword) {
            setMessage("Password do not match ");
            return;
        }

        const userData = await registerUser(formUser);
        if (userData.success) {
            setMessage("Register successful !");
            setformData({
                username: "",
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
        } else {
            setMessage(userData.message);
        }
    };

    return (
        <>
            <main>
                <h1>Sign up</h1>
                <form id="registerForm" method="post" onSubmit={handleSubmit}>
                    <label htmlFor="username">Username : </label>
                    <input
                        type="text"
                        name="username"
                        value={formUser.username}
                        onChange={handleChange}
                    />

                    <label htmlFor="firstName">First name : </label>
                    <input
                        type="text"
                        name="firstName"
                        value={formUser.firstName}
                        onChange={handleChange}
                    />

                    <label htmlFor="lastName">Last name : </label>
                    <input
                        type="text"
                        name="lastName"
                        value={formUser.lastName}
                        onChange={handleChange}
                    />

                    <label htmlFor="email">Email address : </label>
                    <input
                        type="email"
                        name="email"
                        value={formUser.email}
                        onChange={handleChange}
                    />

                    <label htmlFor="password">Password : </label>
                    <input
                        type="password"
                        name="password"
                        value={formUser.password}
                        onChange={handleChange}
                    />

                    <label htmlFor="ConfirmPassword">
                        {" "}
                        Confirm Password :{" "}
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formUser.confirmPassword}
                        onChange={handleChange}
                    />

                    <button type="submit">Sign Up</button>
                </form>
            </main>
        </>
    );
}
