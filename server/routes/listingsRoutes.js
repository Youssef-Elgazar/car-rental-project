const express = require("express");
const router = express.Router();
const Listing = require("../models/Listings");

// GET all listings
router.get("/", async (req, res) => {
	try {
		const listings = await Listing.find();
		res.status(200).json(listings);
	} catch (err) {
		res.status(500).json({ error: "Failed to fetch listings" });
	}
});

// POST a new listing
router.post("/", async (req, res) => {
	try {
		const newListing = new Listing(req.body);
		await newListing.save();
		res.status(201).json(newListing);
	} catch (err) {
		if (err.name === "ValidationError") {
			const validationErrors = Object.values(err.errors).map(
				(error) => error.message
			);
			res.status(400).json({ error: validationErrors.join(", ") });
		} else {
			res
				.status(400)
				.json({ error: "Failed to create listing: " + err.message });
		}
	}
});

// PUT (update) a listing by ID
router.put("/:id", async (req, res) => {
	try {
		const updatedListing = await Listing.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		res.status(200).json(updatedListing);
	} catch (err) {
		res.status(400).json({ error: "Failed to update listing" });
	}
});

// DELETE a listing by ID
router.delete("/:id", async (req, res) => {
	try {
		await Listing.findByIdAndDelete(req.params.id);
		res.status(200).json({ message: "Listing deleted successfully" });
	} catch (err) {
		res.status(500).json({ error: "Failed to delete listing" });
	}
});

module.exports = router;
