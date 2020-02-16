import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';


class AddHospital extends Component {

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
		            <h3 className="float-left" style={styles.textWhite}><strong>Add Hospital</strong></h3>
		          </div>
		        </div>
        		<div className="row">
        			<div class="card hospitalListCard">
					  <div class="card-body row p-5">
						
					    <fieldset>
					        <legend><b>Information</b></legend>
					        <span id="error-mess"></span>
					        <div class="hospital-all-text">
					            <div class="hospital-lable-text">Hospital Name&nbsp;<span>*</span></div>
					            <div class="hospital-inputs">
					                <input id="hospitalname" name="hospitalname" type="text" autocomplete="off" />
					                <span id="error-mess01"></span>
					            </div>
					        </div>
					        <div class="hospital-all-text">
					            <div class="hospital-inputs">&nbsp;</div>
					            <div class="hospital-inputs">
					                <input type="radio" name="hospitaltype" value="Government/Public" checked="checked" />Government/Public &nbsp;
					                <input type="radio" name="hospitaltype" value="Private" />Private
					            </div>
					        </div><br/>
					        <div class="hospital-all-text">
					            <div class="hospital-lable-text reg_image">
					                    Accreditation
					                    (For e.g NABH/NABL/JCI/ISO/Others)
					                    (For Hospital/Blood Bank/ Laboratory)
					            </div>
					            <div class="hospital-inputs">
					                <textarea name="accreditation" style={{width: '45%',height: '80px'}}></textarea>
					            </div>
					        </div><br/>


					        <div class="hospital-all-text">
					            <div class="hospital-lable-text">Health Care Provider Type:</div>
					            <div class="hospital-inputs-checkbox test_archive">
					                        <span><input class="mr-2 ml-2" type="checkbox" name="hostipalcaretype" value="Hospital" />Hospital</span>
					                        <span><input class="mr-2 ml-2" type="checkbox" name="hostipalcaretype" value="Dispensary" />Dispensary</span>
					                        <span><input class="mr-2 ml-2" type="checkbox" name="hostipalcaretype" value="Community Health Centre" />Community Health Centre</span>
					                        <span><input class="mr-2 ml-2" type="checkbox" name="hostipalcaretype" value="Nursing Home" />Nursing Home</span>
					                        <span><input class="mr-2 ml-2" type="checkbox" name="hostipalcaretype" value="Medical College / Institute" />Medical College / Institute</span>
					                        <span><input class="mr-2 ml-2" type="checkbox" name="hostipalcaretype" value="Sub Centre" />Sub Centre</span>
					                        <span><input class="mr-2 ml-2" type="checkbox" name="hostipalcaretype" value="Poly Clinic" />Poly Clinic</span>
					                        <span><input class="mr-2 ml-2" type="checkbox" name="hostipalcaretype" value="Primary Health Centre" />Primary Health Centre</span>
					                        <span><input class="mr-2 ml-2" type="checkbox" name="hostipalcaretype" value="Others" />Others</span>
					                        <span><input class="mr-2 ml-2" type="checkbox" name="hostipalcaretype" value="Clinic" />Clinic</span>
					<span><input class="mr-2 ml-2" type="checkbox" name="hostipalcaretype" value="Others" />Others</span>
					</div>
					</div><br/>

					<div class="hospital-all-text">
					    <div class="hospital-lable-text">Hospital Registration Number&nbsp;<span>*</span></div>
					    <div class="hospital-inputs">
					        <input name="hospitalregisnumber" id="hospitalregisnumber" type="text" autocomplete="off" />
					        <span id="error-mess02"></span>
					    </div>
					</div><br/>

					<div class="hospital-all-text">
					    <div class="hospital-lable-text reg_image">
					            Registration Number Scanned Copy&nbsp;<span>*</span>
					            (only  JPG, GIF, PNG images with max size: 4 MB allowed)
					        
					    </div>
					    <div class="hospital-inputs test_archive">
					        <input name="Registerationnumberscan" type="file" id="Registerationnumberscan" />
					        <span id="error-mess03"></span>

					    </div>
					</div><br/>

					<div class="hospital-all-text">
					    <div class="hospital-lable-text reg_image">
					            Hospital Registered Logo&nbsp;<span>*</span>
					            (only  JPG, GIF, PNG images with max size: 4 MB allowed)
					        
					    </div>
					    <div class="hospital-inputs test_archive">
					        <input name="logo" type="file" id="logo" />
					        <span id="error-mess04"></span>

					    </div>
					</div><br/>

					</fieldset>

