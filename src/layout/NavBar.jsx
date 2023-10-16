import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <div className="nav-content">
                <div className="nav-title">
                    <h3>
                    Vinsensius Robby Anggara
                    </h3>
                </div>
                <ul>
                    <li>
                        <NavLink to={"/"}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"about"}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"contact"}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default NavBar;