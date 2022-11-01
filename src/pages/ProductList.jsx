import React from "react";
import Item from "../components/Item";
import Products from "../data/burger";

const ProductList = (props) => {
	console.log(props.keyword);

	return (
		<>
			<h1 className="text-primary text-center p-3">Please, make your order.</h1>
			<div className="row mx-3 g-3">
				{Products.filter((product) => product.title.toLowerCase().includes(props.keyword.toLowerCase())).map((fd, i) => {
					return (
						<div className="col-12 col-md-6 col-lg-3">
							<Item key={i} img={fd.img} title={fd.title} price={fd.price} addProduct={fd} />
						</div>
					);
				})}
			</div>
		</>
	)
};

export default ProductList;
