import { connect } from 'react-redux'
import Register from './'
import { sendRegister } from '../../redux/Register/RegisterAction'

const mapStateToProps = (state) => ({
	user: state.registerReducer.user,
	fail: state.registerReducer.fail,
	load: state.registerReducer.load
})

const mapDispatchToProps = {
	sendRegister:sendRegister
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)