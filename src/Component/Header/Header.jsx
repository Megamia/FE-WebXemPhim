import React from "react";
import Nav from "../Nav/Nav";

const Header = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-[30] ">
            <Nav/>
        </div>
    );
};

export default Header;