					<fieldset class="w-100">
					 
					    <div class="hospital-all-text">
					        <div class="hospital-lable-text">Nodal Person for this Information - Name and Designation <span>*</span></div>
					        <div class="hospital-inputs">
					            <input name="nodalpersoninfo" id="nodalpersoninfo" type="text" autocomplete="off" />
					            <span id="error-mess04"></span>
					        </div>
					    </div><br/>

					    <div class="hospital-all-text">
					        <div class="hospital-lable-text">Telephone Number of the Nodal Person for this Information <span>*</span></div>
					        <div class="hospital-inputs">
					            <input name="nodalpersontele" id="nodalpersontele" type="text" maxlength="11" autocomplete="off" placeholder="" />
					            <span id="error-mess05"></span>
					        </div>
					    </div><br/>

					    <div class="hospital-all-text">
					        <div class="hospital-lable-text">Nodal Person Email Id  <span>*</span></div>
					        <div class="hospital-inputs">
					            <input name="nodalpersonemailid" id="nodalpersonemailid" type="text" autocomplete="off" />
					            <span id="error-mess06"></span>
					        </div>
					    </div>
					</fieldset>


					<fieldset class="w-100 mt-5">
					    <legend><b>Hospital Address</b></legend>
					    <div class="hospital-all-text">
					        <div class="hospital-lable-text">Address <span>*</span></div>
					        <div class="hospital-inputs">
					            <textarea name="address" id="address" style={{width:'45%', height:'80px'}}></textarea>
					            <span id="error-mess07"></span>
					        </div>
					    </div>

					    <div class="hospital-all-text float-left mr-3">
					        <div class="hospital-lable-text">State <span  >*</span></div>
					        <div class="hospital-inputs">
					            <select id="state" name="state">
					                <option value="">Select state</option>
					                            <option value="35">Andaman &amp; Nicobar Islands</option>
					                            <option value="28">Andhra Pradesh</option>
					                            <option value="12">Arunachal Pradesh</option>
					                            <option value="18">Assam</option>
					                            <option value="10">Bihar</option>
					                            <option value="4">Chandigarh</option>
					                            <option value="22">Chhatisgarh</option>
					                            <option value="26">Dadra &amp; Nagar Haveli</option>
					                            <option value="25">Daman &amp; Diu</option>
					                            <option value="7">Delhi</option>
					                            <option value="30">Goa</option>
					                            <option value="24">Gujarat</option>
					                            <option value="6">Haryana</option>
					                            <option value="2">Himachal Pradesh</option>
					                            <option value="1">Jammu and Kashmir</option>
					                            <option value="20">Jharkhand</option>
					                            <option value="29">Karnataka</option>
					                            <option value="32">Kerala</option>
					                            <option value="31">Lakshadweep</option>
					                            <option value="23">Madhya Pradesh</option>
					                            <option value="27">Maharashtra</option>
					                            <option value="14">Manipur</option>
					                            <option value="17">Meghalaya</option>
					                            <option value="15">Mizoram</option>
					                            <option value="13">Nagaland</option>
					                            <option value="21">Odisha</option>
					                            <option value="34">Puducherry</option>
					                            <option value="3">Punjab</option>
					                            <option value="8">Rajasthan</option>
					                            <option value="11">Sikkim</option>
					                            <option value="33">Tamil Nadu</option>
					                            <option value="36">Telangana</option>
					                            <option value="16">Tripura</option>
					                            <option value="9">Uttar Pradesh</option>
					                            <option value="5">Uttarakhand</option>
					                            <option value="19">West Bengal</option>
					</select>
					<span id="error-mess08"></span>
					<input id="statetext" name="statetext" type='hidden' value="" />
					</div>
					</div>

					<div class="hospital-all-text">
					    <div class="hospital-lable-text">District <span  >*</span></div>
					    <div class="hospital-inputs">
					        <select id="district" name="district">
					            <option value="">Select district</option>
					        </select>
					        <span id="error-mess09"></span>
					        <input id="districttext" name="districttext" type='hidden' value="" />
					    </div>
					</div><br/>

					<div class="hospital-all-text float-left mr-3">
					    <div class="hospital-lable-text">Sub District </div>
					    <div class="hospital-inputs">
					        <select id="subdristrict" name="subdristrict">
					            <option value="">Select sub-district</option>
					        </select>
					        <span id="error-mess10"></span>
					        <input id="subdristricttext" name="subdristricttext" type='hidden' value="" />
					    </div>
					</div>

