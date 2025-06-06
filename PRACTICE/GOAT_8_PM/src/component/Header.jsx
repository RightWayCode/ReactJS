export const Header = () => {
    return (
        <>
            <nav className="mb-6 space-x-4 p-6 ">
                <a href="/cart" className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
                >
                    Cart
                </a>
                <a href="/calculation" className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                >
                    Calculator
                </a>
            </nav>
        </>
    )
}
