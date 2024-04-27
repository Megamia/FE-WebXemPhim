import React, { useState } from "react";
import "./TopRank.css";
const TopRank = () => {
  const [open, setOpen] = useState(false);

  const handleHover = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };
  return (
    <div className="text-white">
      <p onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        Hello World
      </p>
      <p className={`details ${open ? "active" : "inactive"}`}>abc</p>
    </div>
  );
};

export default TopRank;
