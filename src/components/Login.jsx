import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Login extends Component {

	constructor(props, context) {
		super(props, context);
	}



	render() {

		var styles = {
			verticalHeight:{
				height: "100vh"		
			}
		}

		return (
			<div className="row loginformbg">
				<div className="col-md-8">
					<img src={process.env.PUBLIC_URL+'/assets/img/loginBg.jpg'} style={styles.verticalHeight} />
				</div>
				<div className="col-md-3 offset-md-0 mt-5">

					<div className="logo mt-5">
			          <a href="#">
			            <img src={process.env.PUBLIC_URL+'/assets/img/healthnowlogo.png'} />
			          </a>
			        </div>
					<form className="mt-5">
					  <div class="form-group">
					    <label for="exampleInputEmail1">User ID</label>
					    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					    <small id="emailHelp" class="form-text text-muted">We'll never share your ID with anyone else.</small>
					  </div>
					  <div class="form-group">
					    <label for="exampleInputPassword1">Password</label>
					    <input type="password" class="form-control" id="exampleInputPassword1" />
					  </div>
					  <div class="form-group">
					    <label for="exampleFormControlSelect1">Role</label>
					    <select class="form-control" id="exampleFormControlSelect1">
					      <option>Hospital</option>
					      <option>Admin</option>
					      <option>Doctor</option>
					      <option>Insurance</option>
					    </select>
					  </div>
					  
					  <button type="submit" class="btn buttonBg">Submit</button>
					</form>
				</div>
			</div>
			
		);
	}
}

export default Login;