import React from "react";
import { useCart } from "react-use-cart";

const Item = ({ img, title, price, addProduct }) => {
	const { addItem } = useCart()
	return (
		
			<div className="card shadow overflow-hidden">
				<figure className="overflow-hidden">
					<img src={img} className="card-img-top object-fit h-100" alt="..." />
				</figure>
				<div className="card-body">
					<h5 className="card-title text-primary">{title}</h5>
					<h4 className="card-text text-end">${price}</h4>
					<button onClick={() => addItem(addProduct)} className="btn btn-primary text-light">
						Add to Cart
					</button>
				</div>
			</div>
		
	)
}
export default Item
