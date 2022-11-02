import React from "react";
import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
	const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem, emptyCart, totalItems, cartTotal } = useCart();
	const removed = () => toast("Item removed successfully!");
	const checkedOut = () => toast("Checking out...");

	const removeAllItems = () => {
		confirmAlert({
			title: "Are you sure?",
			message: "All items will be removed.",
			buttons: [
				{
					label: "Yes",
					onClick: () => {
						emptyCart();
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
				Your cart is empty. Please, visit{" "}
				<NavLink to="/products" className="text-secondary">
					Product List
				</NavLink>{" "}
				to choose products.
			</h2>
		);
	return (
		<div>
			<section className="d-flex justify-content-center align-items-center mt-3 p-3">
				<h2 className="text-primary text-center m-0">Total Unique Burgers: {totalUniqueItems}</h2>
				<button type="button" className="fs-5 btn btn-danger text-light mx-4" onClick={removeAllItems}>
					Remove All Items
				</button>
			</section>
			<div className="table-responsive-sm">
				<table className="table">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Product Photo</th>
							<th scope="col">Product Name</th>
							<th scope="col">Price</th>
							<th scope="col">Quantity</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
						{items.map((fd, i) => (
							<tr className="align-middle">
								<th scope="row" className="align-middle">
									{i + 1}
								</th>
								<td>
									<img src={fd.img} alt="error" className="shadow"></img>
								</td>
								<td>
									<h3 className="text-primary">{fd.title}</h3>
								</td>
								<td className="align-middle">
									<h5>${fd.price * fd.quantity}</h5>
								</td>
								<td className="align-middle">
									<h5>x{fd.quantity}</h5>
								</td>
								<td className="align-middle">
									<tr>
										<button className="fs-5 btn btn-primary text-light" onClick={() => updateItemQuantity(fd.id, fd.quantity - 1)}>
											-
										</button>
									</tr>
									<tr>
										<button className="fs-5 my-1 btn btn-primary text-light" onClick={() => updateItemQuantity(fd.id, fd.quantity + 1)}>
											+
										</button>
									</tr>
									<tr>
										<button
											type="button"
											className="fs-5 btn btn-danger text-light"
											onClick={() => {
												removed();
												removeItem(fd.id);
											}}>
											Remove
										</button>
										<ToastContainer position="bottom-center" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
									</tr>
								</td>
							</tr>
						))}
						<tr>
							<th>Total</th>
							<td></td>
							<td></td>
							<td>
								<h3 className="text-danger">${cartTotal} </h3>
							</td>
							<td>
								<h3 className="text-danger">x{totalItems} </h3>
							</td>
							<td className="py-3">
								<button type="button" className="fs-5 btn btn-success text-light" onClick={checkedOut}>
									Checkout
								</button>
								<ToastContainer position="bottom-center" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />

							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Cart;
