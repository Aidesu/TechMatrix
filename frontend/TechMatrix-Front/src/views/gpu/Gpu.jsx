// import { getDataGpu } from "../../api/api.js";

// const gpu = await getDataGpu();

export default function Gpu() {
    return (
        <>
            <main>
                <h1>Hehe je suis le gpu</h1>
                <section id="mainSectionComponent">
                    {/* {gpu.map((g, i) => ( */}
                    <div class="componentCard">
                        <ul>
                            <li>
                                Brand : <p>g.brand</p>
                            </li>
                            <li>
                                Series : <p>g.series</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                Vram type : <p>g.vram.vram_type</p>
                            </li>
                        </ul>
                    </div>
                    {/* ))} */}
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
