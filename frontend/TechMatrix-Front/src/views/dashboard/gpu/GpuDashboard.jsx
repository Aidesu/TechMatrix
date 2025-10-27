import { useState, useEffect } from "react";
import { getDataOneGpu, editGpu, getUserById } from "../../../api/api";
import { useParams } from "react-router-dom";
import LoadingComponent from "../../../assets/components/loading/LoadingComponent";
import { useNavigate } from "react-router";
import RedirectToHome from "../../../assets/components/redirect/RedirectToHome";

export default function GpuDashboard() {
    const params = useParams();
    const [gpu, setGpu] = useState(null);
    const [formGpu, setFormGpu] = useState({});
    let navigate = useNavigate();

    const id = localStorage.getItem("user");
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const userData = await getUserById(id);
            setUser(userData);
        }
        fetchData();
    }, [id]);

    useEffect(() => {
        async function fetchData() {
            const data = await getDataOneGpu(params.id);
            setGpu(data);
        }
        fetchData();
    }, [params.id]);

    const handleChange = async (e) => {
        setFormGpu({ ...formGpu, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const gpuData = await editGpu(gpu._id, formGpu);
        if (gpuData.success) {
            setMessage("Gpu edited");
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
                    <h1>Gpu Dashboard</h1>
                    {gpu ? (
                        <>
                            <section className="dashboardItem">
                                <form action="" onSubmit={handleSubmit}>
                                    <ul>
                                        <li>
                                            <label htmlFor="_id">_id</label>
                                            <p>{gpu._id}</p>
                                            <input
                                                id="_id"
                                                type="text"
                                                placeholder={`Change _id here...`}
                                                onChange={handleChange}
                                            />
                                        </li>
                                        <li>
                                            <label htmlFor="brand">brand</label>
                                            <p>{gpu.brand}</p>
                                            <input
                                                id="brand"
                                                type="text"
                                                placeholder={`Change brand here...`}
                                                onChange={handleChange}
                                            />
                                        </li>
                                        <li>
                                            <label htmlFor="series">
                                                series
                                            </label>
                                            <p>{gpu.series}</p>
                                            <input
                                                id="series"
                                                type="text"
                                                placeholder={`Change series here...`}
                                                onChange={handleChange}
                                            />
                                        </li>
                                        <li>
                                            <label htmlFor="assembler">
                                                assembler
                                            </label>
                                            <p>{gpu.assembler}</p>
                                            <input
                                                id="assembler"
                                                type="text"
                                                placeholder={`Change assembler here...`}
                                                onChange={handleChange}
                                            />
                                        </li>
                                        <li>
                                            <label htmlFor="architecture">
                                                architecture
                                            </label>
                                            <p>{gpu.architecture}</p>
                                            <input
                                                id="architecture"
                                                type="text"
                                                placeholder={`Change architecture here...`}
                                                onChange={handleChange}
                                            />
                                        </li>
                                        <li>
                                            <label htmlFor="chipset">
                                                chipset
                                            </label>
                                            <p>{gpu.chipset}</p>
                                            <input
                                                id="chipset"
                                                type="text"
                                                placeholder={`Change chipset here...`}
                                                onChange={handleChange}
                                            />
                                        </li>
                                        <li>
                                            <label htmlFor="power">power</label>
                                            <p>{gpu.power}</p>
                                            <input
                                                id="power"
                                                type="text"
                                                placeholder={`Change power here...`}
                                                onChange={handleChange}
                                            />
                                        </li>
                                        <li>
                                            <label htmlFor="interface">
                                                interface
                                            </label>
                                            <p>{gpu.interface}</p>
                                            <input
                                                id="interface"
                                                type="text"
                                                placeholder={`Change interface here...`}
                                                onChange={handleChange}
                                            />
                                        </li>
                                        <li>
                                            <label htmlFor="vram_memory">
                                                vram_memory
                                            </label>
                                            <p>{gpu.vram.vram_memory}</p>
                                            <input
                                                id="vram.vram_memory"
                                                type="text"
                                                placeholder={`Change vram_memory here...`}
                                                onChange={handleChange}
                                            />
                                        </li>
                                        <li>
                                            <label htmlFor="vram_type">
                                                vram_type
                                            </label>
                                            <p>{gpu.vram.vram_type}</p>
                                            <input
                                                id="vram.vram_type"
                                                type="text"
                                                placeholder={`Change vram_type here...`}
                                                onChange={handleChange}
                                            />
                                        </li>
                                        <li>
                                            <label htmlFor="vram_speed">
                                                vram_speed
                                            </label>
                                            <p>{gpu.vram.vram_speed}</p>
                                            <input
                                                id="vram.vram_speed"
                                                type="text"
                                                placeholder={`Change vram_speed here...`}
                                                onChange={handleChange}
                                            />
                                        </li>
                                        <li>
                                            <label htmlFor="image">image</label>
                                            <p>{gpu.image}</p>
                                            <input
                                                id="image"
                                                type="text"
                                                placeholder={`Change image here...`}
                                                onChange={handleChange}
                                            />
                                        </li>
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
