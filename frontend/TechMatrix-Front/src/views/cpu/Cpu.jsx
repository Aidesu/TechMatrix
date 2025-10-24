import { getData } from "../../api/api";
import { Link } from "react-router-dom";

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
                <section id="mainSectionCpu">
                    {/* {cpu.map((c, index) => ( */}
                    <div class="cpuCard">
                        <ul>
                            <li>
                                Brand : <p>c.brand</p>
                            </li>
                            <li>
                                Series : <p>Ryzen 9</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                Model : <p>9950X3D</p>
                            </li>
                        </ul>
                    </div>
                    {/* ))} */}
                </section>
                bouh
            </main>
        </>
    );
}
