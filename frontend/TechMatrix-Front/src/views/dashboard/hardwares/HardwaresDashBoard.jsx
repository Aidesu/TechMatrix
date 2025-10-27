import { Link } from "react-router-dom";
import { getDataCpu, getDataGpu } from "../../../api/api";
import { useState, useEffect } from "react";
import { deleteCpu } from "../../../api/api";

export default function HardwaresDashBoard() {
    const [cpu, setCpu] = useState([]);
    const [gpu, setGpu] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const cpu = await getDataCpu();
            setCpu(cpu);
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            const gpu = await getDataGpu();
            setGpu(gpu);
        }
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        if (!confirm("DELETE " + e.target.name + " ?")) {
            return;
        }
        const response = await deleteCpu(e.target.value);
        window.location.reload();
        return response.json();
    };

    return (
        <>
            <main class="admin">
                <h1>[Auth] Hardwares dashboard</h1>
                <p>
                    &gt; Initializing Editmanager-cpu <br />
                    <Link>[+] Create new cpu</Link>
                </p>
                <section class="cpuSectionDashboard">
                    <h1>CPU</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Brand</th>
                                <th>Model</th>
                                <th>Series</th>
                                <th>Cores</th>
                                <th>Thread</th>
                                <th>Speed</th>
                                <th>Socket</th>
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cpu &&
                                cpu.map((c, i) => (
                                    <tr>
                                        <td>{i}</td>
                                        <td>{c.brand}</td>
                                        <td>{c.model_number}</td>
                                        <td>{c.series}</td>
                                        <td>{c.cores}</td>
                                        <td>{c.thread}</td>
                                        <td>{c.speed}</td>
                                        <td>{c.socket}</td>
                                        <td>{c.type}</td>
                                        <td id="actionAdmin">
                                            <button
                                                onClick={handleSubmit}
                                                value={c._id}
                                                name={
                                                    c.brand +
                                                    " " +
                                                    c.model_number +
                                                    " " +
                                                    c.type
                                                }
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="24px"
                                                    viewBox="0 -960 960 960"
                                                    width="24px"
                                                    fill="#e3e3e3"
                                                >
                                                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                                                </svg>
                                            </button>
                                            <Link
                                                to={
                                                    "/dashboard/hardwares/cpu/" +
                                                    c._id
                                                }
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="24px"
                                                    viewBox="0 -960 960 960"
                                                    width="24px"
                                                    fill="#e3e3e3"
                                                >
                                                    <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                                                </svg>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </section>
                <section class="gpuSectionDashboard">
                    <h1>Gpu</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Brand</th>
                                <th>Series</th>
                                <th>Assembler</th>
                                <th>Architecture</th>
                                <th>Chipset</th>
                                <th>Power</th>
                                <th>Interface</th>
                                <th>Vram</th>
                                <th>Vram type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gpu &&
                                gpu.map((g, i) => (
                                    <tr>
                                        <td>{i}</td>
                                        <td>{g.brand}</td>
                                        <td>{g.series}</td>
                                        <td>{g.assembler}</td>
                                        <td>{g.architecture}</td>
                                        <td>{g.chipset}</td>
                                        <td>{g.power}</td>
                                        <td>{g.interface}</td>
                                        <td>{g.vram.vram_memory}</td>
                                        <td>{g.vram.vram_type}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    );
}
