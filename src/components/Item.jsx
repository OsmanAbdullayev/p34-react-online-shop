import React from "react";
import {useCart} from 'react-use-cart';

const Item = ({ img, title, price, addProduct }) => {
    const {addItem} = useCart();
	return (
		<article className="col-12 col-md-6 col-lg-3">
			<div className="card">
				<img src={img} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title text-primary">{title}</h5>
					<h4 className="card-text text-end">${price}</h4>
					<button onClick={()=>(addItem(addProduct))} className="btn btn-primary text-light">
						Add to Cart
					</button>
				</div>
			</div>
		</article>
	);
};

export default Item;
