export async function getDataCpu() {
    const response = await fetch("http://localhost:3000/cpu");
    const cpu = await response.json();
    return cpu;
}

export async function getDataGpu() {
    const response = await fetch("http://localhost:3000/gpu");
    const gpu = await response.json();
    return gpu;
}

export async function getDataOneCpu(id) {
    const response = await fetch("http://localhost:3000/cpu/" + id);
    const cpu = await response.json();
    return cpu;
}

export async function getDataOneGpu(id) {
    const response = await fetch("http://localhost:3000/gpu/" + id);
    const gpu = await response.json();
    return gpu;
}

export async function registerUser(formUser) {
    const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formUser),
    });

    const users = await response.json();
    return users;
}
