import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/listings');
        setListings(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch listings');
        setLoading(false);
      }
    };

    fetchListings();
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/listings/${id}`);
      // Update the listings state by filtering out the deleted listing
      setListings(listings.filter(listing => listing._id !== id));
    } catch (err) {
      setError('Failed to delete listing');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (

      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Available Cars</h2>
          <Link to="/submit-listing" className="bg-blue-500 text-white px-4 py-2 rounded">
            Add New Listing
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {listings.map((listing) => (
            <div key={listing._id} className="border rounded-lg p-4 shadow-md relative">
              <button 
                onClick={() => handleDelete(listing._id)}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                title="Delete listing"
              >
                ×
              </button>
              <img src={listing.image} alt={`${listing.brand} ${listing.model}`} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">{listing.brand} {listing.model}</h3>
              <p className="text-gray-600">Year: {listing.year}</p>
              <p className="text-gray-600">Location: {listing.location}</p>
              <p className="text-lg font-bold mt-2">${listing.price}/day</p>
              <p className="mt-2 text-gray-700">{listing.description}</p>
            </div>
          ))}
        </div>
      </div>
  );
  };


export default Listings;
