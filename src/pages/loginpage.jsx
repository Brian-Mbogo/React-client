import LoginHeader from '../components/loginHeader.jsx'
import LoginForm from '../components/loginForm.jsx'
import LoginFooter from '../components/loginFooter.jsx'

// Login page container mirrors the old page body styles.
export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-100 text-gray-900">
      <LoginHeader />
      <LoginForm />
      <LoginFooter />
    </main>
  )
}
