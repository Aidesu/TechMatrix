import { getDataOneGpu } from "../../api/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function GpuItem() {
    let params = useParams();

    const [gpu, setGpu] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const data = await getDataOneGpu(params.id);
            setGpu(data);
        }
        fetchData();
    }, []);

    return (
        <>
            <h1>gpu</h1>
            <main>
                <p>
                    &gt; Initializing TechMatrix/hardwares/gpu/
                    {params.id + " "}
                    system...
                    <br />
                    [OK] Connection established to hardware/gpu database.
                </p>
                <section id="cpuItemSection">
                    {gpu ? (
                        <>
                            <img src={gpu.image} alt="gpu " />
                            <ul>
                                <li>
                                    {gpu.brand + " "}
                                    {gpu.assembler + " "}
                                    {gpu.series + " "}
                                    {gpu.vram.vram_memory + "G"}
                                </li>
                                <li>Brand : {gpu.brand}</li>
                                <li>Series : {gpu.series}</li>
                                <li>Assembler : {gpu.assembler}</li>
                                <li>Architecture : {gpu.architecture}</li>
                                <li>Vram : {gpu.vram.vram_memory} Gb</li>
                                <li>Vram type : {gpu.vram.vram_type}</li>
                                <li>Power : {gpu.power} W</li>
                                <li>Chipset : {gpu.chipset}</li>
                                <li>Interface : {gpu.interface}</li>
                            </ul>
                        </>
                    ) : (
                        <h1>Loading</h1>
                    )}
                </section>
                <p>
                    [OK] gpu module loaded.
                    <br />
                    [OK] Memory module loaded.
                    <br />
                    &gt; System startup complete.
                    <br />
                    &gt; Welcome to TechMatrix Dashboard.
                </p>
            </main>
        </>
    );
}
