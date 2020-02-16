import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import Navbar from '../Navbar';
import HospitalList from './HospitalList';
import AddHospital from './AddHospital';

class Admin extends Component {

	constructor(props, context) {
		super(props, context);

		var option = this.props.match.params.menuitem;

		this.state = {
			listitem: 'addhospital'
		};

		console.log("item-->",this.state.listitem);
	}

	render() {
		return (
			<div className="wrapper">
				<AdminSidebar/>
				<div class="main-panel" id="main-panel">
					<Navbar/>
					{ (this.state.listitem == "hospitallist") ? <HospitalList /> : null}
					{ (this.state.listitem == "addhospital") ? <AddHospital /> : null}
				</div>
			</div>
		);
	}
}

export default Admin;