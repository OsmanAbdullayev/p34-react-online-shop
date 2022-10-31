import React from "react";
import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";

const Cart = () => {
	const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } = useCart();

	if (isEmpty)
		return (
			<div className="bg-warning p-4 mt-3 rounded-pill text-center fs-5">
				Your cart is empty. Please, visit{" "}
				<NavLink to="/products">
					Product List
				</NavLink>{" "}
				to choose products.
			</div>
		);
	return (
		<table class="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Product</th>
					<th scope="col">Price</th>
					<th scope="col">Amount</th>
					<th scope="col">Action</th>
				</tr>
			</thead>
			<tbody>
				{items.map((fd,i)=> (
                    <tr className="align-middle">
					<th scope="row">{i+1}</th>
					<td><img src={fd.img} alt="error" className="w-25"></img><h3 className="text-primary p-2">{fd.title}</h3></td>
					<td><h1>${fd.price}</h1></td>
					<td><h1>1</h1></td>
					<td>
						<button className="btn btn-primary text-light" onClick={()=>{removeItem(fd.id)}}>Remove</button>
					</td>
				</tr>
                ))}
			</tbody>
		</table>
	);
};

export default Cart;
