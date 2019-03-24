import React, { useState } from 'react';
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import { HomeContext } from '../Home'

const Provider = HomeContext.Provider

function LoginPage() {
	const [state, setState] = useState({email:'', password:'', bgd: ''})

	const handleSubmit = event => {
		//alert('A name was submitted: ' + state);
		alert("email: " + state.email + " / " + "password: " + state.password)
		event.preventDefault();
	}

	const handleChange = event => {
		//setState(event.target.value)
		let bg = '';
		if (event.target.value.length > 0) {
			bg = 'blue';
		}

		console.log(state);

		const name = event.target.name
		const value = event.target.value

		setState({...state,bgd : bg, [name]: value})

		/*
		if (event.target.id == "name") {
			setState({...state, email: event.target.value})

		} else if (event.target.id == "pass") {
			setState({...state, password: event.target.value})
		}
		*/
	}

  return (
    <Provider value={{ state, setState }}>
      <Header />
      <section className="login-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Login From</h3>
                <form action="#" onSubmit={handleSubmit}>
                  <label for="name">Email Address <span>**</span></label>
                  <input id="name" name="email" type="text" onChange={handleChange} style={{backgroundColor: state.bgd}} placeholder="Enter Username or Email address..." />
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

export default LoginPage;