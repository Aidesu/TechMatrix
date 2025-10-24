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

export const readAllGpu = async () => await Gpu.find();
export const createGpu = async (gpu) => await gpu.save();
