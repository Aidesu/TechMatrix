export async function getData() {
    const response = await fetch("http://localhost:3000/cpu");
    const cpu = await response.json();
    return cpu;
}
