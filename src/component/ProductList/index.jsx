import React, {useState} from 'react';
import ProductItem from './../ProductItem/'
import SearchBar from './search'
import apiListProduct from '../../dataProductList.json'

export default function ProductList() {
	var arrProduct = apiListProduct['data'];
	const [listProduct, setListProduct] = useState(arrProduct);

	const orderAToZ = () => {
		var orderListProduct = listProduct.sort(function(a, b) {
			let str1 = a.name.toLowerCase()
			let str2 = b.name.toLowerCase()

			return str1.localeCompare(str2)
		});

		setListProduct([...orderListProduct])
	}

	const orderZToA = () => {
		let orderListProduct = listProduct.sort(function(a, b) {
			let str1 = a.name.toLowerCase()
			let str2 = b.name.toLowerCase()

			return str2.localeCompare(str1)
		});

		setListProduct([...orderListProduct])
	}

	const orderLowToHigh = () => {
		let orderListProduct = listProduct.sort(function(a, b) {
			return parseInt(a.final_price) > parseInt(b.final_price) ? 1 : -1
		});

		setListProduct([...orderListProduct])
	}

	const orderHighToLow = () => {
		let orderListProduct = listProduct.sort(function(a, b) {
			return parseInt(a.final_price) < parseInt(b.final_price) ? 1 : -1
		});

		setListProduct([...orderListProduct])
	}

	const orderBestSell = () => {
		let orderListProduct = listProduct.sort(function(a, b) {
			return parseInt(a.order_count_dd_1000_cod) < parseInt(b.order_count_dd_1000_cod) ? 1 : -1
		});

		setListProduct([...orderListProduct])
	}

	return (
		<section className="shop-area pt-150 pb-100">
		<div className="container">
			<div className="row">
				<div className="col-xl-9 col-lg-8">
					<div className="row mb-10">
						<div className="col-xl-5 col-lg-6 col-md-6">
							<div className="product-showing mb-40">
								<p>Showing 1–22 of 32 results</p>
							</div>
						</div>
					</div>
					<div className="tab-content" id="myTabContent">
						<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
							<div className="row">
								{listProduct.map(element =><ProductItem
															key={element.id} 
															productName={element.name} 
															shopName={element.shop_name}
															imageProduct={element.img_url}
															finalPrice={element.final_price}
															previousPrice={element.price}
															id={element.id}
														/>
												)}
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-lg-4">
					<div className="sidebar-shop">
						<div className="shop-widget">
							<h3 className="shop-title">Search by</h3>
							<SearchBar></SearchBar>
						</div>

						<div className="shop-widget">
							<h3 className="shop-title">SHOP BY</h3>
							<ul className="shop-link">
								<li><a href="javascript:void(0)" onClick={orderAToZ}>Name: A-Z</a></li>
								<li><a href="javascript:void(0)" onClick={orderZToA}>Name: Z-A</a></li>
								<li><a href="javascript:void(0)" onClick={orderHighToLow}>Price: High to Low</a></li>
								<li><a href="javascript:void(0)" onClick={orderLowToHigh}>Price: Low to High</a></li>
								<li><a href="javascript:void(0)" onClick={orderBestSell}>Product: Top Sales</a></li>
							</ul>
						</div>

						<div className="shop-widget">
							<h3 className="shop-title">Recent Product</h3>
							<ul className="shop-sidebar-product">
								<li>
									<div className="side-pro-img">
										<a href="#"><img src="./assets/shop-rsp3.jpg" alt="" /></a>
									</div>
									<div className="side-pro-content">
										<div className="side-pro-rating">
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
										</div>
										<h5><a href="#">Raglan Baseball-Style</a></h5>
										<div className="side-pro-price">
											<span>$119.00 USD</span>
										</div>
									</div>
								</li>
								<li>
									<div className="side-pro-img">
										<a href="#"><img src="./assets/shop-rsp2.jpg" alt="" /></a>
									</div>
									<div className="side-pro-content">
										<div className="side-pro-rating">
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
										</div>
										<h5><a href="#">Raglan Baseball-Style</a></h5>
										<div className="side-pro-price">
											<span>$119.00 USD</span>
										</div>
									</div>
								</li>
								<li>
									<div className="side-pro-img">
										<a href="#"><img src="./assets/shop-rsp4.jpg" alt="" /></a>
									</div>
									<div className="side-pro-content">
										<div className="side-pro-rating">
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
										</div>
										<h5><a href="#">Raglan Baseball-Style</a></h5>
										<div className="side-pro-price">
											<span>$119.00 USD</span>
										</div>
									</div>
								</li>
							</ul>
						</div>

						<div className="shop-widget">
							<div className="shop-sidebar-banner">
								<a href="#"><img src="./assets/shop-banner.jpg" alt="" /></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	);
}