					<div class="hospital-all-text float-left mr-3">
					    <div class="hospital-lable-text">Town</div>
					    <div class="hospital-inputs">
					        <select id="town" name="town" onchange="binddrop(4);">
					            <option value="">-select-</option>
					        </select>
					        <input id="towntext" name="towntext" type='hidden' value="" />
					    </div>
					</div>



					<div class="hospital-all-text">
					    <div class="hospital-lable-text">Village </div>
					    <div class="hospital-inputs">
					        <select id="village" name="village">
					            <option value="">-select-</option>
					        </select>
					        <input id="villagetext" name="villagetext" type='hidden' value="" />
					    </div>
					</div>
					<br/>
					<div class="hospital-all-text">
					    <div class="hospital-lable-text">Pin Code <span  >*</span></div>
					    <div class="hospital-inputs">
					        <input name="pincode" id="pincode" class="pincode_width" type="text" maxlength="6" autocomplete="off" />
					        <span id="error-mess11"></span>
					    </div>
					</div>


					</fieldset>


					<fieldset class="dif_input mt-5 w-100">
					    <legend><b>Contact / Help Desk of Hospital (For Public Domain)</b></legend>

					    



					    <div class="hospital-all-text">
					        <div class="hospital-lable-text">Telephone / Landline (STD + NUMBER) <span  >*</span></div>

					        <div class="hospital-inputs">
					            <input type="text" id="stdcode" placeholder="STD Code Only" name="stdcode" maxlength="5" class="std_first" />
					            <span id="error-mess1011"></span>
					            <input id="telephone" name="telephone" type="text" maxlength="8" />
					            
					            

					            <span id="error-mess1001"></span>

					           


					        </div>
					    </div>
					    <div class="hospital-all-text">
					        <div class="hospital-inputs">&nbsp;</div>
					        <div id="divanothertelephone" class="hospital-inputs telephone_landline">
					        </div>
					        
					    </div>

					    <div class="hospital-all-text">
					        <div class="hospital-lable-text">Mobile No.</div>
					        <div class="hospital-inputs">
					            <input id="mobilenumber" placeholder="+91" name="mobilenumber" type="text" maxlength="11" autocomplete="off" /><span id="error-mess1003"></span>
					            
					            
					        </div>
					    </div>
					    <div class="hospital-all-text">
					        <div class="hospital-inputs">&nbsp;</div>
					        <div id="divanothermobile" class="hospital-inputs telephone_landline">
					            
					        </div>
					    </div>



					    <div class="hospital-all-text">
					        <div class="hospital-lable-text">Emergency Number</div>
					        <div class="hospital-inputs">
					            <input id="emergencynum" placeholder="+91" name="emergencynum" type="text" maxlength="10" autocomplete="off" /><span id="error-mess1005"></span>
					        </div>
					    </div><br/>
					    <div class="hospital-all-text">
					        <div class="hospital-inputs">&nbsp;</div>
					        <div id="divanotheremergengy" class="hospital-inputs telephone_landline">
					            <input id="anotheremergengy" placeholder="+91" name="anotheremergengy" type="text" maxlength="10"  autocomplete="off" /><span id="error-mess1006"></span>
					            
					        </div>
					    </div><br/>

					    <div class="hospital-all-text">
					        <div class="hospital-lable-text">Ambulance Phone No.</div>
					        <div class="hospital-inputs">
					            <input name="ambulancephoneno" id="ambulancephoneno" type="text" maxlength="12" autocomplete="off" />
					            <span id="error-mess13"></span>
					        </div>
					    </div><br/>

					    <div class="hospital-all-text">
					        <div class="hospital-lable-text">Blood Bank Phone No</div>
					        <div class="hospital-inputs">
					            <input name="bloodbankbphonenum" type="text" id="bloodbankbphonenum" maxlength="12" autocomplete="off" />
					            <span id="error-mess14"></span>
					        </div>
					    </div><br/>

					    <div class="hospital-all-text">
					        <div class="hospital-lable-text">Foreign Patient Care/ International Patient Wing</div>
					        <div class="hospital-inputs">
					            <input name="foreignpcare" type="text" autocomplete="off" />
					        </div>
					    </div><br/>

					    <div class="hospital-all-text">
					        <div class="hospital-lable-text">Toll Free Number (If any )</div>
					        <div class="hospital-inputs">
					            <input name="tollfree" type="text" id="tollfree" maxlength="12" autocomplete="off" />
					            <span id="error-mess15"></span>
					        </div>
					    </div><br/>

