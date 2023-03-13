import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Button from "./Button";

function Navbar() {
	return (
		<div
			style={{
				display: "flex",
				maxWidth: "500px",
				height: "100px",
				width: "100%",
				justifyContent: "space-between",
				alignItems: "center",
				margin: "0 auto",
			}}
		>
			{/* <Link to="/">Home</Link>
			<Link to="/products">Products</Link>
			<Link to="/about">About us</Link> */}

			<NavLink to="/">Home</NavLink>
			<NavLink to="/products">Products</NavLink>
			<NavLink to="/about">About us</NavLink>
		</div>
	);
}

export default Navbar;
