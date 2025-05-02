import React, { useState } from 'react';

const categories = ['All', 'SUV', 'Sedan', 'Hatchback', 'Coupe'];
const fuelTypes = ['All', 'Petrol', 'Diesel', 'Hybrid', 'Electric'];
const transmissions = ['All', 'Automatic', 'Manual'];

const mockCars = [
  {
    id: 1,
    name: 'Audi A6',
    image: '',
    price: 120,
    year: 2022,
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Automatic',
    category: 'Sedan',
  },
  {
    id: 2,
    name: 'BMW X5',
    image: '',
    price: 150,
    year: 2023,
    seats: 5,
    fuel: 'Diesel',
    transmission: 'Automatic',
    category: 'SUV',
  },
  {
    id: 3,
    name: 'Mercedes C-Class',
    image: '',
    price: 140,
    year: 2021,
    seats: 5,
    fuel: 'Hybrid',
    transmission: 'Automatic',
    category: 'Sedan',
  },
  {
    id: 4,
    name: 'Volkswagen Golf',
    image: '',
    price: 90,
    year: 2020,
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Manual',
    category: 'Hatchback',
  },
];

const Listing = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFuel, setSelectedFuel] = useState('All');
  const [selectedTransmission, setSelectedTransmission] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 200]);

  const filteredCars = mockCars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || car.category === selectedCategory;
    const matchesFuel = selectedFuel === 'All' || car.fuel === selectedFuel;
    const matchesTransmission = selectedTransmission === 'All' || car.transmission === selectedTransmission;
    const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesFuel && matchesTransmission && matchesPrice;
  });

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-green-50 to-blue-50" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Hero Section */}
      <div className="relative h-64 flex items-center justify-center w-full bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Find Your Dream Car</h1>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-8 px-6 mt-[-2rem] mb-8 z-20 relative w-full max-w-4xl">
        {/* Sidebar Filters (Desktop) */}
        <aside className="hidden md:block w-64 bg-white rounded-2xl shadow-lg p-6 h-fit bg-opacity-90">
          <h3 className="font-bold text-lg mb-4 text-green-900">Filters</h3>
          <div className="mb-4">
            <label className="block font-medium mb-2">Category</label>
            <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="w-full border rounded px-3 py-2">
              {categories.map(cat => <option key={cat}>{cat}</option>)}
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Fuel Type</label>
            <select value={selectedFuel} onChange={e => setSelectedFuel(e.target.value)} className="w-full border rounded px-3 py-2">
              {fuelTypes.map(fuel => <option key={fuel}>{fuel}</option>)}
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Transmission</label>
            <select value={selectedTransmission} onChange={e => setSelectedTransmission(e.target.value)} className="w-full border rounded px-3 py-2">
              {transmissions.map(tr => <option key={tr}>{tr}</option>)}
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Price Range (${priceRange[0]} - ${priceRange[1]})</label>
            <input
              type="range"
              min={0}
              max={200}
              value={priceRange[1]}
              onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-full"
            />
            <input
              type="range"
              min={0}
              max={priceRange[1]}
              value={priceRange[0]}
              onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
              className="w-full mt-1"
            />
          </div>
          <button className="w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800 transition" onClick={() => {
            setSelectedCategory('All');
            setSelectedFuel('All');
            setSelectedTransmission('All');
            setPriceRange([0, 200]);
          }}>Reset Filters</button>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search/Filter Bar (Mobile) */}
          <div className="flex flex-col sm:flex-row gap-2 mb-6 md:hidden">
            <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="border rounded px-3 py-2 flex-1">
              {categories.map(cat => <option key={cat}>{cat}</option>)}
            </select>
            <select value={selectedFuel} onChange={e => setSelectedFuel(e.target.value)} className="border rounded px-3 py-2 flex-1">
              {fuelTypes.map(fuel => <option key={fuel}>{fuel}</option>)}
            </select>
            <select value={selectedTransmission} onChange={e => setSelectedTransmission(e.target.value)} className="border rounded px-3 py-2 flex-1">
              {transmissions.map(tr => <option key={tr}>{tr}</option>)}
            </select>
          </div>
          <input
            type="text"
            placeholder="Search by model, brand..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full max-w-md px-6 py-3 rounded-full shadow-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-lg mb-6"
          />

          {/* Car Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-16">
            {filteredCars.length === 0 ? (
              <div className="col-span-full text-center text-gray-500 text-xl">No cars found.</div>
            ) : (
              filteredCars.map(car => (
                <div key={car.id} className="bg-white bg-opacity-90 rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 w-full max-w-md mx-auto">
                  {car.image ? (
                    <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
                  ) : (
                    <div className="w-full h-48 flex items-center justify-center bg-gray-200 text-gray-400 text-2xl">No Image</div>
                  )}
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="text-xl font-bold text-gray-800">{car.name}</h2>
                      <span className="text-green-700 font-semibold text-lg">${car.price}/day</span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-3">
                      <span className="bg-gray-100 px-2 py-1 rounded">{car.year}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded">{car.seats} Seats</span>
                      <span className="bg-gray-100 px-2 py-1 rounded">{car.fuel}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded">{car.transmission}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded">{car.category}</span>
                    </div>
                    <button className="w-full py-2 mt-2 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800 transition">Book Now</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing; 