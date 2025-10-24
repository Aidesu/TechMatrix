import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	name: { first_name: { type: String }, last_name: { type: String } },
	username: { type: String },
	email: { type: String },
	image: { type: String },
	joined_at: { type: Date },
});

const User = mongoose.model("User", userSchema);

export async function getUser() {
	return await User.find();
}

export async function addUser(newUser) {
	const userExist = await User.findOne({ email: newUser.email });
	if (userExist) {
		return false;
	}

	const user = new User(newUser);
	await user.save();
	return true;
}

export async function deleteUser() {}

export async function updateUser(newUser) {
	const id = newUser._id;
	const user = await User.findById(id);

	if (!user) {
		return false;
	}

	user.name.first_name = newUser.name.first_name ?? user.name.first_name;
	user.name.last_name = newUser.name.last_name || user.name.last_name;
	user.username = newUser.username || user.username;
	user.email = newUser.email || user.email;
	user.image = newUser.image || user.image;

	await user.save();
	return true;
}
