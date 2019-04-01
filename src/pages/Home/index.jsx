import React, { useState } from 'react';
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import ProductList from '../../component/ProductList'
import logo from '../../assets/logo_shop.png';
import './Home.css';


export const HomeContext = React.createContext()
export const Provider = HomeContext.Provider

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