import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar, faQuestion } from '@fortawesome/free-solid-svg-icons';


const Nav = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/2">
                <NavLink to="/Home">
                    Donate
                    <span className="inline-block ml-2">
                        <FontAwesomeIcon icon={faSackDollar} />
                    </span>
                </NavLink>
            </div>
            <div className="w-1/2">
                <NavLink to="/Footer">
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