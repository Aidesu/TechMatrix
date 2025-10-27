import { useState, useEffect } from "react";
import { getDataOneCpu } from "../../../api/api";
import { useParams } from "react-router-dom";
import { editCpu } from "../../../api/api";
import LoadingComponent from "../../../assets/components/loading/LoadingComponent";
import { useNavigate } from "react-router";

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

    return (
        <>
            <main>
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
}
