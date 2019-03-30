import React, { useState } from 'react';
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import { HomeContext } from '../Home'
import firebaseApp from '../../firebase'

const Provider = HomeContext.Provider

function RegisterPage(props) {
	const [state, setState] = useState({name: '',email:'', password:''})
	const [stateError, setStateError] = useState('')

	const handleSubmit =  async event => {
		event.preventDefault();

		try {
			const result = await firebaseApp.auth().createUserWithEmailAndPassword(state.email, state.password);

			if (result) {
				props.history.push({pathname: "../Login"})
			}
		} catch (err) {
			setStateError(err['message'])
		}

		//console.log(result);
		//alert("Name :" + state.name + " / email: " + state.email + " / " + "password: " + state.password)
	}
	
	const handleChange = event => {
		const name = event.target.name
		const value = event.target.value

		setState({...state, [name]: value})
	}

  return (
    <Provider value={{ state, setState }}>
      {/*<Header />*/}
      <section class="login-area pt-100 pb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <div class="basic-login">
                <h3 class="text-center mb-60">Signup From</h3>
                <form action="#" onSubmit={handleSubmit}>
                  <label for="name">Username <span>**</span></label>
                  <input id="name" name="name" type="text" onChange={handleChange} placeholder="Enter Username or Email address..." />
                  <label for="email-id">Email Address <span>**</span></label>
                  <input id="email-id" name="email" type="text" onChange={handleChange} placeholder="Enter Username or Email address..." />
                  <label for="pass">Password <span>**</span></label>
                  <input id="pass" name="password" type="password" onChange={handleChange} placeholder="Enter password..." />
                  <div class="mt-10"></div>
				  <p style={{color:'red'}}>
					  {stateError}
				  </p>
                  <button class="btn theme-btn-2 w-100">Register Now</button>
                  <div class="or-divide"><span>or</span></div>
                  <button class="btn theme-btn w-100">login Now</button>
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

export default RegisterPage;