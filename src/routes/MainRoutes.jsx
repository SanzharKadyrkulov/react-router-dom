import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import AboutUsPage from "../pages/AboutUsPage";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../layouts/MainLayout";

function MainRoutes() {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/products" element={<ProductsPage />} />
				<Route path="/about" element={<AboutUsPage />} />
			</Route>
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}

export default MainRoutes;
