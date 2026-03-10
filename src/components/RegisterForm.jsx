
import React from 'react';

function RegisterForm() {
  return (
    <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" action="#" method="post" autoComplete="on">
      {/* Personal identity fields */}
      <div> 
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
        <input id="firstName" name="firstName" type="text" required placeholder="Brian"
          className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none" />
      </div>
      <div>
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
        <input id="lastName" name="lastName" type="text" required placeholder="Mbogo"
          className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none" />    
      </div>
      {/* Account identity fields */} 
      <div> 
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
        <input id="username" name="username" type="text" required placeholder="Mbogo123"
          className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none" />    
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input id="email" name="email" type="email" required placeholder="mbogo456@gmail.com"
          className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none" />  
      </div>
      {/* Contact and profile fields */}
      <div> 
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input id="phone" name="phone" type="tel" required placeholder="+254 700 000 000"
          className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none" />    
      </div>
      <div>
        <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>      
        <input id="dob" name="dob" type="date" required
          className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none" />
      </div>
      {/* Password fields */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input id="password" name="password" type="password" required placeholder="Enter password"

          className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none" />
      </div>
      <div> 
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
        <input id="confirmPassword" name="confirmPassword" type="password" required placeholder="Confirm password"
          className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none" />
      </div>
      {/* Agreement checkbox */}
      <div className="sm:col-span-2 flex items-center space-x-2"> 
        <input id="terms" name="terms" type="checkbox" required
          className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-400" />
        <label htmlFor="terms" className="text-sm text-gray-700">
          I accept the <a href="terms.html" className="text-blue-500 hover:underline">Terms and Conditions</a>
        </label>
      </div>
    </form>
  );
}


export default RegisterForm;  
