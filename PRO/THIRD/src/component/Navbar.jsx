import { NavLink } from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <nav className="py-4 bg-black text-white ">
                <div className="flex justify-between container mx-auto">
                    <div><span>iTask</span></div>
                    <ul className="flex gap-6">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/your-task">Your Task</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
