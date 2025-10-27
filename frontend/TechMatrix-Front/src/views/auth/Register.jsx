import { useState } from "react";
import { registerUser } from "../../api/api.jsx";
import { Link } from "react-router-dom";



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

        //reformatter avant envoit pour le backend
        const formattedUser = {
            username: formUser.username,
            name: {
                first_name: formUser.firstName,
                last_name: formUser.lastName,
            },
            email: formUser.email,
            password: formUser.password,
            joined_at: new Date(),
            image: "https://bleedingcool.com/wp-content/uploads/2023/10/fallout-1-900x900.jpg"
        };

        const userData = await registerUser(formattedUser);
        if (userData.success) {
            setMessage("Register successful !");
            setformUser({
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

                    <div class="divForm">
                        <label htmlFor="username" class="labelForm">Username : </label>
                        <input
                            class="inputForm"
                            type="text"
                            name="username"
                            value={formUser.username}
                            onChange={handleChange}
                            placeholder="Enter your username"
                        />
                    </div>

                    <div class="divForm">
                        <label htmlFor="firstName" class="labelForm">First name : </label>
                        <input
                            class="inputForm"
                            type="text"
                            name="firstName"
                            value={formUser.firstName}
                            onChange={handleChange}
                            placeholder="Enter your name"
                        />
                    </div>

                    <div class="divForm">
                        <label htmlFor="lastName" class="labelForm">Last name : </label>
                        <input
                            class="inputForm"
                            type="text"
                            name="lastName"
                            value={formUser.lastName}
                            onChange={handleChange}
                            placeholder="Enter your last name"
                        />
                    </div>

                    <div class="divForm">
                        <label htmlFor="email" class="labelForm" >Email address : </label>
                        <input
                            class="inputForm"
                            type="email"
                            name="email"
                            value={formUser.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div class="divForm">
                        <label htmlFor="password" class="labelForm" >Password : </label>
                        <input
                            class="inputForm"
                            type="password"
                            name="password"
                            value={formUser.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                        /></div>

                    <div class="divForm">
                        <label htmlFor="ConfirmPassword" class="labelForm">Confirm Password :</label>
                        <input
                            class="inputForm"
                            type="password"
                            name="confirmPassword"
                            value={formUser.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm your password"
                        />
                    </div>
                    {message && (<p class="formMessage ">{message}</p>)}
                    <Link to="/login">Back to login</Link>
                    <br />
                    <button type="submit" class="btnRegister">Sign Up</button>
                </form>
            </main>
        </>
    );
}
