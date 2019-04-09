import React from 'react';

export default function RegisterForm(props) {
	return (
		<section class="login-area pt-100 pb-100">
		<div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <div class="basic-login">
                <h3 class="text-center mb-60">Signup From</h3>
                <form action="#" onSubmit=''>
                  <label for="name">Username <span>**</span></label>
                  <input id="name" name="name" type="text" onChange='' placeholder="Enter Username or Email address..." />
                  <label for="email-id">Email Address <span>**</span></label>
                  <input id="email-id" name="email" type="text" onChange='' placeholder="Enter Username or Email address..." />
                  <label for="pass">Password <span>**</span></label>
                  <input id="pass" name="password" type="password" onChange='' placeholder="Enter password..." />
                  <div class="mt-10"></div>
				  <p style={{color:'red'}}>
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
	);
}