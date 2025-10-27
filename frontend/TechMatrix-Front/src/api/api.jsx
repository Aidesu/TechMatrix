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

export async function loginUser(userLogin) {
    const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userLogin),
    });
    const login = await response.json();
    return login;
}

export async function getAllUsers() {
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();
    return users;
}

export async function editCpu(id, cpuObj) {
    const response = await fetch(`http://localhost:3000/cpu/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(cpuObj),
    });
    const editCpuResponse = await response.json();
    return editCpuResponse;
}

export async function deleteCpu(id) {
    const response = await fetch(`http://localhost:3000/cpu/${id}`, {
        method: "DELETE",
    });
    const deleteCpuResponse = await response.json();
    return deleteCpuResponse;
}

export async function deleteGpu(id) {
    const response = await fetch(`http://localhost:3000/gpu/${id}`, {
        method: "DELETE",
    });
    const deleteGpuResponse = await response.json();
    return deleteGpuResponse;
}
