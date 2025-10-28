import { use, useEffect, useState } from "react";
import { getUserById, updateUser } from "../../api/api";


export default function EditAccount() {

    const userId = localStorage.getItem("user");
    const [message, setMessage] = useState("")

    const [formUser, setFormUser] = useState({
        username: "",
        name: { first_name: "", last_name: "" },
        email: "",
        password: "",
        image: ""
    })

    //charger les info de l'utilisateur actuelle 
    useEffect(() => {
        async function fetchData() {
            const data = await getUserById(userId)
            if (data) {
                setFormUser({
                    username: data.username,
                    name: {
                        first_name: data.name.first_name,
                        last_name: data.name.last_name,
                    },
                    email: data.email,
                    password: "",
                    image: data.image
                });
            }
        }
        fetchData();
    }, [userId]);

    //gestion du chargement des champ
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "first_name" || name === "last_name") {
            setFormUser((oldForm) => ({
                ...oldForm,
                name: {
                    ...oldForm.name,
                    [name]: value
                }
            }))
        } else {
            setFormUser((oldform) => ({
                ...oldform,
                [name]: value
            }))
        }
    };


    //sauvegarde des modifications
    const handleSave = async (e) => {
        e.preventDefault();

        const updatedUser = {
            username: formUser.username,
            email: formUser.email,
            password: formUser.password,
            image: formUser.image,
            name: {
                first_name: formUser.name.first_name,
                last_name: formUser.name.last_name
            }
        };

        //appel api 
        const response = await updateUser(userId, updatedUser)

        if (response.message === "User update") {
            setMessage("Account update successfully")
            setFormUser({
                username: "",
                name: { first_name: "", last_name: "" },
                email: "",
                password: "",
                image: ""
            });

        } else {
            setMessage("Update failed")
        }
    }



    return (
        <main>
            <h1>Edit Account</h1>

            <form onSubmit={handleSave} className="edit-form">
                <div class="divEdit">
                    <label htmlFor="username" class="labelEdit">Username : </label>
                    <input
                        class="inputEdit"
                        type="text"
                        name="username"
                        value={formUser.username}
                        onChange={handleChange}
                        placeholder="Change your username"
                    />
                </div>
                <div class="divEdit">
                    <label htmlFor="firstname" class="labelEdit">First name : </label>
                    <input
                        class="inputEdit"
                        type="text"
                        name="first_name"
                        value={formUser.name?.first_name}
                        onChange={handleChange}
                        placeholder="Change your first name"
                    />
                </div>
                <div class="divEdit">
                    <label htmlFor="lastname" class="labelEdit">Last name : </label>
                    <input
                        class="inputEdit"
                        type="text"
                        name="last_name"
                        value={formUser.name?.last_name}
                        onChange={handleChange}
                        placeholder="Change your last name"
                    />
                </div>
                <div class="divEdit">
                    <label htmlFor="email" class="labelEdit">Email : </label>
                    <input
                        class="inputEdit"
                        type="email"
                        name="email"
                        value={formUser.email}
                        onChange={handleChange}
                        placeholder="Change your email"
                    />
                </div>
                <div class="divEdit">
                    <label htmlFor="password" class="labelEdit">Password : </label>
                    <input
                        class="inputEdit"
                        type="password"
                        name="password"
                        value={formUser.password}
                        onChange={handleChange}
                        placeholder="Change your password"
                    />
                </div>
                {/* <div class="divEdit">
                    <label htmlFor="password" class="labelEdit"> Confirm Password : </label>
                    <input
                        class="inputEdit"
                        type="password"
                        name="password"
                        placeholder="Confirm your password"
                    />
                </div> */}
                <div class="divEdit">
                    <label htmlFor="image" class="labelEdit"> image: </label>
                    <input
                        class="inputEdit"
                        type="text"
                        name="image"
                        value={formUser.image}
                        onChange={handleChange}
                        placeholder="https://exmple.com/image.jpg"
                    />
                </div>

                <div className="edit-buttons">
                    <p className="">{message}</p>
                    <button type="submit">Save changes</button>
                    <button className="cancelEdit">Cancel</button>
                </div>

            </form>
        </main>
    );
}