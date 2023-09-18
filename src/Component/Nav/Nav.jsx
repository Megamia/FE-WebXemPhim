import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar, faQuestion } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div style={{ width: '50%' }}>
                <NavLink to="/Home">
                    Donate
                    <span style={{ display: "inline-block" }}>
                        <FontAwesomeIcon icon={faSackDollar} />
                    </span>
                </NavLink>
            </div>
            <div style={{ width: '50%' }}>
                <NavLink to="/Footer">
                    Chưa phát triển
                    <span style={{ display: "inline-block" }}>
                        <FontAwesomeIcon icon={faQuestion} />
                    </span>
                </NavLink>
            </div>
        </div>
    );
};

export default Nav;