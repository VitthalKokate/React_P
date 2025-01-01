import React from 'react';
import { Link } from 'react-router-dom';
export default function Home() {
    return (
     <>
      <section id="services" class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold mb-8">Our Services</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div class="bg-gray-200 p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold mb-4">Service 1</h3>
          <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="bg-gray-200 p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold mb-4">Service 2</h3>
          <p class="text-gray-600">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="bg-gray-200 p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold mb-4">Service 3</h3>
          <p class="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        </div>
      </div>
    </div>
  </section>
     </>
    );
}
