import ollama from "ollama";

export async function aiControllers(req, res) {
    const { question } = req.body;
    try {
        const response = await ollama.chat({
            model: "Gaius",
            messages: [
                {
                    role: "user",
                    content: question,
                },
            ],
        });
        const anwser = response.message.content;
        res.status(200).json(anwser);
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            error: e,
            message: "Internal server error. From aiControllers.js",
        });
    }
}
