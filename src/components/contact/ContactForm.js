import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContact } from '../../actions/postActions';
import DatePicker from 'react-date-picker';
import Spinner from '../spinner/Spinner';

import './Contact.css';

class ContactForm extends Component {
	constructor(){
		super();
		this.state = {
			data: {
				id: '',
				name: '',
				gender: 'Male',
				phone: '',
				email: '',
				address: '',
				nationality: '',
				educationBackground: '',
				modeOfContact: '',
			},
			date: '',
			errors: {},
			isLoading: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = e => {
		const data = { ...this.state.data };
		data[e.currentTarget.name] = e.currentTarget.value;
		this.setState({ data });
	};

	
	onChange = date => this.setState({ date })
	
	handleValidation(){
        let fields = this.state.data;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Name Cannot be empty";
		}
		
		//Gender
		if(!fields["gender"]){
			formIsValid = false;
			errors["gender"] = "Please choose one gender";
		}

		//Phone
		if(!fields["phone"]){
			formIsValid = false;
			errors["phone"] = "Phone number cannot be empty";
		}

        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Email Cannot be empty";
        }

        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
	   } 
	   
	   //Address
	   if(!fields["address"]){
			formIsValid = false;
			errors["address"] = "Address Cannot be empty";
		}
		
		//Nationality
		 if(!fields["nationality"]){
			formIsValid = false;
			errors["nationality"] = "Nationality Cannot be empty";
		}

		//Education Background
		if(!fields["educationBackground"]){
			formIsValid = false;
			errors["educationBackground"] = "Education Background Cannot be empty";
	    }
		
		//Preferred mode of contact
		if(!fields["modeOfContact"]){
			formIsValid = false;
			errors["modeOfContact"] = "Mode Of Contact Cannot be empty";
	    }

			//Date Of Birth
		if(!this.state.date){
			formIsValid = false;
			errors["dateOfBirth"] = "Date Of Birth Cannot be empty";
	    }


       this.setState({errors: errors});
       return formIsValid;
   }

	handleSubmit = e => {
		e.preventDefault();
		this.setState({
			isLoading: true,
		});
		const newData = {
			name: this.state.data.name,
			email: this.state.data.email,
			address: this.state.data.address,
			gender: this.state.data.gender,
			phone: this.state.data.phone,
			nationality: this.state.data.nationality,
			dateOfBirth: this.state.date,
			educationBackground: this.state.data.educationBackground,
			modeOfContact: this.state.data.modeOfContact
		};
		console.log(newData);
		if(this.handleValidation()){
			this.props.addContact(newData);
			this.setState({
				isLoading: false,
			});

			this.props.history.push('/contact-data');
		} else {
			this.setState({
				isLoading: false,
			});
		}
	};

	render(){
		const { isLoading } = this.state;
		if (isLoading) {
			return <div id="spinnerWrap"><Spinner/></div> ;
		}
		return (
			<div className= "contact_form">
					<div className="container">
						<div className ="row">
								<h2 className="form_title"> Contact Form</h2>
								<form className="user_form">
								<div  className="custom-col-6">
									<div className="form_content">
										<label htmlFor="name">Name</label>
										<input
											value={this.state.data.name}
											placeholder="eg. Prabina Sharma"
											className='form_input'
											name="name"
											onChange={this.handleChange}
										/>
										{ this.state.errors["name"] && 
											<span className="error-validation">{this.state.errors["name"]}</span> }
									</div>

									<div className="form_content">
										<label> Gender </label>
										<input className= "form_input" type="radio"  value="Male" defaultChecked  name="gender" onChange={this.handleChange}/> Male
										<input className= "form_input" type="radio"  value="Female"  name="gender" onChange={this.handleChange}/>Female
										<input className= "form_input" type="radio"  value="Other" name="gender" onChange={this.handleChange}/>Other
									</div>
																	
									<div className="form_content">
										<label htmlFor="phone">Phone</label>
										<input
											value={this.state.data.phone}
											placeholder="eg. 987654321"
											className='form_input'
											name="phone"
											type= "number"
											onChange={this.handleChange}
										/>
										{ this.state.errors["phone"] && 
											<span className="error-validation">{this.state.errors["phone"]}</span> }
									</div>

									<div className="form_content">
										<label htmlFor="email">Email</label>
											<input
												value={this.state.data.email}
												className= "form_input"
												placeholder="eg. example@domain.com" 
												name="email"
												type="email"
												onChange={this.handleChange}
											/>
										{ this.state.errors["email"] && 
											<span className="error-validation">{this.state.errors["email"]}</span> }
									</div>

									<div className="form_content">
										<label htmlFor="address">Address</label>
											<input
												value={this.state.data.address}
												placeholder="eg. Maitidevi, Kathmandu, Nepal" 
												className='form_input'
												name="address"
												onChange={this.handleChange}
											/>
										{ this.state.errors["address"] && 
												<span className="error-validation">{this.state.errors["address"]}</span>}
									</div>
								</div>
								<div  className="custom-col-6">
									<div className="form_content">
										<label htmlFor="nationality">Nationality</label>
											<input
												value={this.state.data.nationality}
												className='form_input'
												placeholder="eg. Nepali" 
												name="nationality"
												onChange={this.handleChange}
											/>
										{ this.state.errors["nationality"] && 
												<span className="error-validation">{this.state.errors["nationality"]}</span>}
									</div>

									<div className="form_content">
										<label> Date of Birth 
											<DatePicker
												onChange={this.onChange}
												value={this.state.date}
												name="date"
											/>
										</label>
										{ this.state.errors["dateOfBirth"] && 
												<span className="error-validation">{this.state.errors["dateOfBirth"]}</span>}

									</div>

									<div className="form_content">
										<label htmlFor="educationBackground">Education Background</label>
											
											<select className= "form_input" name="educationBackground" onChange={this.handleChange}>
											<option value=""> Please Select Educational Background </option>
											<option value="Bachelor"> Bachelor </option>
											<option value="Master"> Master </option>
											<option value="None"> Post Graduate </option>
										</select>
										{ this.state.errors["educationBackground"] && 
												<span className="error-validation">{this.state.errors["educationBackground"]}</span>}
									</div>

									<div className="form_content">
										<label>Preferred Contact</label>
										<select className= "form_input" name="modeOfContact" onChange={this.handleChange}>
											<option value=""> Please Select Preferred Mode Of Contact </option>
											<option value="Email"> Email </option>
											<option value="Phone"> Phone </option>
											<option value="None"> None </option>
										</select>

											{ this.state.errors["modeOfContact"] && 
												<span className="error-validation">{this.state.errors["modeOfContact"]}</span>}

									</div>

									<div className ="btn_submit">
										<button className="submit_button" type="submit" onClick={this.handleSubmit}>Submit</button>
									</div>
								</div>

									

								</form>
								
							</div>
						</div>
			</div>
		);
	}
}

ContactForm.propTypes = {
	addContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	posts: state.posts
})

export default connect(mapStateToProps, {addContact})(ContactForm);