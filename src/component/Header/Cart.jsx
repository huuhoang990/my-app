import React, {useState} from 'react'

export default function Cart(props) {
	let arrProductSelect = props.products?props.products:[]

	if (props.products != null && props.products.length > 0) {
		arrProductSelect = props.products.filter(function(element) {
			return element.quantity > 0
		})
	}

	const [numberProduct, SetNumberProduct] = useState(0)
	let numberSelectProduct = 0
	let total = 0

	if (arrProductSelect.length > 0) {
		arrProductSelect.forEach(element => {
			total += element.final_price * element.quantity
			numberSelectProduct += element.quantity
		});
	}

	function ProductCart(props) {
		const deleteProduct = (productId) => {
			arrProductSelect.forEach((element, idx) => {
				if (element.id == productId) {
					arrProductSelect = arrProductSelect.splice(idx, 1);
					SetNumberProduct(arrProductSelect)
					return;
				}
			});

		}

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
					<a href="javascript:void(0)" >
						<i  className="far fa-trash-alt"></i>
					</a>
				</div>
			</li>
			)
		} else {
			return ('')
		}
	}

	return(
		<li className="d-shop-cart"><a href="#"><i className="fas fa-shopping-cart"></i> <span className="cart-count">{numberSelectProduct}</span></a>
		<ul className="minicart">
			{
			arrProductSelect && arrProductSelect.map(element =>
				<ProductCart
					key={element.product_id}
					id={element.product_id}
					productName={element.name}
					finalPrice={element.final_price}
					previousPrice={element.price}
					quantity={element.quantity}
				/>
			)
			}
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
	)
}

/*
import React, {useState ,useContext} from 'react'
//import {HomeContext} from '../../pages/Home'

export default function Cart(props) {
	const homeContext = useContext(HomeContext)
	var arrProductSelect = homeContext.product_select
	const [numberProduct, SetNumberProduct] = useState(0)
	let numberSelectProduct = 0
	let total = 0

	if (arrProductSelect.length > 0) {
		arrProductSelect.forEach(element => {
			total += element.finalPrice * element.quantity
			numberSelectProduct += element.quantity
		});
	}

	function ProductCart(props) {
		const deleteProduct = (productId) => {
			arrProductSelect.forEach((element, idx) => {
				console.log(productId);

				if (element.id == productId) {
					arrProductSelect = arrProductSelect.splice(idx, 1);
					SetNumberProduct(arrProductSelect)
					return;
				}
			});
			console.log(arrProductSelect);

		}

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
					<a href="javascript:void(0)" id={props.id} onClick={() => deleteProduct(`${props.id}`)}>
						<i id={props.id} className="far fa-trash-alt"></i>
					</a>
				</div>
			</li>
			)
		} else {
			return ('')
		}
	}

	return(
		<li className="d-shop-cart"><a href="#"><i className="fas fa-shopping-cart"></i> <span className="cart-count">{numberSelectProduct}</span></a>
		<ul className="minicart">
			{
			arrProductSelect && arrProductSelect.map(element =>
								<ProductCart
									key={element.id}
									id={element.id}
									productName={element.productName}
									finalPrice={element.finalPrice}
									previousPrice={element.previousPrice}
									quantity={element.quantity}
								/>
					)
			}
			<li>
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
			</li>
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
	)
}
*/