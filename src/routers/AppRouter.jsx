import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Navbar from "../components/Navbar.jsx";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Cart from "../pages/Cart";

const AppRouter = () => {
	// const navigate = useNavigate();

	const [keyword, setKeyword] = useState("Burger");

	const handleChange = (e) => {
		setKeyword((prevKey) => (prevKey = e.target.value));
	};

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 		navigate("/products")

	// };

	return (
		<BrowserRouter>
			<CartProvider>
				<Navbar
					changeFunction={handleChange}
					// submitFunction={handleSubmit}
				/>
				<div className="container">
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/products" element={<ProductList keyword={keyword} />}></Route>
						<Route path="/cart" element={<Cart />}></Route>
					</Routes>
				</div>
			</CartProvider>
		</BrowserRouter>
	);
};

export default AppRouter;
