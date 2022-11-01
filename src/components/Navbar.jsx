import { React } from "react";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
	const { totalItems } = useCart();

	return (
		<nav className="navbar navbar-expand-lg bg-light mt-0 sticky-top shadow">
			<div className="container-fluid">
				<Link className="navbar-brand bg-primary text-light rounded-pill fw-bolder p-3 px-4" to="/" end>
					<FontAwesomeIcon icon={faBurger} className="fs-3 icon" /> Burger Cho
				</Link>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item mx-2">
							<NavLink className="fw-bolder nav-link fs-5 px-3" aria-current="page" to="/" end>
								Home
							</NavLink>
						</li>
						<li className="nav-item mx-2">
							<NavLink className="fw-bolder nav-link fs-5 px-3" to="/products">
								Product List
							</NavLink>
						</li>
					</ul>
					<Link className="btn btn-primary text-light me-3 mb-3 mb-lg-0" to="/cart">
						Cart ({totalItems})
					</Link>

					<form className="d-flex" role="search" onSubmit={props.submitFunction}>
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={props.changeFunction} />
						<Link to="/products" className="btn btn-primary text-light" type="button">
							Search
						</Link>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
