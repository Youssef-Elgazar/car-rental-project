require("dotenv").config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser"); // Import cookie-parser

// Import routes
const userRoutes = require("./routes/usersRoutes");
const listingRoutes = require("./routes/listingsRoutes");

const app = express();

// Middlewares
app.use(
	cors({
		credentials: true,
		origin: "http://localhost:3000", // Ensure this matches the frontend origin
	})
); // Allow credentials for cookies
app.use(bodyParser.json());
app.use(cookieParser()); // Use cookie-parser

// Routes
app.use("/api/users", userRoutes); // Ensure the usersRoutes is correctly configured to handle the /check-session route
app.use("/api/listings", listingRoutes);

// MongoDB connection
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.error("Failed to connect to MongoDB", err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
