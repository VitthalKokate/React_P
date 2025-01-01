import React from 'react';

function About() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-4">About Us</h2>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to our website! We are a team of passionate individuals committed to bringing you the best services and experiences. 
        Our mission is to deliver high-quality content, engaging user experiences, and innovative solutions that meet your needs.
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
          <p className="text-gray-600">
            Our mission is to make a positive impact by offering valuable solutions and exceptional customer service. 
            We strive for excellence and aim to exceed your expectations in everything we do.
          </p>
        </div>
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
          <p className="text-gray-600">
            Our vision is to be the leading provider in our industry, fostering a community where innovation and collaboration drive 
            success. We aim to create lasting relationships with our clients and partners.
          </p>
        </div>
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Values</h3>
          <p className="text-gray-600">
            We believe in integrity, innovation, and inclusivity. These values guide every decision we make and ensure we stay true to 
            our commitment to delivering outstanding results for our clients.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
