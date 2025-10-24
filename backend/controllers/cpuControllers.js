import { readAllCpu, createCpu, deleteCpu } from "../models/cpu.js";
import Cpu from "../models/cpu.js";

export async function readAllCpuController(req, res) {
  try {
    const cpu = await readAllCpu();
    return res.status(200).json(cpu);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

export function createCpuController(req, res) {
  try {
    const newCpu = new Cpu(req.body);
    createCpu(newCpu);
    return res
      .status(200)
      .json({ message: "Cpu " + newCpu.brand + " has been added." });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

export async function deleteCpuController(req, res) {
  const cpuList = await readAllCpu();
  const cpu = cpuList.find((c) => c._id == req.params.id);
  if (!cpu) {
    return res.status(404).json({ message: "Cpu not found" });
  }
  console.log(cpu._id);
  await deleteCpu(cpu._id);
  return res.status(200).json({ message: "Cpu has been deleted" });
}

export async function updateCpuController(req, res) {
  const cpuList = await readAllCpu();
}
