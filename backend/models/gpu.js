import mongoose from "mongoose";
const { Schema } = mongoose;

const gpuSchema = new Schema({
    brand: String,
    series: String,
    assembler: String,
    architecture: String,
    chipset: String,
    vram: {
        vram_memory: Number,
        vram_type: String,
        vram_speed: Number,
    },
    power: Number,
    interface: String,
    image: String,
});

const Gpu = mongoose.model("Gpu", gpuSchema);
export default Gpu;

//* CREATE
export const createGpu = async (gpu) => await gpu.save();

//* READ
export const readAllGpu = async () => await Gpu.find();
export const readOneGpu = async (id) => await Gpu.findById(id);

//* UPDATE
export const updateGpu = async (id, newGpu) =>
    await Gpu.updateOne({ _id: id }, { $set: newGpu });

//* DELETE
export const deleteGpu = async (id) => await Gpu.findByIdAndDelete(id);
