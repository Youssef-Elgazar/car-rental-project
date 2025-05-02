import React from 'react';

const About = () => {
  return (
    <div className="relative min-h-[80vh] w-full flex items-center justify-center">
      <div className="absolute inset-0 back-hero-bg"></div>
      <div className="absolute inset-0 bg-white bg-opacity-70"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <h2 className="text-3xl font-bold mb-2 text-green-900">About Us</h2>
        <p className="mb-8 text-gray-600 text-center max-w-2xl">
          Wheelz is dedicated to making car rentals easy, transparent, and accessible for everyone. With a passion for cars and a commitment to customer satisfaction, we connect drivers with their perfect ride—whether for business, adventure, or everyday needs.
        </p>
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl mb-8">
          <h3 className="text-xl font-semibold mb-2 text-green-800">Our Mission</h3>
          <p className="text-gray-700 mb-4">To provide a seamless, trustworthy, and enjoyable car rental experience for all our customers, powered by technology and a love for the open road.</p>
          <h3 className="text-xl font-semibold mb-2 text-green-800">Our Vision</h3>
          <p className="text-gray-700">To be the most customer-centric car rental platform, known for innovation, reliability, and a personal touch.</p>
        </div>
        <div className="w-full max-w-2xl">
          <h3 className="text-lg font-semibold mb-4 text-green-800">Meet Our Team</h3>
          <div className="flex flex-wrap gap-6 justify-center">
            {[1,2,3].map((i) => (
              <div key={i} className="flex flex-col items-center bg-white p-4 rounded shadow w-40">
                <div className="w-16 h-16 rounded-full bg-gray-200 mb-2 flex items-center justify-center text-2xl text-green-900 font-bold">{String.fromCharCode(64+i)}</div>
                <div className="font-medium text-gray-800">Team Member {i}</div>
                <div className="text-xs text-gray-500">Role {i}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 