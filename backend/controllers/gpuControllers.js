import { readAllGpu, createGpu, updateGpu, deleteGpu } from "../models/gpu.js";
import Gpu from "../models/gpu.js";

//* CREATE
export async function createGpuController(req, res) {
    const newGpu = new Gpu(req.body);
    await createGpu(newGpu);
    return res.status(200).json({ message: "New gpu has been added" });
}

//* READ
export async function readAllGpuController(req, res) {
    try {
        const gpu = await readAllGpu();
        return res.status(200).json(gpu);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}

//* UPDATE
export async function updateGpuController(req, res) {
    const gpuList = await readAllGpu();
    const gpu = gpuList.find((g) => g._id == req.params.id);

    if (!gpu) {
        return res.status(404).json({ message: "Gpu not found" });
    }

    const newGpu = req.body;
    await updateGpu(gpu._id, newGpu);
    return res.status(200).json({ message: "Gpu has been updated" });
}

//* DELETE
export async function deleteGpuController(req, res) {
    const gpuList = await readAllGpu();
    const gpu = gpuList.find((g) => g._id == req.params.id);

    if (!gpu) {
        return res.status(404).json({ message: "Gpu doesn't exists" });
    }

    await deleteGpu(gpu._id);
    return res.status(200).json({
        message: "Gpu " + gpu.brand + " " + gpu.series + " has been deleted",
    });
}
