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
