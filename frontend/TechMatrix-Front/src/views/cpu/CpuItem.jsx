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
                    <h1>{cpu.brand}</h1>
                </main>
            </>
        );
    }
}
