/*
import React, { useState } from 'react';
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import { HomeContext } from '../Home'
import firebaseApp from '../../firebase'
import {withRouter} from 'react-router-dom'

const Provider = HomeContext.Provider

function LoginPage(props) {
	const [state, setState] = useState({email:'', password:''})
	const [stateStatus, setStateStatus] = useState()
	console.log(props);

	const handleSubmit = async event => {
		event.preventDefault();

		try {
			const result = await firebaseApp.auth().signInWithEmailAndPassword(state.email, state.password);
			if (result) {
				props.history.push({
					pathname	: props.location.state.from.pathname
				})
			}
		} catch(err) {
			setStateStatus(err['message'])
		}
	}

	const handleChange = event => {
		//setState(event.target.value)
		let bg = '';
		if (event.target.value.length > 0) {
			bg = 'blue';
		}

		const name = event.target.name
		const value = event.target.value

		setState({...state, [name]: value})
	}

  return (
    <Provider value={{ state, setState }}>
      {<Header />}
      <section className="login-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Login From</h3>
                <form action="#" onSubmit={handleSubmit}>
                  <label for="name">Email Address <span>**</span></label>
                  <input id="name" name="email" type="text" onChange={handleChange} placeholder="Enter Username or Email address..." />
                  <label for="pass">Password <span>**</span></label>
                  <input id="pass" name="password" type="password" onChange={handleChange} placeholder="Enter password..." />
                  <div className="login-action mb-20 fix">
                    <span className="log-rem f-left">
                      <input id="remember" type="checkbox" />
                      <label for="remember">Remember me!</label>
                    </span>
                    <span className="forgot-login f-right">
                      <a href="#">Lost your password?</a>
                    </span>
                  </div>
				  <p style={{color:'red'}}>
					  {stateStatus}
				  </p>
                  <button className="btn theme-btn-2 w-100">Login Now</button>
                  <div className="or-divide"><span>or</span></div>
                  <button className="btn theme-btn w-100">Register Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Provider>
  );
}

export default withRouter(LoginPage);
*/