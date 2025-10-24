import {
    createCpu,
    readAllCpu,
    readOneCpu,
    deleteCpu,
    updateCpu,
} from "../models/cpu.js";
import Cpu from "../models/cpu.js";

//* CREATE
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

//* READ
export async function readAllCpuController(req, res) {
    try {
        const cpuList = await readAllCpu();
        return res.status(200).json(cpuList);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}

export async function readOneCpuController(req, res) {
    try {
        const cpuList = await readAllCpu();
        const cpu = cpuList.find((c) => c._id == req.params.id);

        if (!cpu) {
            return res.status(404).json({ message: "Cpu not found" });
        }
        return res.status(200).json(await readOneCpu(cpu._id));
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}

//* UPDATE
export async function updateCpuController(req, res) {
    try {
        const cpuList = await readAllCpu();
        const cpu = cpuList.find((c) => c._id == req.params.id);
        if (!cpu) {
            return res.status(404).json({ message: "Cpu not found" });
        }
        const newCpu = req.body;
        await updateCpu(cpu._id, newCpu);
        return res.status(200).json({ message: "Cpu has been updated" });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}

//* DELETE
export async function deleteCpuController(req, res) {
    try {
        const cpuList = await readAllCpu();
        const cpu = cpuList.find((c) => c._id == req.params.id);
        if (!cpu) {
            return res.status(404).json({ message: "Cpu not found" });
        }
        await deleteCpu(cpu._id);
        return res.status(200).json({ message: "Cpu has been deleted" });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}
