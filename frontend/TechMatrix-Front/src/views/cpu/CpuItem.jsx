import { getDataOneCpu } from "../../api/api";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function CpuItem() {
    let params = useParams();

    const [cpu, setCpu] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const data = await getDataOneCpu(params.id);
            setCpu(data);
        }
        fetchData();
    }, [params.id]);

    if (cpu) {
        return (
            <>
                <main>
                    <button
                        className="backBtn"
                        onClick={() => window.history.back()}
                    >
                        Back
                    </button>
                    <p>
                        &gt; Initializing TechMatrix/hardwares/cpu/
                        {params.id + " "}
                        system...
                        <br />
                        [OK] Connection established to hardware/cpu database.
                    </p>
                    <section id="cpuItemSection">
                        <img src={cpu.image} alt="cpu " />
                        <ul>
                            <li>
                                {cpu.brand + " "}
                                {cpu.type + " "}
                                {cpu.model_number}
                            </li>
                            <li></li>
                            <li>Series : {cpu.series}</li>
                            <li>Cores : {cpu.cores}</li>
                            <li>Thread : {cpu.thread}</li>
                            <li>Speed : {cpu.speed} Ghz</li>
                            <li>Socket : {cpu.socket}</li>
                        </ul>
                    </section>
                    <p>
                        [OK] CPU module loaded.
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
}
