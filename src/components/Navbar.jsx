import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
	const { totalItems } = useCart();
	return (
		<nav className="navbar navbar-expand-lg bg-light mt-0">
			<div className="container-fluid">
				<NavLink className="navbar-brand bg-primary text-light rounded-pill fw-bolder p-3" to="/" end>
                <FontAwesomeIcon icon={faBurger} className="fs-3" /> Burger Cho
				</NavLink>
              
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
                      
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink className="nav-link" aria-current="page" to="/" end>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/products">
								Product List
							</NavLink>
						</li>
					</ul>
                    <NavLink className="btn btn-primary text-light me-3 mb-3 mb-lg-0" to="/cart">
						Cart({totalItems})
					</NavLink>
					
					<form className="d-flex" role="search">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-primary text-light" type="submit">
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