					    <div class="hospital-all-text">
					        <div class="hospital-lable-text">Helpline</div>
					        <div class="hospital-inputs">
					            <input name="helpline" id="helpline" type="text"  maxlength="12" autocomplete="off" />
					            <span id="error-mess16"></span>
					        </div>
					    </div><br/>

					    <div class="hospital-all-text">
					        <div class="hospital-lable-text">Hospital Fax No.</div>
					        <div class="hospital-inputs">
					            <input name="hospitalfax" id="hospitalfax" type="text"  maxlength="12" autocomplete="off" />
					            <span id="error-mess17"></span>
					        </div>
					    </div><br/>



					    <div class="hospital-all-text">
					        <div class="hospital-lable-text">Hospital Primary Email Id&nbsp;<span  >*</span></div>
					        <div class="hospital-inputs">
					            <input name="hospitalprimaryemailid" id="hospitalprimaryemailid" type="text"  autocomplete="off" />
					            <span id="error-mess12"></span>
					        </div>
					    </div><br/>
					    <div class="hospital-all-text">
					        <div class="hospital-inputs">&nbsp;</div>
					        <div id="divanothprimaryemailid" class="hospital-inputs telephone_landline">
					            <input id="anotherprimaryemailid" name="anotherprimaryemailid" type="text" autocomplete="off" /><span id="error-mess12"></span>
					        </div>
					    </div><br/>

					    <div class="hospital-all-text">
					        <div class="hospital-lable-text">Hospital Secondary Email Id</div>
					        <div class="hospital-inputs">
					            <input name="hospitalsecondaryemailid" id="hospitalsecondaryemailid" type="text" autocomplete="off" />
					            <span id="error-mess18"></span>
					        </div>
					    </div><br/>
					    <div class="hospital-all-text">
					        <div class="hospital-inputs">&nbsp;</div>
					        <div id="divanothersecondaryemailid" class="hospital-inputs telephone_landline"  >
					            <input id="anothersecondaryemailid" name="anothersecondaryemailid" type="text" autocomplete="off" /><span id="error-mess12"></span>
					        </div>
					    </div><br/>

					    <div class="hospital-all-text">
					        <div class="hospital-lable-text">Website</div>
					        <div class="hospital-inputs">
					            <input name="website" id="website" type="text" placeholder="http://www.example.com" autocomplete="off" />
					            <span id="error-mess19"></span>
					        </div>
					    </div><br/>

					    <div class="hospital-all-text">
					        <div class="hospital-lable-text">Established Since (Year)</div>
					        <div class="hospital-inputs">
					            <input name="establisedyear" id="establisedyear" type="text" maxlength="4" autocomplete="off" />
					            <span id="error-mess20"></span>
					        </div>
					    </div><br/>

					</fieldset>


					<fieldset class="any_other_align">
					    <legend><b>Specialties</b></legend>
					    <div class="specialties-checkbox">

					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Anaesthesiology" />Anaesthesiology</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Anatomy" />Anatomy</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Bariatric Surgery" />Bariatric Surgery</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Biochemistry" />Biochemistry</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Biomedical Engineering" />Biomedical Engineering</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Biophysics" />Biophysics</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Biostatistics" />Biostatistics</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Biotechnology" />Biotechnology</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Burn Department" />Burn Department</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Cardiology" />Cardiology</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Cardio Thoracic Vascular Surgery" />Cardio Thoracic Vascular Surgery</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Centre for Community Medicine" />Centre for Community Medicine</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Cosmetic Surgery" />Cosmetic Surgery</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Dermatology and Venereology" />Dermatology and Venereology</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Dietetics" />Dietetics</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Dental" />Dental</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Endocrinology, Metabolism and Diabetes" />Endocrinology, Metabolism and Diabetes</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Forensic Medicine and Toxicology" />Forensic Medicine and Toxicology</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Gastroenterology and Human Nutrition" />Gastroenterology and Human Nutrition</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Gastrointestinal Surgery" />Gastrointestinal Surgery</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="General Surgery" />General Surgery</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Hematology" />Hematology</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Internal Medicine" />Internal Medicine</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Kidney Transplant" />Kidney Transplant</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Laboratory Medicine" />Laboratory Medicine</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Liver Transplant" />Liver Transplant</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Laparoscopic Surgery" />Laparoscopic Surgery</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Medicine" />Medicine</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Microbiology" />Microbiology</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Nephrology" />Nephrology</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Nuclear Medicine" />Nuclear Medicine</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Neurology" />Neurology</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Neuron Surger" />Neuron Surger</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Nuclear Magnetic Resonance Imaging" />Nuclear Magnetic Resonance Imaging</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Obstetrics and Gynaecology" />Obstetrics and Gynaecology</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="In Vitro Fertilization (IVF)" />In Vitro Fertilization (IVF)</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Oncology/ Oncosurgery (Cancer Care)" />Oncology/ Oncosurgery (Cancer Care)</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Orthopedics" />Orthopedics</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Ophthalmology (Eye Care)" />Ophthalmology (Eye Care)</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Otorhinolaryngology (Ear Nose and Throat)" />Otorhinolaryngology (Ear Nose and Throat)</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Pediatrics" />Pediatrics</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Pediatric Surgery" />Pediatric Surgery</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Pulmonology/ Respiratory Medicine" />Pulmonology/ Respiratory Medicine</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Trauma and Emergency Medicine" />Trauma and Emergency Medicine</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Plastic Surgery (Reconstructive Surgery)" />Plastic Surgery (Reconstructive Surgery)</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Pharmacology" />Pharmacology</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Physiology" />Physiology</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Physical Medicine and Rehabilitation" />Physical Medicine and Rehabilitation</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Psychiatry" />Psychiatry</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Reproductive Biology" />Reproductive Biology</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Surgical Disciplines" />Surgical Disciplines</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Transplant Surgery" />Transplant Surgery</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Transfusion Medicine (Blood Bank)" />Transfusion Medicine (Blood Bank)</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Urology" />Urology</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="specialtiesotherwith" value="Vascular Surgery" />Vascular Surgery</span>
					    

