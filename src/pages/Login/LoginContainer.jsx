import { connect } from 'react-redux'
//import { getProducts } from '../../redux/ProductList/ProductListAction'
import Login from './'
import { sendLogin } from '../../redux/Login/LoginAction'

const mapStateToProps = (state) => ({
	user: state.loginReducer.user,
	error: state.loginReducer.error,
	load: state.loginReducer.load
})

const mapDispatchToProps = {
	sendLogin:sendLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)