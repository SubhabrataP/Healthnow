import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import DepartmentList from './Departments/DepartmentList';
import UserRole from './UserRole/UserRole';
import UserList from './UserRole/UserList';
import AddUser from './UserRole/AddUser';
import PermissionList from './Permissions/PermissionList';
import AddPermission from './Permissions/AddPermission';

class Hospital extends Component {

	constructor(props, context) {
		super(props, context);

		var option = this.props.match.params.menuitem;
		console.log("option ", option);


		this.state = {
			listitem: option,
			userlist: option
		};

		console.log("item-->",this.state.listitem);
	}

	render() {
		return (
			<div className="wrapper">
				<Sidebar/>
				<div class="main-panel" id="main-panel">
					<Navbar/>
					{ (this.state.listitem == "departments") ? <DepartmentList/> : null}
					{ (this.state.listitem == "userrole") ? <UserRole /> : null}
					{ (this.state.listitem == "userlist") ? <UserList /> : null}
					{ (this.state.listitem == "adduser") ? <AddUser /> : null}
					{ (this.state.listitem == "permissionlist") ? <PermissionList /> : null}
					{ (this.state.listitem == "addpermission") ? <AddPermission /> : null}
				</div>
			</div>
		);
	}
}

export default Hospital;