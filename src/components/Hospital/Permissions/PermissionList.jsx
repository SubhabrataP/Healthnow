import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from '../Hospital';

class PermissionList extends Component {

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
					    <button type="button" className="btn buttonBg" data-toggle="modal" data-target="#deptModal">Add Permission</button>
					  </div>
					  <div className="card-body">
					    <table className="table">
						  <thead className="thead-info">
						    <tr>
						      <th scope="col">Sl no</th>
						      <th scope="col">Role</th>
						      <th scope="col">Department</th>
						      <th scope="col">Permission Status</th>
						      <th scope="col">Edit</th>
						       <th scope="col">Delete</th>
						      
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      <th scope="row">1</th>
						      <td>Doctor</td>
						      <td>Cardiology</td>
						      <td style={{color: 'green'}}>Granted</td>
						      <td><i className="fas fa-pen-square color-green"></i></td>
						      <td><i className="fas fa-trash color-red"></i></td>
						    </tr>
						    <tr>
						      <th scope="row">2</th>
						      <td>Nurse</td>
						      <td>Dental</td>
						      <td style={{color: 'red'}}>Not Granted</td>
						      <td><i className="fas fa-pen-square color-green"></i></td>
						      <td><i className="fas fa-trash color-red"></i></td>
						    </tr>
						    <tr>
						      <th scope="row">3</th>
						      <td>Receptionist</td>
						      <td>Medicine</td>
						      <td style={{color: 'green'}}>Not Granted</td>
						      <td><i className="fas fa-pen-square color-green"></i></td>
						      <td><i className="fas fa-trash color-red"></i></td>
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

export default PermissionList;