import LoginButton from './loginButton.jsx'

// Login form extracted from charity-minds-2 Login page and converted to JSX.
export default function LoginForm() {
  return (
    <section className="flex flex-grow items-center justify-center px-6 py-8" aria-label="Login form section">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold">Login</h1>

        {/* JSX changes from HTML: class -> className, for -> htmlFor, and self-closing inputs. */}
        <form className="space-y-4" action="#" method="post" autoComplete="on">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="mbogo456@gmail.com"
              className="w-full rounded border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Enter password"
              className="w-full rounded border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="rememberMe" className="flex items-center space-x-2 text-sm text-gray-700">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-2 focus:ring-blue-400"
              />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <LoginButton />
        </form>

        <div className="mt-4 text-center text-gray-600">
          <p>
            Don&apos;t have an account?{' '}
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
