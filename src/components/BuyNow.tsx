import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const BuyNow = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedCar } = location.state || {};
  
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    pickupLocation: selectedCar?.location || '',
    pickupDate: '',
    dropoffLocation: selectedCar?.location || '',
    dropoffDate: '',
    carPlateNumber: '',
    carChassisNumber: '',
    carId: selectedCar?.id || ''
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!selectedCar) {
      navigate('/listings');
    }
  }, [selectedCar, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/bookings', {
        ...formData,
        carDetails: selectedCar
      });

      if (response.data) {
        navigate('/confirmation', { 
          state: { 
            booking: response.data,
            car: selectedCar
          } 
        });
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Error submitting booking');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!selectedCar) {
    return <div className="text-center py-8">Redirecting to listings...</div>;
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="flex items-center mb-6">
        <button 
          onClick={() => navigate(-1)}
          className="mr-4 text-blue-600 hover:text-blue-800"
        >
          &larr; Back
        </button>
        <h2 className="text-2xl font-bold">Complete Your Booking</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Car Summary Card */}
        {/* <div className="md:w-1/3">
          <div className="border rounded-lg p-4 shadow-sm sticky top-4">
            <h3 className="text-lg font-semibold mb-3">Your Rental</h3>
            <img 
              src={selectedCar.image} 
              alt={`${selectedCar.brand} ${selectedCar.model}`} 
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h4 className="text-xl font-medium">
              {selectedCar.brand} {selectedCar.model} ({selectedCar.year})
            </h4>
            <p className="text-gray-600 mb-2">{selectedCar.location}</p>
            <div className="border-t pt-3 mt-3">
              <p className="font-semibold text-lg">${selectedCar.price} <span className="text-sm font-normal text-gray-600">per day</span></p>
            </div>
          </div>
        </div> */}

        {/* Booking Form */}
        <div className="md:w-2/3">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
              
              <div className="mb-4">
                <label className="block mb-1 font-medium">Full Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              {/* comm */}
<div className="mb-4">
  <label className="block mb-1 font-medium">Phone Number <span className="text-red-500">*</span></label>
  <input
    type="tel"
    name="phoneNumber"
    value={formData.phoneNumber}
    onChange={(e) => {
      // Regex to allow only + at start and numbers, max 12 digits after +
      const validatedValue = e.target.value
        .replace(/^(\+)?([0-9]{0,12})/, '$1$2'); // Limit to 12 digits after +
      
      handleChange({
        target: {
          name: e.target.name,
          value: validatedValue
        }
      });
    }}
    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    required
    placeholder="ex. +2010*******0"
    maxLength={13} // + plus 12 digits
  />
</div>
              {/* comm */}
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Pickup Details</h3>
              
              <div className="mb-4">
                <label className="block mb-1 font-medium">Location <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block mb-1 font-medium">Date & Time <span className="text-red-500">*</span></label>
                <input
                  type="datetime-local"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Dropoff Details</h3>
              
              <div className="mb-4">
                <label className="block mb-1 font-medium">Location <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="dropoffLocation"
                  value={formData.dropoffLocation}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block mb-1 font-medium">Date & Time <span className="text-red-500">*</span></label>
                <input
                  type="datetime-local"
                  name="dropoffDate"
                  value={formData.dropoffDate}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Vehicle Information</h3>
              
              <div className="mb-4">
                <label className="block mb-1 font-medium">Car Plate Number</label>
                <input
                  type="text"
                  name="carPlateNumber"
                  value={formData.carPlateNumber}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Optional"
                />
              </div>
              
              <div className="mb-4">
                <label className="block mb-1 font-medium">Car Chassis Number <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="carChassisNumber"
                  value={formData.carChassisNumber}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-200 w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Confirm Booking'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;