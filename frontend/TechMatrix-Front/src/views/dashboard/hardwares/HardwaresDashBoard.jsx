import { Link } from "react-router-dom";
import { getDataCpu, getDataGpu } from "../../../api/api";
import { useState, useEffect } from "react";

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

    return (
        <>
            <main class="admin">
                <h1>[Auth] Hardwares dashboard</h1>
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
