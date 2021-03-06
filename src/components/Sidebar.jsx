import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Sidebar extends Component {

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
            <li>
              <a href="#">
                <i className="now-ui-icons design_app"></i>
                <p>Dashboard</p>
              </a>
            </li>
            <li className="active ">
              <Link to={"/hospital/departments"}>
                <i className="now-ui-icons design_app"></i>
                <p>Departments</p>
              </Link>
            </li>
            <li>
              <a href="./userRole">
                <div class="dropdown">
                  
                  <div class="dropdown">
                    <div type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="now-ui-icons education_atom"></i>
                      <p>User Role</p>
                    </div>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">User Role</a>
                      <a class="dropdown-item" href="#">Add User</a>
                      <Link class="dropdown-item" to="/hospital/userlist">User List</Link>
                    </div>
                  </div>
                </div>
                
              </a>
            </li>
            <li>
              <a href="./notifications.html">
                <div class="dropdown">
                  <div class="dropdown">
                    <div type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="now-ui-icons ui-1_bell-53"></i>
                      <p>Permissions</p>
                    </div>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">Create Permission</a>
                      <a class="dropdown-item" href="#">Permission list</a>
                    </div>
                  </div>
                </div>
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

export default Sidebar;



