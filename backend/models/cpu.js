import mongoose from "mongoose";
const { Schema } = mongoose;

const cpuSchema = new Schema({
  brand: String,
  model_number: String,
  series: String,
  cores: Number,
  thread: Number,
  speed: Number,
  socket: String,
  type: String,
  image: String,
});

const Cpu = mongoose.model("Cpu", cpuSchema);
export default Cpu;

//* CREATE
export const createCpu = async (cpu) => await cpu.save();

//* READ
export const readAllCpu = async () => await Cpu.find();

//* UPDATE
export const updateCpu = async (id, cpuUpdate) =>
  await Cpu.updateOne({ _id: id }, { $set: cpuUpdate });

//* DELETE
export const deleteCpu = async (id) => await Cpu.findByIdAndDelete(id);
