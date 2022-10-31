import React from "react";
import Item from "../components/Item";
import Products from "../data/burger";

const ProductList = () => {
	return (
		<>
			<h1 className="text-primary text-center p-3">Please, make your order.</h1>
			<div className="row mx-3 g-3">
				{Products.map((fd, i) => {
					return <Item key={i} img={fd.img} title={fd.title} price={fd.price} addProduct={fd} />;
				})}
			</div>
		</>
	);
};

export default ProductList;
