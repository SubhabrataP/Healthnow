import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import DepartmentList from './Departments/DepartmentList';
import UserRole from './UserRole/UserRole';

class Hospital extends Component {

	constructor(props, context) {
		super(props, context);

		var option = this.props.match.params.menuitem;

		this.state = {
			listitem: 'userrole'
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
				</div>
			</div>
		);
	}
}

export default Hospital;