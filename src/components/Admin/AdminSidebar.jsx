import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class AdminSidebar extends Component {

  constructor(props, context) {
    super(props, context);
    this.selectComponent = this.selectComponent.bind(this);
  }

  selectComponent(option){
    this.props.listitem = option
    console.log("listitem-->",this.props.listitem);
  }



  render() {
    return (
      <div className="sidebar" data-color="blue">
      
        <div className="logo">
          <a href="#">
            <img src={process.env.PUBLIC_URL+'/assets/img/healthnowlogo.png'} />
          </a>
          
        </div>
        <div className="sidebar-wrapper" id="sidebar-wrapper">
          <ul className="nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="now-ui-icons business_bank"></i>
                Hospitals
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#"><Link to={"/admin/hospitallist"}>Hospital List</Link></a>
                <a class="dropdown-item" href="#">Add Hospital</a>
              </div>
            </li>
            <li>
              <a href="./permission.html">
                <i className="now-ui-icons education_atom"></i>
                <p>Doctors</p>
              </a>
            </li>
            <li>
              <a href="./notifications.html">
                <i className="now-ui-icons ui-1_bell-53"></i>
                <p>Notifications</p>
              </a>
            </li>
            <li>
              <a href="./user.html">
                <i className="now-ui-icons users_single-02"></i>
                <p>Admin Profile</p>
              </a>
            </li>
            <li>
              <a href="./typography.html">
                <i className="now-ui-icons text_caps-small"></i>
                <p>Messages</p>
              </a>
            </li>
            <li className="active-pro">
              <a href="./upgrade.html">
                <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                <p>Contact for support</p>
              </a>
            </li>
          </ul>
        </div>
    </div>
    );
  }
}

export default AdminSidebar;



