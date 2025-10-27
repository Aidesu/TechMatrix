import { getDataGpu } from "../../api/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Gpu() {
    const [gpu, setGpu] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const gpu = await getDataGpu();
            setGpu(gpu);
        }
        fetchData();
    }, []);

    return (
        <>
            <main>
                <p>
                    &gt; Initializing TechMatrix/hardwares/gpu system...
                    <br />
                    [OK] Connection established to hardware/gpu database.
                </p>
                <h1>gpu database</h1>
                <section id="mainSectionGpu">
                    {gpu &&
                        gpu.map((g, i) => (
                            <div class="componentCard" key={i}>
                                <ul id="ulGpuItem">
                                    <p>{g.series}</p>
                                    <li>
                                        assembler : <p>{g.assembler}</p>
                                    </li>
                                    <li>
                                        vram : <p>{g.vram.vram_memory} GB</p>
                                    </li>
                                </ul>
                                <Link to={"/hardwares/gpu/" + g._id}></Link>
                            </div>
                        ))}
                </section>
                <p>
                    [OK] GPU module loaded.
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
