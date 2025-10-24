import { readAllGpu, createGpu } from "../models/gpu.js";
import Gpu from "../models/gpu.js";

export async function readAllGpuController(req, res) {
  try {
    const gpu = await readAllGpu();
    return res.status(200).json(gpu);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

export async function createGpuController(req, res) {
  const newGpu = new Gpu(req.body);
  await createGpu(newGpu);
  return res.status(200).json({ message: "New gpu has been added" });
}
