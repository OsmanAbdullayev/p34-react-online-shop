import React from "react";
import { Link } from "react-router-dom";
import Item from "../components/Item";
import Products from "../data/burger";

const Home = () => {
	let randomNumber = Math.floor(Math.random() * Products.length);

	return (
		<div className="bg-light p-5 my-5 d-flex flex-column justify-content-center align-items-center shadow">
			<h1 className="text-primary text-center py-1 mb-4"> Burger Cho - Our Goal is Your Satisfaction!</h1>
			<div class="ratio ratio-16x9">
				<iframe src="https://www.youtube.com/embed/f4nDHDMAKaE" title="YouTube video" allowfullscreen></iframe>
			</div>
			<h3 className="text-primary text-center py-3 mt-2">
				Burger of the day: <span className="text-warning">{Products[randomNumber].title}</span>
			</h3>


			<div className="row">
				<div className="col">
					<Item img={Products[randomNumber].img} title={Products[randomNumber].title} price={Products[randomNumber].price} addProduct={Products[randomNumber]} />
				</div>
			</div>
			<h5 className="text-center mt-4">
				Please, go to{" "}
				<Link to="/Products" className="text-primary">
					Product List
				</Link>{" "}
				for order.
			</h5>
		</div>
	);
};

export default Home;
