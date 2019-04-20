import { connect } from 'react-redux'
import ProductDetailItem from '../../component/ProductDetailItem/'

const mapStateToProps = (state) => ({
	result: state.productDetailReducer.result,
	error: state.productDetailReducer.error,
	load: state.productDetailReducer.load,
	productList:state.productListReducer.result
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailItem)