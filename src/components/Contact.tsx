import React from 'react';

const Contact = () => {
  return (
    <div className="relative min-h-[80vh] w-full flex items-center justify-center">
      <div className="absolute inset-0 back-hero-bg"></div>
      <div className="absolute inset-0 bg-white bg-opacity-70"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <h2 className="text-3xl font-bold mb-2 text-green-900">Contact Us</h2>
        <p className="mb-8 text-gray-600 text-center max-w-lg">We'd love to hear from you! Fill out the form below or reach us directly at <span className='font-semibold text-green-900'>support@wheelz.com</span>.</p>
        <form className="bg-white shadow-md rounded-lg p-8 w-full max-w-md space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none" placeholder="Your name" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none" placeholder="Your email" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none" rows={4} placeholder="Your message" required></textarea>
          </div>
          <button type="submit" className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition">Send Message</button>
        </form>
        <div className="mt-8 text-gray-500 text-sm text-center">
          <div>Phone: <span className="text-green-900 font-medium">+1 234 567 890</span></div>
          <div>Address: <span className="text-green-900 font-medium">123 Car Lane, Auto City, USA</span></div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 