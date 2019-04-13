import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import loginReducer from './Login/LoginReducer'
import registerReducer from './Register/RegisterReducer'
import productDetailReducer from './ProductDetail/ProductDetailReducer'
import productListReducer from './ProductList/ProductListReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
	loginReducer,
	registerReducer,
	productDetailReducer,
	productListReducer
})

const store = createStore(
	reducer,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
		)
)

export default store