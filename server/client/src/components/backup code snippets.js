/*
// sign-up.js
onChangeSubmissionPassName(e) {
    this.setState({
        pass_name: e.target.value
    });

}


onChangeSubmissionPassEmail(e) {
    this.setState({

        pass_email: e.target.value
    });
}
onChangeSubmissionPassPassword(e) {
    this.setState({

        pass_pass_password: e.target.value
    });
}


onChangeSubmissionPassPassword2(e) {
    this.setState({

        pass_pass_password2: e.target.value
    });
}
onChangeSubmissionPassNic(e) {
    this.setState({

        pass_nic: e.target.value
    });
}

onChangeSubmissionPassTelephone(e) {
    this.setState({

        pass_telephone: e.target.value
    });
}

            <div className ="formContainer" >
                <div className = "formWrapper">
                <h3>Add Passenger</h3>
                <form onSubmit={this.onSubmit} noValidate>


                    <div className="form-group">
                         <label>Name :</label>
                        <input type ="text"
                               className="form-control"
                               value={this.state.pass_name}
                               onChange={this.onChangeSubmissionPassName}
                                required
                        />
                    {this.state.err}
                    </div>
                    <div className="form-group">
                       < label > Email: </label>
                        <input type ="email"
                               className="form-control"
                               value={this.state.pass_email}
                               onChange={this.onChangeSubmissionPassEmail}
                                 required
                        />
                        
                    </div>
                        <div className="form-group">
                
                        < label > Password: <small>Password should be six characters in length</small> </label>
                        <input type ="pass_password"
                               className="form-control"
                               value={this.state.pass_pass_password}
                               onChange={this.onChangeSubmissionPassPassword}
                                 required
                        />
                        
                    </div>
                     <div className="form-group">
                         
                        < label >Retype Password: </label>
                        <input type ="pass_password"
                               className="form-control"
                               value={this.state.pass_pass_password2}
                               onChange={this.onChangeSubmissionPassPassword2}                            
                               required
                        />
                        
                    </div>

                    <div className="form-group">
                       
                        <label>Nic :</label>
                        <input type ="text"
                               className="form-control"
                               value={this.state.pass_nic}
                               onChange={this.onChangeSubmissionPassNic}
                               required
                        />
                        
                    </div>
                    <div className="form-group">
                       
                        <label>Telephone :</label>
                        <input type ="text"
                               className="form-control"
                               value={this.state.pass_telephone}
                               onChange={this.onChangeSubmissionPassTelephone}
                                 required
                        />
                        
                    </div>
                     {this.state.errormessage}
                    <div className="form-group">
                        <input type="submit" value = "Add Passenger" className="btn btn-primary" />
                    </div>
                </form>
                </div>
            </div>

            */