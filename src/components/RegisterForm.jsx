
      <form class="grid grid-cols-1 sm:grid-cols-2 gap-4" action="#" method="post" autocomplete="on">
        <!-- Personal identity fields -->
        <div>
          <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
          <input id="firstName" name="firstName" type="text" required placeholder="Brian"
            class="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none">
        </div>

        <div>
          <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label>
          <input id="lastName" name="lastName" type="text" required placeholder="Mbogo"
            class="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none">
        </div>

        <!-- Account identity fields -->
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
          <input id="username" name="username" type="text" required placeholder="Mbogo123"
            class="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none">
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input id="email" name="email" type="email" required placeholder="mbogo456@gmail.com"
            class="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none">
        </div>

        <!-- Contact and profile fields -->
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
          <input id="phone" name="phone" type="tel" required placeholder="+254 700 000 000"
            class="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none">
        </div>

        <div>
          <label for="dob" class="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input id="dob" name="dob" type="date" required
            class="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none">
        </div>

        <!-- Password fields -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input id="password" name="password" type="password" required placeholder="Enter password"
            class="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none">
        </div>

        <div>
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input id="confirmPassword" name="confirmPassword" type="password" required placeholder="Confirm password"
            class="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none">
        </div>

        <!-- Agreement checkbox -->
        <div class="sm:col-span-2 flex items-center space-x-2">
          <input id="terms" name="terms" type="checkbox" required
            class="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-400">
          <label for="terms" class="text-sm text-gray-700">
            I accept the <a href="terms.html" class="text-blue-500 hover:underline">Terms and Conditions</a>
          </label>
        </div>

        <!-- Submit button -->
        <button type="submit" class="sm:col-span-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Register
        </button>
      </form>