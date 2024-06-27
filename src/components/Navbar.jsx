import { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [search, setSearch] = useState(true)
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
    const params = useParams()
    console.log(params);
    const searchInput = () => {
        setSearch(!search)
    }
    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const text = form.searchText.value.trim(); // Trim to remove leading/trailing spaces

        if (!text) return; // Exit if the search text is empty

        // Navigate with the search text as state or query parameter
        navigate('/search-result', { state: { query: text } });
    };
    return (
        <div>
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
                    <Link to="/" className="btn btn-ghost text-xl uppercase">Film Flick</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end invisible lg:visible">
                    <div className="relative mr-2">
                        <form onSubmit={handleSearch}>
                            <input name="searchText" placeholder="Search Here ..." className="px-8 py-2 rounded-lg" type="text" />
                            <button>
                                <img className="absolute top-[8px] right-5 w-6 " src="https://i.ibb.co/LpbrKzV/icons8-search-50.png" alt="" />
                            </button>
                        </form>
                    </div>
                </div>
                <div className="navbar-end lg:invisible visible">
                    <button onClick={() => searchInput()}>
                        {
                            search ?
                                <img className="w-6 mr-3" src="https://i.ibb.co/LpbrKzV/icons8-search-50.png" alt="" />
                                : <ImCross className="w-6 mr-3" />
                        }
                    </button>
                </div>
            </div>
            {
                !search && <div className="mb-4">
                    <div className="relative m-2">
                        <form onSubmit={handleSearch}>
                            <input placeholder="Search Here ..." className="px-8 py-2 w-full rounded" type="text" />
                            <button>
                                <img className="absolute top-[8px] right-5 w-6 " src="https://i.ibb.co/LpbrKzV/icons8-search-50.png" alt="" />
                            </button>
                        </form>
                    </div>
                </div>
            }
        </div>
    );
};

export default Navbar;