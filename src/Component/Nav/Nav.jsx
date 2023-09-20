import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar, faQuestion } from '@fortawesome/free-solid-svg-icons';


const Nav = () => {
    return (
        <div className="w-full h-[100px] bg-black flex items-center justify-center opacity-90 absolute top-0 left-0">
            <div className="w-1/4">
                <NavLink to="/Hometest" className=" text-white">
                    Donate
                    <span className="inline-block ml-2">
                        <FontAwesomeIcon icon={faSackDollar} />
                    </span>
                </NavLink>
            </div>
            <div className="w-1/4">
                <NavLink to="/Login" className=" text-white">
                    Login
                </NavLink>
            </div>
            <div className="w-1/4">
                <NavLink to="/Signup" className=" text-white">
                    Signup
                </NavLink>
            </div>
            <div className="w-1/4">
                <NavLink to="/Error404" className=" text-white">
                    Chưa phát triển
                    <span className="inline-block ml-2">
                        <FontAwesomeIcon icon={faQuestion} />
                    </span>
                </NavLink>
            </div>
        </div>
    );
};

export default Nav;