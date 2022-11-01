import React from "react";
import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const Cart = () => {
	const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } = useCart();

	const removeAllItems = () => {
		confirmAlert({
			title: "Are you sure?",
			message: "All items will be removed.",
			buttons: [
				{
				
					label: "Yes",
					onClick: () => {
						for (const item of items) {
							removeItem(item.id);
						}
					},
				},
				{
					
					label: "No",
				},
			],
		});
	};

	if (isEmpty)
		return (
			<h2 className="text-primary text-center p-5 mt-3">
				{" "}
				Your cart is empty. Please, visit <NavLink to="/products" className="text-secondary">Product List</NavLink> to choose products.
			</h2>
		);
	return (
		<div>
			<section className="d-flex justify-content-center align-items-center p-5">
				<h1 className="text-primary text-center ">Total Unique Burgers: {totalUniqueItems}</h1>
				<button type="button" className="fs-5 btn btn-danger text-light mx-4" onClick={removeAllItems}>
					Remove All Items
				</button>
			</section>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Product</th>
						<th scope="col">Price</th>
						<th scope="col">Quantity</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					{items.map((fd, i) => (
						<tr className="align-middle">
							<th scope="row" className="align-middle">{i + 1}</th>
							<td>
								<img src={fd.img} alt="error" className="w-25 shadow"></img>
								<h3 className="text-primary p-2">{fd.title}</h3>
							</td>
							<td className="align-middle">
								<h1>${fd.price}</h1>
							</td>
							<td className="align-middle">
								<h1>x{fd.quantity}</h1>
							</td>
							<td className="align-middle">
								<tr>
									<button className="fs-5 btn btn-primary text-light w-100" onClick={() => updateItemQuantity(fd.id, fd.quantity - 1)}>
										-
									</button>
								</tr>
								<tr>
									<button className="fs-5 my-1 btn btn-primary text-light w-100" onClick={() => updateItemQuantity(fd.id, fd.quantity + 1)}>
										+
									</button>
								</tr>
								<tr>
									<button
										type="button"
										className="fs-5 btn btn-danger text-light w-100"
										onClick={() => {
											removeItem(fd.id);
										}}>
										Remove
									</button>
								</tr>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Cart;
