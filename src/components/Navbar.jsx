
const Navbar = () => {
    const navLink = <>
        <li tabIndex={0}>
            <details>
                <summary>Movies</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        <li tabIndex={0}>
            <details>
                <summary>Genres</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        <li tabIndex={0}>
            <details>
                <summary>Special Category</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
    </>
    return (
        <div>`
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl uppercase">Film Flick</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="relative mr-2">
                        <input placeholder="Search Here ..." className="px-8 py-2 rounded-lg" type="text" />
                        <button>
                            <img className="absolute top-[8px] right-5 w-6 " src="https://i.ibb.co/LpbrKzV/icons8-search-50.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;