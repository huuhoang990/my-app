import React, {useState, useContext} from 'react'
import useCart from '../../hooks/userCart'
import {HomeContext} from '../../pages/Home'
import {Link} from 'react-router-dom'

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
						<Link to={`/product/${props.id}`} title="Quick View">
							<i className="fas fa-search"></i>
						</Link>
						{/*<a href="" title="Quick View">
							<i className="fas fa-search"></i>
						</a>*/}
						
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