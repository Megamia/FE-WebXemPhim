import React, { useEffect, useState } from "react";
import Nav from "../../Nav/Nav";

const Header = () => {
  const [isHeaderVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const threshold = 100; // Ngưỡng cuộn trang để header biến mất

      setHeaderVisible(scrollTop < threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-16 z-30 transition-opacity duration-1000 ${
        isHeaderVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Nav />
    </div>
  );
};

export default Header;