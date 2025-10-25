import { getDataCpu } from "../../api/api";
import { Link } from "react-router-dom";

const cpu = await getDataCpu();

export default function Cpu() {
    return (
        <>
            <main>
                <p>
                    &gt; Initializing TechMatrix/hardwares system...
                    <br />
                    [OK] Connection established to hardware database.
                </p>
                <h1>Bouh je suis le cpu</h1>
                <section id="mainSectionComponent">
                    {cpu.map((c, i) => (
                        <div class="componentCard" key={i}>
                            <ul>
                                <li>
                                    Brand : <p>{c.brand}</p>
                                </li>
                                <li>
                                    Series : <p>{c.series}</p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    Model : <p>{c.model_number}</p>
                                </li>
                                <li>
                                    Socket : <p>{c.socket}</p>
                                </li>
                            </ul>
                        </div>
                    ))}
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
