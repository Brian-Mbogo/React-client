const navLinks = [
  { id: 'home', label: 'Home', href: '/login' },
  { id: 'login', label: 'Login', href: '/login' },
  { id: 'register', label: 'Register', href: '/register' },
  { id: 'dashboard', label: 'Dashboard', href: '/dashboard' },
]

export default function Header({ activePage = '' }) {
  return (
    <header className="bg-blue-400">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <img className="mr-2 h-9 w-auto" src="/assets/images/logo.png" alt="Charity Minds logo" />
          <span className="font-bold">CHARITY MINDS</span>
        </div>

        <ul className="ml-auto flex gap-4">
          {navLinks.map((link) => {
            const isActive =
              activePage.toLowerCase() === link.id || (link.id === 'home' && activePage.toLowerCase() === 'login')

            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={
                    isActive
                      ? 'font-semibold text-white underline underline-offset-4'
                      : 'text-red-700 transition hover:text-white'
                  }
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
