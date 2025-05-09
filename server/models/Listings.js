const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema({
	brand: { type: String, required: true },
	model: { type: String, required: true },
	description: { type: String, required: true },
	image: { type: String, required: true },
	price: { type: Number, required: true, min: 0 },
	year: { type: Number, required: true },
	location: { type: String, required: true },
	seats: { type: Number, required: true, default: 5 },
	fuel: { type: String, required: true, default: "Petrol" },
	transmission: { type: String, required: true, default: "Automatic" },
	category: { type: String, required: true, default: "Sedan" },
	userId: { type: String, required: true } // Add userId field to track the creator
});

module.exports = mongoose.model("Listing", ListingSchema);