import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p>© 2023 My Website. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Layout