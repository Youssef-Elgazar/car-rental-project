const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/Users");

// GET all users
router.get("/", async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json({ error: "Failed to fetch users" });
	}
});

// POST a new user (Signup)
router.post("/signup", async (req, res) => {
	try {
		const { username, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = new User({ username, password: hashedPassword });
		await newUser.save();
		res.status(201).json({ message: "User created successfully" });
	} catch (err) {
		res.status(400).json({ error: "Failed to create user" });
	}
});

// POST login
router.post("/login", async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username });
		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(401).json({ error: "Invalid credentials" });
		}
		const token = jwt.sign(
			{ id: user._id, username: user.username },
			process.env.JWT_SECRET,
			{
				expiresIn: "1d", // Set token expiration to 1 day
			}
		);
		res
			.cookie("token", token, {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production", // Use secure cookies in production
				sameSite: "lax", // Adjusted to 'lax' for better compatibility
				maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
			})
			.status(200)
			.json({ message: "Login successful" });
	} catch (err) {
		res.status(500).json({ error: "Failed to login" });
	}
});

// POST logout
router.post("/logout", (req, res) => {
	res
		.clearCookie("token")
		.status(200)
		.json({ message: "Logged out successfully" });
});

// GET /check-session
router.get("/check-session", (req, res) => {
	const token = req.cookies.token; // Retrieve token from cookies
	if (!token) {
		return res.status(401).json({ error: "No token provided" });
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
		res.status(200).json({ message: "Session valid", user: decoded });
	} catch (err) {
		res.status(401).json({ error: "Invalid or expired token" });
	}
});

// DELETE a user by ID
router.delete("/:id", async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json({ message: "User deleted successfully" });
	} catch (err) {
		res.status(500).json({ error: "Failed to delete user" });
	}
});

module.exports = router;
