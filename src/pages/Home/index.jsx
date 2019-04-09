import React from "react"
import './Home.css';
import Footer from "../../component/Footer"
import ProductListContainer from "../../component/ProductList/ProductListContainer"

function Home(props) {
	return (
		<>
			<ProductListContainer/>
			<Footer/>
		</>
	)
}

export default Home;














/*
import React, { useState } from 'react';
import './Home.css';
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import ProductList from '../../component/ProductList'
import logo from '../../assets/logo_shop.png';
import store from '../../redux/store'
import { loginRequest, loginSuccess, loginFail } from '../../redux/login/loginAction'


export const HomeContext = React.createContext()
export const Provider = HomeContext.Provider
store.subscribe(() => {
	var state = store.getState()
	console.log(state)
})
store.dispatch(loginRequest())

store.dispatch(loginSuccess())
store.dispatch(loginFail())

function Home() {
	const [listSelectProduct, setSelectProduct] = useState([]);

	const callSetProduct = param => {
		let checkUnique = false;
		const objProduct = {...param, quantity : 1};

		for (let i = 0; i < listSelectProduct.length; i++) {
			if (listSelectProduct[i].id === param.id) {
				listSelectProduct[i].quantity = listSelectProduct[i].quantity + 1;
				checkUnique =true;
				break;
			}
		}

		if (checkUnique === false) {
			setSelectProduct([...listSelectProduct, objProduct])
		} else {
			setSelectProduct([...listSelectProduct])
		}
		
	}

    return (
		<Provider value={{product_select: listSelectProduct, callSetProduct}}>
			<Header/>
			<ProductList/>
			<Footer/>
		</Provider>
    );
}

export default Home;
*/