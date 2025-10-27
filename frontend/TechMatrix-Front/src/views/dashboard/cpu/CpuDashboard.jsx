import { useState, useEffect } from "react";
import { getDataOneCpu, editCpu, getUserById } from "../../../api/api";
import { useParams } from "react-router-dom";
import LoadingComponent from "../../../assets/components/loading/LoadingComponent";
import { useNavigate } from "react-router";
import RedirectToHome from "../../../assets/components/redirect/RedirectToHome";

export default function CpuDashboard() {
    const params = useParams();
    const [cpu, setCpu] = useState(null);
    const [formCpu, setFormCpu] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const data = await getDataOneCpu(params.id);
            setCpu(data);
        }
        fetchData();
    }, [params.id]);

    const id = localStorage.getItem("user");
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const userData = await getUserById(id);
            setUser(userData);
        }
        fetchData();
    }, [id]);

    const handleChange = async (e) => {
        setFormCpu({ ...formCpu, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const cpuData = await editCpu(cpu._id, formCpu);
        if (cpuData.success) {
            setMessage("Cpu edited");
        }
        navigate(-1);
    };

    if (user === null) {
        return <h1>Loading in progress</h1>;
    }

    if (user.role == "admin") {
        return (
            <>
                <main>
                    <button
                        className="backBtn"
                        onClick={() => window.history.back()}
                    >
                        Back
                    </button>
                    <h1>Cpu Dashboard</h1>
                    {cpu ? (
                        <>
                            <section className="dashboardItem">
                                <form action="" onSubmit={handleSubmit}>
                                    <ul>
                                        {Object.entries(cpu).map(([k, v]) => (
                                            <li key={k}>
                                                <label htmlFor={k}>{k}</label>
                                                <p>{v}</p>
                                                <input
                                                    id={k}
                                                    type="text"
                                                    placeholder={`Change ${k} here...`}
                                                    onChange={handleChange}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                    <button type="submit">Submit</button>
                                </form>
                            </section>
                        </>
                    ) : (
                        <LoadingComponent />
                    )}
                </main>
            </>
        );
    } else {
        return <RedirectToHome />;
    }
}
