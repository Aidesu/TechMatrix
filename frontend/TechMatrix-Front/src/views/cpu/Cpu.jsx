import { getDataCpu } from "../../api/api";
import { Link } from "react-router-dom";

const cpu = await getDataCpu();

export default function Cpu() {
    return (
        <>
            <main>
                <p>
                    &gt; Initializing TechMatrix/hardwares/cpu system...
                    <br />
                    [OK] Connection established to hardware/cpu database.
                </p>
                <h1>cpu database</h1>
                <section id="mainSectionComponent">
                    {cpu.map((c, i) => (
                        <div class="componentCard" key={i}>
                            <ul>
                                <li>
                                    Brand : <p>{c.brand}</p>
                                </li>
                                <li>
                                    Cores : <p>{c.cores}</p>
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
                            <Link to={"/hardwares/cpu/" + c._id}></Link>
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
