import Header from '../components/Header.jsx'
import LoginForm from '../components/loginForm.jsx'
import Footer from '../components/Footer.jsx'

// Login page container mirrors the old page body styles.
export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-100 text-gray-900">
      <Header activePage="login" />
      <LoginForm />
      <Footer pageName="Login" />
    </main>
  )
}