					    <div id="specialtiesid">

					    </div>

					</div>

					</fieldset>




					<fieldset class="any_other_align w-100 mt-5">
					    <legend><b>Facilities</b></legend>
					    <div class="specialties-checkbox">
					                    <span><input class="mr-2 ml-2" type="checkbox" name="facilities" value="ICU" />ICU</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="facilities" value="MICU" />MICU</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="facilities" value="CICU" />CICU</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="facilities" value="NICU" />NICU</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="facilities" value="PICU (Pediatrics ICU)" />PICU (Pediatrics ICU)</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="facilities" value="IPD" />IPD</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="facilities" value="OPD" />OPD</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="facilities" value="Emergency and Trauma" />Emergency and Trauma</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="facilities" value="Laboratory" />Laboratory</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="facilities" value="Imaging" />Imaging</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="facilities" value="Pharmacy" />Pharmacy</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="facilities" value="Transplant Immunology and Immunogenetics" />Transplant Immunology and Immunogenetics</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="facilities" value="Labour Room" />Labour Room</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="facilities" value="Blood Banks" />Blood Banks</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="facilities" value="Blood Storage" />Blood Storage</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="facilities" value="Eye Bank" />Eye Bank</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="facilities" value="Organ Bank" />Organ Bank</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="facilities" value="Ambulance" />Ambulance</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="facilities" value="Dialysis Unit" />Dialysis Unit</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="facilities" value="Operation Theater" />Operation Theater</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="facilities" value="Physiotherapy" />Physiotherapy</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="facilities" value="Occupational Therapy" />Occupational Therapy</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="facilities" value="Diagnostics" />Diagnostics</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="facilities" value="Medical Tourism" />Medical Tourism</span>



					
					</div>
					</fieldset>

					<fieldset class="w-100 mt-3">
					    <legend><b>Medical Insurance</b></legend>
					    <div class="specialties-checkbox">

					                    <span><input class="mr-2 ml-2" type="checkbox" name="medicalinsurance" />All</span>
					                    <span> <input class="mr-2 ml-2" type="checkbox" name="medicaltourism" value="Cashless" />Cashless</span>
					                    <span> <input class="mr-2 ml-2" type="checkbox" name="medicaltourism" value="Reimbursement" />Reimbursement</span>
					                    <span> <input class="mr-2 ml-2" type="checkbox" name="medicaltourism" value="Third Party Administrator (TPA)" />Third Party Administrator (TPA)</span>
					                    <span><input class="mr-2 ml-2" type="checkbox" name="medicalinsurance" value="Medical Insurance Company Name" />Medical Insurance Company Name</span>

					        <div id="insuranceagencyid">

					        </div>
					        <div class="clear"></div>
					        
					    </div>
					</fieldset>


					<div class="text-center mt-3">
					    <input class="button" type="submit" value="Submit" />&nbsp;
					    
					    <input class="button" type="reset" value="Clear" />
					    
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

export default AddHospital;