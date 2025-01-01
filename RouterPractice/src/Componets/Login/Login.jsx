import React from 'react';
export default function Login (){
    return(
        <> 
     
  <section class="h-screen flex items-center justify-center">
    <div class="bg-white p-10 rounded-lg shadow-xl w-full max-w-sm">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
  
      <form action="#" method="POST">
        <div class="mb-5">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" required />
        </div>

 
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" name="password" class="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" required />
        </div>


        <div>
          <button type="submit" class="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300">Login</button>
        </div>
      </form>

     
      <div class="mt-4 text-center">
        <a href="#" class="text-sm text-blue-500 hover:text-blue-700">Forgot your password?</a>
      </div>
    </div>
  </section>

        </>
    )
}