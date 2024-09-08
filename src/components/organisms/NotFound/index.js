import React from "react";
import Heading from "../../atoms/Heading";
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material";

const NotFound = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <Heading level="3">Page Not Found</Heading>
      <Link onClick={navigateToHome}>Home</Link>
    </div>
  );
};

export default NotFound;
