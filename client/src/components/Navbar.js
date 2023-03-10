import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const Navbar = () => {
    const doLogout = () => {
        Auth.deauthenticateUser();
        localStorage.removeItem("admin-id");
        window.location = "/admin/login";
    };

    return (
        <nav className="bg-blue-50 border-gray-200 py-2.5 rounded">
            <div className="container flex flex-wrap justify-between items-center mx-auto px-8">
                <Link to="/admin" className="flex items-center">
                    <span className="self-center text-2xl font-bold whitespace-nowrap">Dashboard</span>
                </Link>
                <div className="flex md:order-2">
                    <button type="button" onClick={doLogout} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Logout</button>
                    <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-4" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
                        <li>
                            <Link to="/admin/articles" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" aria-current="page">Articles</Link>
                        </li>
                        <li>
                            <Link to="/admin/add/article" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Add Article</Link>
                        </li>
                        <li>
                            <Link to="/admin/categories" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Categories</Link>
                        </li>
                        <li>
                            <Link to="/admin/videos" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Videos</Link>
                        </li>
                        <li>
                            <Link to="/admin/history" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">History</Link>
                        </li>
                        {localStorage.getItem("admin-id") === "1" && (<li>
                            <Link to="/admin/users" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Users</Link>
                        </li>)}
                    </ul>
                </div>
            </div>
            <hr className="mt-3 border-black" />
        </nav>

    );
};

export default Navbar;
