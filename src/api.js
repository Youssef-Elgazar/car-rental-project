import axios from "axios";

const API = axios.create({
	baseURL: "http://localhost:5000/api", // Base URL for the backend API
	withCredentials: true, // Add this line to send credentials (cookies) with requests
});

// User APIs
export const fetchUsers = () => API.get("/users");
export const createUser = (userData) => API.post("/users", userData);
export const deleteUser = (userId) => API.delete(`/users/${userId}`);
export const signup = (userData) => API.post("/users/signup", userData); // Signup API
export const login = (userData) => API.post("/users/login", userData); // Login API
export const logout = () => API.post("/users/logout"); // Add a logout API call

// Listing APIs
export const fetchListings = () => API.get("/listings");
export const createListing = (listingData) =>
	API.post("/listings", listingData);
export const updateListing = (listingId, listingData) =>
	API.put(`/listings/${listingId}`, listingData);
export const deleteListing = (listingId) =>
	API.delete(`/listings/${listingId}`);

export default API;
