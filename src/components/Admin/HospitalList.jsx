import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';


class HospitalList extends Component {

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
		            <h3 className="float-left" style={styles.textWhite}><strong>Hospitals</strong></h3>
		            <button type="button" className="btn buttonWhite float-right" data-toggle="modal" data-target="#deptModal">Add Hospital</button>
		          </div>
		        </div>
        		<div className="row">
        			<div class="card hospitalListCard">
					  <div class="card-body row">
					    <div className="col-md-4 text-center">
					    	<img className="hospitalLogo" src={process.env.PUBLIC_URL+'/assets/img/apollo.png'} />
					    </div>
					    <div className="col-md-3">
					    	<span><strong>Name: </strong>APOLLO HOSPITAL</span> <br/>
					    	<span><strong>Reg No: </strong>WB123QR789091BN</span> <br/><br/>

					    	<span><strong>Reg Contracts: </strong><button type="button" className="btn btn-sm buttonBlueBorder" data-toggle="modal" data-target="#deptModal"><small>View Files</small></button></span> <br/><br/>

					    	<span><strong>Reg Date: </strong>12-01-2020</span> <br/>
					    	 	
					    </div>
					    <div className="col-md-3">
					    	<span><strong>Total no of doctors: </strong>45</span> <br/>
					    	<span><strong>Total Patients (Admitted): </strong>78</span> <br/><br/>
					    	<span><strong>Total Patients Registered: </strong>928</span> <br/>
					    	<span>New Registrations: 624</span> <br/>
					    	<span>EMR Transfer: 304</span> <br/>
					    </div>

					    
					    <div className="col-md-2">
					    	<strong><i className="now-ui-icons hospitalListArrow arrows-1_minimal-right"></i></strong>
					    </div>

					  </div>
					</div>

					<div class="card hospitalListCard">
					  <div class="card-body row">
					    <div className="col-md-4 text-center">
					    	<img className="hospitalLogo" src={process.env.PUBLIC_URL+'/assets/img/amri.jpg'} />
					    </div>
					    <div className="col-md-3">
					    	<span><strong>Name: </strong>AMRI</span> <br/>
					    	<span><strong>Reg No: </strong>WB123QR789091BN</span> <br/><br/>

					    	<span><strong>Reg Contracts: </strong><button type="button" className="btn btn-sm buttonBlueBorder" data-toggle="modal" data-target="#deptModal"><small>View Files</small></button></span> <br/><br/>

					    	<span><strong>Reg Date: </strong>12-01-2020</span> <br/>
					    	 	
					    </div>
					    <div className="col-md-3">
					    	<span><strong>Total no of doctors: </strong>45</span> <br/>
					    	<span><strong>Total Patients (Admitted): </strong>78</span> <br/><br/>
					    	<span><strong>Total Patients Registered: </strong>928</span> <br/>
					    	<span>New Registrations: 624</span> <br/>
					    	<span>EMR Transfer: 304</span> <br/>
					    </div>

					    
					    <div className="col-md-2">
					    	<strong><i className="now-ui-icons hospitalListArrow arrows-1_minimal-right"></i></strong>
					    </div>

					  </div>
					</div>

					

					<div class="card hospitalListCard">
					  <div class="card-body row">
					    <div className="col-md-4 text-center">
					    	<img className="hospitalLogo" src={process.env.PUBLIC_URL+'/assets/img/Fortis.png'} />
					    </div>
					    <div className="col-md-3">
					    	<span><strong>Name: </strong>FORTIS HOSPITAL</span> <br/>
					    	<span><strong>Reg No: </strong>WB123QR789091BN</span> <br/><br/>

					    	<span><strong>Reg Contracts: </strong><button type="button" className="btn btn-sm buttonBlueBorder" data-toggle="modal" data-target="#deptModal"><small>View Files</small></button></span> <br/><br/>

					    	<span><strong>Reg Date: </strong>12-01-2020</span> <br/>
					    	 	
					    </div>
					    <div className="col-md-3">
					    	<span><strong>Total no of doctors: </strong>45</span> <br/>
					    	<span><strong>Total Patients (Admitted): </strong>78</span> <br/><br/>
					    	<span><strong>Total Patients Registered: </strong>928</span> <br/>
					    	<span>New Registrations: 624</span> <br/>
					    	<span>EMR Transfer: 304</span> <br/>
					    </div>

					    
					    <div className="col-md-2">
					    	<strong><i className="now-ui-icons hospitalListArrow arrows-1_minimal-right"></i></strong>
					    </div>

					  </div>
					</div>

					<div class="card hospitalListCard">
					  <div class="card-body row">
					    <div className="col-md-4 text-center">
					    	<img className="hospitalLogo" src={process.env.PUBLIC_URL+'/assets/img/nh.png'} />
					    </div>
					    <div className="col-md-3">
					    	<span><strong>Name: </strong>NARAYANA HEALTH</span> <br/>
					    	<span><strong>Reg No: </strong>WB123QR789091BN</span> <br/><br/>

					    	<span><strong>Reg Contracts: </strong><button type="button" className="btn btn-sm buttonBlueBorder" data-toggle="modal" data-target="#deptModal"><small>View Files</small></button></span> <br/><br/>

					    	<span><strong>Reg Date: </strong>12-01-2020</span> <br/>
					    	 	
					    </div>
					    <div className="col-md-3">
					    	<span><strong>Total no of doctors: </strong>45</span> <br/>
					    	<span><strong>Total Patients (Admitted): </strong>78</span> <br/><br/>
					    	<span><strong>Total Patients Registered: </strong>928</span> <br/>
					    	<span>New Registrations: 624</span> <br/>
					    	<span>EMR Transfer: 304</span> <br/>
					    </div>

					    
					    <div className="col-md-2">
					    	<strong><i className="now-ui-icons hospitalListArrow arrows-1_minimal-right"></i></strong>
					    </div>

					  </div>
					</div>
          		</div>

	      		
	      		<div class="modal" tabindex="-1" role="dialog" id="deptModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div class="modal-dialog" role="document">
				    <div class="modal-content">
				      <div class="modal-header modalHeaderBg">
				        <h5 class="modal-title">Add Department</h5>
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true" style={styles.textWhite}>&times;</span>
				        </button>
				      </div>
				      <div class="modal-body">
				        <form>
						  <div class="form-group">
						    <label for="exampleFormControlInput1">Department Name<span className="color-red">*</span></label>
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
			</div>
		);
	}
}

export default HospitalList;