import React, {useState ,useContext} from 'react'
import useCart from '../../hooks/userCart';
import {HomeContext} from '../../pages/Home'

export default function Header() {
	const homeContext = useContext(HomeContext);
	const arrProductSelect = homeContext.product_select
	let total = 0

	arrProductSelect.forEach(element => {
		total += element.finalPrice * element.quantity;
	});

	function ProductCart(props) {
		if (props.productName != null) {
			return (
			<li>
				<div className="cart-img">
					<a href="#">
						<img src="./assets/pro1.jpg" alt=""/>
					</a>
				</div>
				<div className="cart-content">
					<h3>
						<a href="#">{props.productName}</a>
					</h3>
					<div className="cart-price">
						<span className="new">$ {props.finalPrice}</span>
						<span>
							<del>$ {props.previousPrice}</del>
						</span>
						<span> (x{props.quantity})</span>
					</div>
				</div>
				<div className="del-icon">
					<a href="#">
						<i className="far fa-trash-alt"></i>
					</a>
				</div>
			</li>
			)
		} else {
			return ('')
		}
	}

	return(
		<header>
		<div id="header-sticky" className="header-area box-90 sticky-header">
			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-5 d-flex align-items-center pos-relative">
						<div className="logo">
							<a href="#"><img src="./assets/logo_shop.png" alt=""/></a>
						</div>

						<div className="category-menu">
							<h4>Category</h4>
							<ul>
								<li><a href="#"><i className="fas fa-shopping-cart"></i> Table lamp</a></li>
								<li><a href="#"><i className="fas fa-shopping-cart"></i> Furniture</a></li>
								<li><a href="#"><i className="fas fa-shopping-cart"></i> Chair</a></li>
								<li><a href="#"><i className="fas fa-shopping-cart"></i> Men</a></li>
								<li><a href="#"><i className="fas fa-shopping-cart"></i> Women</a></li>
								<li><a href="#"><i className="fas fa-shopping-cart"></i> Cloth</a></li>
								<li><a href="#"><i className="fas fa-shopping-cart"></i> Trend</a></li>
							</ul>
						</div>
					</div>
					<div className="col-xl-8 col-lg-6 col-md-8 col-8 d-none d-xl-block">
						<div className="main-menu text-center">
							<nav id="mobile-menu" style={{display:'block'}}>
								<ul>
									<li>
										<a href="#">Home</a>
									</li>
									<li>
										<a href="#">Products </a>
									</li>
									<li>
										<a href="#">Pages</a>
										<ul className="submenu">
											<li>
												<a href="#">About Us</a>
											</li>

											<li>
												<a href="#">Contact Us</a>
											</li>
											<li>
												<a href="#">login</a>
											</li>
											<li>
												<a href="#">Register</a>
											</li>
											<li>
												<a href="#">Shoping Cart</a>
											</li>
											<li>
												<a href="#">Checkout</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Contact</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
					<div className="col-xl-2 col-lg-6 col-md-6 col-5 col-sm-7 pl-0">
						<div className="header-right f-right">
							<ul>
								<li className="search-btn">
									<a className="search-btn nav-search search-trigger" href="#"><i className="fas fa-search"></i></a>
								</li>
								<li className="login-btn"><a href="#"><i className="far fa-user"></i></a></li>
								<li className="d-shop-cart"><a href="#"><i className="fas fa-shopping-cart"></i> <span className="cart-count">3</span></a>
									<ul className="minicart">
										{
										arrProductSelect.map(element =>
															<ProductCart
																key={element.id}
																productName={element.productName}
																finalPrice={element.finalPrice}
																previousPrice={element.previousPrice}
																quantity={element.quantity}
															/>
												)
										}
										<ProductCart product={arrProductSelect}></ProductCart>
										{/*<li>
											<div className="cart-img">
												<a href="#">
													<img src="./assets/pro1.jpg" alt=""/>
												</a>
											</div>
											<div className="cart-content">
												<h3>
													<a href="#">Black &amp; White Shoes</a>
												</h3>
												<div className="cart-price">
													<span className="new">$ 229.9</span>
													<span>
														<del>$239.9</del>
													</span>
												</div>
											</div>
											<div className="del-icon">
												<a href="#">
													<i className="far fa-trash-alt"></i>
												</a>
											</div>
										</li>
										<li>
											<div className="cart-img">
												<a href="#">
													<img src="./assets/pro2.jpg" alt=""/>
												</a>
											</div>
											<div className="cart-content">
												<h3>
													<a href="#">Black &amp; White Shoes</a>
												</h3>
												<div className="cart-price">
													<span className="new">$ 229.9</span>
													<span>
														<del>$239.9</del>
													</span>
												</div>
											</div>
											<div className="del-icon">
												<a href="#">
													<i className="far fa-trash-alt"></i>
												</a>
											</div>
										</li>
										<li>
											<div className="cart-img">
												<a href="#">
													<img src="./assets/pro3.jpg" alt=""/>
												</a>
											</div>
											<div className="cart-content">
												<h3>
													<a href="#">Black &amp; White Shoes</a>
												</h3>
												<div className="cart-price">
													<span className="new">$ 229.9</span>
													<span>
														<del>$239.9</del>
													</span>
												</div>
											</div>
											<div className="del-icon">
												<a href="#">
													<i className="far fa-trash-alt"></i>
												</a>
											</div>
										</li>*/}
										<li>
											<div className="total-price">
												<span className="f-left">Total:</span>
												<span className="f-right">$ {total}</span>
											</div>
										</li>
										<li>
											<div className="checkout-link">
												<a href="#">Shopping Cart</a>
												<a className="red-color" href="#">Checkout</a>
											</div>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-12 d-xl-none">
						<div className="mobile-menu"></div>
					</div>
				</div>
			</div>
		</div>
	</header>
	)
}