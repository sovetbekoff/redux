import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>home</button>
      <button onClick={() => navigate("/add")}>add</button>
    </div>
  );
};

export default Navbar;
