import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from '../Hospital';

class UserList extends Component {

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
		            <h3 style={styles.textWhite}><strong>User List</strong></h3>
		          </div>
		        </div>
        		<div className="row">
        			<div className="card">
        			  <div class="card-header">
					    <button type="button" className="btn buttonBg" data-toggle="modal" data-target="#deptModal">Add Role</button>
					    <button type="button" className="btn btn-dark ml-2" data-toggle="modal" data-target="#deptModal">Add User</button>
					  </div>
					  <div className="card-body">
					    <table className="table">
						  <thead className="thead-info">
						    <tr>
						      <th scope="col">Sl no</th>
						      <th scope="col">Name</th>
						      <th scope="col">Department</th>
						      <th scope="col">Role</th>
						      <th scope="col">Profile</th>
						       <th scope="col">Actions</th>
						      
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      <th scope="row">1</th>
						      <td>Sinchan Nohara</td>
						      <td>Cardiology</td>
						      <td>Doctor</td>
						      <td><button class="btn btn-sm btn-dark">View</button></td>
						   
						       <td><i className="fas fa-pen-square color-green"></i>&nbsp;&nbsp;&nbsp;<i className="fas fa-trash color-red"></i></td>
						    </tr>
						    <tr>
						      <th scope="row">2</th>
						      <td>Nobita</td>
						      <td>Cardiology</td>
						      <td>Receptionist</td>
						      <td><button class="btn btn-sm btn-dark">View</button></td>
						      
						       <td><i className="fas fa-pen-square color-green"></i>&nbsp;&nbsp;&nbsp;<i className="fas fa-trash color-red"></i></td>
						    </tr>
						    <tr>
						      <th scope="row">3</th>
						      <td>Shizuka Bannerjee</td>
						      <td>Medicine</td>
						      <td>Nurse</td>
						      
						      <td><button class="btn btn-sm btn-dark">View</button></td>
						      <td><i className="fas fa-pen-square color-green"></i>&nbsp;&nbsp;&nbsp;<i className="fas fa-trash color-red"></i></td>
						    </tr>
						  </tbody>
						</table>

						
					  </div>
					</div>
          		</div>

			</div>
		);
	}
}

export default UserList;