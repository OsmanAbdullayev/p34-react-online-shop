import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Navbar from "../components/Navbar.jsx";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Cart from "../pages/Cart";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<CartProvider>
				<Navbar />
				<div className="container">
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/products" element={<ProductList />}></Route>
						<Route path="/cart" element={<Cart />}></Route>
					</Routes>
				</div>
			</CartProvider>
		</BrowserRouter>
	);
};

export default AppRouter;
