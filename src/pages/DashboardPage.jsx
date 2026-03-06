import Header from '../components/Header.jsx'
import DashboardContent from '../components/DashboardContent.jsx'
import Footer from '../components/Footer.jsx'

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-100 text-gray-900">
      <Header activePage="dashboard" />
      <DashboardContent />
      <Footer pageName="Dashboard" />
    </main>
  )
}
