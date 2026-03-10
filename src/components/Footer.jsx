/**
 * @param {{ pageName?: string }} props
 */
export default function Footer({ pageName = 'Charity Minds' }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="fixed bottom-0 w-full bg-blue-400 p-4 text-center text-white">
      &copy; {currentYear} {pageName} | Designed by Brian
  </footer>
  )
}
