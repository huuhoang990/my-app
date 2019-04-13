import React, {useState, useContext} from 'react'
//import {HomeContext} from '../../pages/Home'
import {Link} from 'react-router-dom'

export default function ProductItem(props) {
	//const homeContext = useContext(HomeContext);
	const [selectProduct, setSelectProduct] = useState('');
	const selectItem = () => {
		for (let i = 0; i < props.products.length; i++) {
			if (props.products[i].product_id == props.product_id) {
				if (typeof props.products[i].quantity === 'undefined') {
					props.products[i].quantity = 1
				} else {
					props.products[i].quantity = props.products[i].quantity + 1
				}

				break
			}
		}

		props.setArrProduct(props.products)
		setSelectProduct("(Da chon san pham nay)")
	}

	return (
		<div className="col-xl-4 col-lg-6 col-md-6">
			<div className="product-wrapper mb-50">
				<div className="product-img mb-25">
					<a href="#">
						<img src={props.img_url} alt=""/>
					</a>
					<div className="product-action text-center">
						<a onClick={selectItem} href="javascript:void(0)" title="Shoppingb Cart">
							<i className="fas fa-shopping-cart"></i>
						</a>
						<Link to={`/product/${props.id}`} title="Quick View" >
							<i className="fas fa-search"></i>
						</Link>
					</div>
					<div className="sale-tag">
						<span className="sale">{props.id}</span>
					</div>
				</div>
				<div className="product-content pr-0">
					<div className="pro-cat mb-10">
						<a href="#">{props.shop_name}</a>
						<p>{selectProduct}</p>
					</div>
					<h4>
						<a href="#">{props.name}</a>
					</h4>
					<div className="product-meta">
						<div className="pro-price">
							<span>{parseInt(props.final_price).toLocaleString()}VND</span>
							<span className="old-price">{parseInt(props.price).toLocaleString()}VND</span>
						</div>
					</div>
				</div>
			</div>
		</div>	);
}


/*
import React, {useState, useContext} from 'react'
import useCart from '../../hooks/userCart'
import {HomeContext} from '../../pages/Home'

export default function ProductItem(props) {
	const homeContext = useContext(HomeContext);

	const [selectProduct, setSelectProduct] = useState('');

	const selectItem = () => {
		setSelectProduct("(Da chon san pham nay)")
		homeContext.callSetProduct(props)
	}

	return (
		<div className="col-xl-4 col-lg-6 col-md-6">
			<div className="product-wrapper mb-50">
				<div className="product-img mb-25">
					<a href="#">
						<img src={props.imageProduct} alt=""/>
					</a>
					<div className="product-action text-center">
						<a onClick={selectItem} href="javascript:void(0)" title="Shoppingb Cart">
							<i className="fas fa-shopping-cart"></i>
						</a>
						<a href="#" title="Quick View">
							<i className="fas fa-search"></i>
						</a>
						
					</div>
					<div className="sale-tag">
						<span className="sale">{props.id}</span>
					</div>
				</div>
				<div className="product-content pr-0">
					<div className="pro-cat mb-10">
						<a href="#">{props.shopName}</a>
						<p>{selectProduct}</p>
					</div>
					<h4>
						<a href="#">{props.productName}</a>
					</h4>
					<div className="product-meta">
						<div className="pro-price">
							<span>{props.finalPrice}</span>
							<span className="old-price">${props.previousPrice}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
*/