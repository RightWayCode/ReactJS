import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = () => {
    return (
        <>
            <Navbar />
            <main className=" min-h-screen">
                <Outlet />
            </main>
            <footer className=" bg-black p-4 text-white text-center">
                &copy; All Right Reserved!
            </footer>
        </>
    )
}

export default Layout
