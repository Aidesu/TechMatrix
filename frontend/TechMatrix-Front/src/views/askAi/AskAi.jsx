import { useState, useEffect } from "react";
import { askAi } from "../../api/api";

export default function AskAiView() {
    const [response, setResponse] = useState(null);
    const [message, setMessage] = useState(null);
    let history = JSON.parse(localStorage.getItem("aiHistory")) || [];

    const handleChange = async (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await askAi(message);
        history.push(response);
        setResponse(response);
        localStorage.setItem("aiHistory", JSON.stringify(history));
    };

    return (
        <>
            <main id="mainAi">
                <h1>Ask Gaius Von Valbazard ?</h1>
                <form action="" onSubmit={handleSubmit} id="formAi">
                    <ul>
                        {history
                            ? history.map((e, i) => (
                                  <li key={i}>
                                      <p>{e}</p>
                                  </li>
                              ))
                            : ""}
                    </ul>
                    <div id="inputDivAi">
                        <input
                            type="text"
                            onChange={handleChange}
                            placeholder="Enter your question here..."
                        />
                        <button type="submit">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 -960 960 960"
                                width="24px"
                                fill="#e3e3e3"
                            >
                                <path d="M360-240 120-480l240-240 56 56-144 144h488v-160h80v240H272l144 144-56 56Z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </main>
        </>
    );
}
