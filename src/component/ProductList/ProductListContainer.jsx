import { connect } from 'react-redux'
import { getProducts } from '../../redux/ProductList/ProductListAction'
import ProductList from './'

const mapStateToProps = (state) => ({
	products: state.productListReducer.result,
	error: state.productListReducer.error,
	load: state.productListReducer.load
})

const mapDispatchToProps = {
	getProducts: getProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)