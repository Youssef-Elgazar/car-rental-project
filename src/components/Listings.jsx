import { useState, useEffect } from 'react'; 
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
      setListings(listings.filter(listing => listing._id !== id));
    } catch (err) {
      setError('Failed to delete listing');
    }
  };

  const handleBuyNow = (listing) => {
    navigate('/buy-now', { 
      state: { 
        selectedCar: {
          id: listing._id,
          brand: listing.brand,
          model: listing.model,
          year: listing.year,
          price: listing.price,
          image: listing.image,
          location: listing.location
        } 
      } 
    });
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Available Cars</h2>
        <Link 
          to="/submit-listing" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Add New Listing
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div key={listing._id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow relative flex flex-col justify-between">
            <button 
              onClick={() => handleDelete(listing._id)}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors w-6 h-6 flex items-center justify-center"
              title="Delete listing"
            >
              ×
            </button>
            <img 
              src={listing.image} 
              alt={`${listing.brand} ${listing.model}`} 
              className="w-full h-48 object-cover rounded-lg mb-4" 
            />
            <div>
              <h3 className="text-xl font-semibold">{listing.brand} {listing.model}</h3>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <p className="text-gray-600">Year: {listing.year}</p>
                <p className="text-gray-600">Seats: {listing.seats}</p>
                <p className="text-gray-600">Fuel: {listing.fuel}</p>
                <p className="text-gray-600">Trans: {listing.transmission}</p>
              </div>
              <p className="text-gray-600 mt-2">Location: {listing.location}</p>
              <p className="text-lg font-bold mt-2">${listing.price}/day</p>
              <p className="mt-2 text-gray-700 line-clamp-2">{listing.description}</p>
            </div>
            <div className="mt-4 flex justify-end">
              <button 
                onClick={() => handleBuyNow(listing._id)}
                className="text-[#27548A] px-4 py-2 rounded-md border border-[#27548A] hover:bg-[#27548A] hover:text-white transition-colors duration-200"
            >
              Buy Now
            </button>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;