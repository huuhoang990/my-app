import { connect } from 'react-redux'
import { getProducts, setArrProduct, getSearchProducts } from '../../redux/ProductList/ProductListAction'
import ProductList from './'

const mapStateToProps = (state) => ({
	products: state.productListReducer.result,
	error: state.productListReducer.error,
	load: state.productListReducer.load
})

const mapDispatchToProps = {
	getProducts: getProducts,
	setArrProduct: setArrProduct,
	getSearchProducts : getSearchProducts

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)