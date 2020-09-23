import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                Google Books
            </Link>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="/search"
                    className={
                        window.location.pathname === "/" ||
                        window.location.pathname === "/search" ? "nav-link active" : "nav-link"} >
                        Search
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/home"
                    className={
                        window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
                        Saved
                    </Link>
                </li>
            </ul>
        </nav>
    )
}