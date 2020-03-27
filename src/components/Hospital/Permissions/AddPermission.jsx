import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from '../Hospital';

class AddPermission extends Component {

	constructor(props, context) {
		super(props, context);
	}





	render() {

		var styles ={
			textWhite:{
				color: 'white'			
			}

		};

		return (
			<div className="content">
		        <div className="row permissionheader">
		          <div className="col-md-12">
		            <h3 style={styles.textWhite}><strong>Add Permission</strong></h3>
		          </div>
		        </div>
        		<div className="row">
        			<div className="card">
        			  <div class="card-header">
					    
					  </div>
					  <div className="card-body">
						<div class="row">
						 
						  <div class="col-sm-6 offset-sm-3">
						    <label for="exampleFormControlTextarea1">Role<span className="color-red">*</span></label><br/>
						    <select class="w-100" style={{height: '80%'}}>
						    	<option>Doctor</option>
						    	<option>Receptionist</option>
						    	<option>Nurse</option>
						    </select>
						  </div>
						  <div class="col-sm-6 offset-sm-3 mt-4">
						    <label for="exampleFormControlTextarea1">Department<span className="color-red">*</span></label><br/>
						    <select class="w-100" style={{height: '80%'}}>
						    	<option>Cardiology</option>
						    	<option>Medicine</option>
						    	<option>Gynocology</option>
						    </select>
						  </div>
						  
						  <div class="col-sm-6 offset-sm-3 pt-4 text-left">
						  	<h4>Set Permissions</h4>
						  </div> 
						  <div class="col-sm-6 offset-sm-3 pt-3">
						    
						  	<table className="table">
							  <thead className="thead-info">
							    <tr>
							      <th scope="col">Permission ID</th>
							      <th scope="col">Permission</th>
							      <th scope="col">Access</th>    
							    </tr>
							  </thead>
							  <tbody>
							    <tr>
							      <th scope="row">P0023</th>
							      <td>Admin access</td>
							      <td class="text-center">
							      	<input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
								  	<span class="form-check-label" for="inlineRadio2" style={{color:'green'}}>Yes</span><br/>

								  	<input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
								  	<span class="form-check-label" for="inlineRadio2" style={{color:'red'}}>No</span>
								  </td>
							      
							    </tr>
							    <tr>
							      <th scope="row">P0443</th>
							      <td>User role access - Department</td>
							      <td class="text-center">
							      	<input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
								  	<span class="form-check-label" for="inlineRadio2" style={{color:'green'}}>Yes</span><br/>

								  	<input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
								  	<span class="form-check-label" for="inlineRadio2" style={{color:'red'}}>No</span>
								  </td>
							      
							    </tr>
							    <tr>
							      <th scope="row">P00445</th>
							      <td>User role access - Hospital</td>
							      <td class="text-center">
							      	<input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
								  	<span class="form-check-label" for="inlineRadio2" style={{color:'green'}}>Yes</span><br/>

								  	<input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
								  	<span class="form-check-label" for="inlineRadio2" style={{color:'red'}}>No</span>
								  </td>
							      
							    </tr>
							  </tbody>
							</table>

						   </div>

						   
						</div>
						<div class="row pb-4">
							<button type="button" className="col-sm-2 offset-sm-5 btn buttonBg">Submit</button>	
						</div>
					  </div>
					</div>
          		</div>

			</div>
		);
	}
}

export default AddPermission;