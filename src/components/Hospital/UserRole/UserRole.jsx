import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from '../Hospital';

class UserRole extends Component {

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
		            <h3 style={styles.textWhite}><strong>User Role</strong></h3>
		          </div>
		        </div>
        		<div className="row">
        			<div className="card">
        			  <div class="card-header">
					    <button type="button" className="btn buttonBg" data-toggle="modal" data-target="#deptModal">Add Role</button>
					  </div>
					  <div className="card-body">
					    <table className="table">
						  <thead className="thead-info">
						    <tr>
						      <th scope="col">Sl no</th>
						      <th scope="col">Role</th>
						      <th scope="col">Description</th>
						      <th scope="col">Status</th>
						      <th scope="col">Action</th>
						      <th scope="col">User List</th>
						      <th scope="col">Add User</th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      <th scope="row">1</th>
						      <td>Doctor</td>
						      <td>Lorem ipsum dolor is a dummy text.</td>
						      <td>Active</td>
						      <td><i className="fas fa-pen-square color-green"></i>&nbsp;&nbsp;&nbsp;<i className="fas fa-trash color-red"></i></td>
						      <td><button class="btn btn-sm btn-dark">View</button></td>
						       <td class="text-left" data-toggle="modal" data-target="#userModal"><i class="fas fa-user-plus"></i> Add</td>
						    </tr>
						    <tr>
						      <th scope="row">2</th>
						      <td>Receptionist</td>
						      <td>Just writing texts to fill up the space.</td>
						      <td>Active</td>
						      <td><i className="fas fa-pen-square color-green"></i>&nbsp;&nbsp;&nbsp;<i className="fas fa-trash color-red"></i></td>
						      <td><button class="btn btn-sm btn-dark">View</button></td>
						       <td class="text-left"><i class="fas fa-user-plus"></i> Add</td>
						    </tr>
						    <tr>
						      <th scope="row">3</th>
						      <td>Nurse</td>
						      <td>Lorem ipsum dolor</td>
						      <td>Active</td>
						      <td><i className="fas fa-pen-square color-green"></i>&nbsp;&nbsp;&nbsp;<i className="fas fa-trash color-red"></i></td>
						      <td><button class="btn btn-sm btn-dark">View</button></td>
						       <td class="text-left"><i class="fas fa-user-plus"></i> Add</td>
						    </tr>
						  </tbody>
						</table>

						
					  </div>
					</div>
          		</div>

	      		
	      		<div class="modal" tabindex="-1" role="dialog" id="deptModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div class="modal-dialog" role="document">
				    <div class="modal-content">
				      <div class="modal-header modalHeaderBg">
				        <h5 class="modal-title">Add User Role</h5>
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true" style={styles.textWhite}>&times;</span>
				        </button>
				      </div>
				      <div class="modal-body">
				        <form>
						  <div class="form-group">
						    <label for="exampleFormControlInput1">Role Name<span className="color-red">*</span></label>
						    <input type="email" class="form-control" id="exampleFormControlInput1" />
						  </div>
						  <div class="form-group">
						    <label for="exampleFormControlTextarea1">Description<span className="color-red">*</span></label>
						    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
						  </div>
						  <div class="form-group">
						    <label for="exampleFormControlTextarea1">Status<span className="color-red">*</span></label><br/>
							  	<div class="form-check form-check-inline">
								  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
								  <label class="form-check-label" for="inlineRadio1">Active</label>
								</div>
								<div class="form-check form-check-inline">
								  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
								  <label class="form-check-label" for="inlineRadio2">Inactive</label>
								</div>
						   </div>
						</form>
				      </div>
				      <div class="modal-footer">
				        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
				        <button type="button" class="btn buttonBg">Save changes</button>
				      </div>
				    </div>
				  </div>
				</div>


				<div class="modal" tabindex="-1" role="dialog" id="userModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div class="modal-dialog" role="document">
				    <div class="modal-content">
				      <div class="modal-header modalHeaderBg">
				        <h5 class="modal-title">Add User - Doctor</h5>
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true" style={styles.textWhite}>&times;</span>
				        </button>
				      </div>
				      <div class="modal-body">
				        <div class="row">
						  <div class="col-sm-12">
						    <label for="exampleFormControlInput1">Name<span className="color-red">*</span></label>
						    <input type="email" class="form-control" id="exampleFormControlInput1" />
						  </div>
						  <div class="col-sm-12">
						    <label for="exampleFormControlTextarea1">Dpeartment<span className="color-red">*</span></label><br/>
						    <select>
						    	<option>Cardiology</option>
						    	<option>Medicine</option>
						    	<option>Gynocology</option>
						    </select>
						  </div>
						  <div class="col-sm-12">
						    <label for="exampleFormControlTextarea1">Permissions<span className="color-red">*</span></label><br/>
							<input type="checkbox" name="inlineCheckOptions" id="check1" value="2" />
							<label class="form-check-label pl-2" for="inlineRadio2">Hospital Admin Control</label><br/>
							<input type="checkbox" name="inlineCheckOptions" id="check1" value="2" />
							<label class="form-check-label pl-2" for="inlineRadio2">Hospital Department Control</label><br/>
							<input type="checkbox" name="inlineCheckOptions" id="check1" value="2" />
							<label class="form-check-label pl-2" for="inlineRadio2">Role Creation</label>
						   </div>
						   <div class="col-sm-6">
						    <label for="exampleFormControlTextarea1">New Employee ?<span className="color-red">*</span></label><br/>
							  	<div class="form-check form-check-inline">
								  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
								  <label class="form-check-label" for="inlineRadio1">Yes</label>
								</div>
								<div class="form-check form-check-inline">
								  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
								  <label class="form-check-label" for="inlineRadio2">No</label>
								</div>
						   </div>
						</div>
				      </div>
				      <div class="modal-footer">
				        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
				        <button type="button" class="btn buttonBg">Save changes</button>
				      </div>
				    </div>
				  </div>
				</div>

			</div>
		);
	}
}

export default UserRole;