import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
	name: { first_name: { type: String }, last_name: { type: String } },
	username: { type: String },
	email: { type: String },
	password: { type: String },
	role: { type: String, enum: ["user", "admin"], default: "user" },
	image: { type: String },
	joined_at: { type: Date },
});

const User = mongoose.model("User", userSchema);

//* READ
export const getUser = async () => await User.find();
export const getUserById = async (id) => await User.findById(id);


//* CREATE
export async function addUser(newUser) {
	const userExist = await User.findOne({ email: newUser.email });
	if (userExist) {
		return false;
	}


	const allRegxPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

	if (!allRegxPassword.test(newUser.password)) {
		throw new Error("Password must contain one uppercase , lowercase, one number, and least 8 characters long ");
	}


	const saltRounds = 10;
	const password_hash = await bcrypt.hash(newUser.password, saltRounds);

	const user = new User({
		...newUser,
		password: password_hash,
	});

	await user.save();
	return true;
}


//* DELETE
export async function deleteUser(id) {

	const user = await User.findByIdAndDelete(id);
	if (!user) {
		return false;
	}

	return true;
}

//* UPDATE
export async function updateUser(newUser) {
	const id = newUser._id;
	const user = await User.findById(id);

	if (!user) {
		return false;
	}

	user.name.first_name = newUser.name.first_name ?? user.name.first_name;
	user.name.last_name = newUser.name.last_name || user.name.last_name;
	user.username = newUser.username || user.username;
	user.password = newUser.password || user.password;
	user.email = newUser.email || user.email;
	user.image = newUser.image || user.image;

	await user.save();
	return true;
}

export async function loginUser(email, password) {

	const user = await User.findOne({ email });
	if (!user) {
		return null;
	}

	const goodPassword = await bcrypt.compare(password, user.password);

	if (!goodPassword) {
		return null;
	}

	return user;
}
