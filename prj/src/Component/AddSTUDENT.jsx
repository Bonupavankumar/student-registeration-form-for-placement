import React, { Component } from 'react'
import STUDENTService from '../Service/STUDENTService';


class AddSTUDENT extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            id: this.props.match.params.id,
            student_name: '',
            student_regno: '',
            student_emailID: '',
            student_phone:'',
            student_DOB:'',
            student_password:''
        }
        this.changestudent_name = this.changestudent_name.bind(this);
        this.changestudent_regno = this.changestudent_regno.bind(this);
        this.changestudent_emailID = this.changestudent_emailID.bind(this);
        this.changestudent_phone = this.changestudent_phone.bind(this);
        this.changestudent_DOB = this.changestudent_DOB.bind(this);
        this.changestudent_password = this.changestudent_password.bind(this);
        this.saveOrUpdateStudent = this.saveOrUpdateStudent.bind(this);
    }

    
    componentDidMount(){

        
        if(this.state.id === '_add'){
            return
        }else{
            STUDENTService.getSTUDENTById(this.state.id).then( (res) =>{
                let student = res.data;
                this.setState({  student_name: student.student_name,
                    student_DOB: student.student_DOB,
                    student_regno: student.student_regno,
                    student_password: student.student_password,
                    student_phone: student.student_phone,
                    student_emailID : student.student_emailID
                });
            });
        }        
    }
    saveOrUpdateStudent = (e) => {
        e.preventDefault();
        let student = {student_name: this.state.student_name, student_DOB: this.state.student_DOB, student_emailID: this.state.student_emailID,student_regno: this.state.student_regno, student_phone: this.state.student_phone, student_password: this.state.student_password};
        console.log('student => ' + JSON.stringify(student));

      
        if(this.state.id === '_add'){
            STUDENTService.createSTUDENT(student).then(res =>{
                this.props.history.push('/STUDENT');
            });
        }else{
            STUDENTService.updateSTUDENT(student, this.state.id).then( res => {
                this.props.history.push('/STUDENT');
            });
        }
    }
    
    changestudent_name= (event) => {
        this.setState({student_name: event.target.value});
    }

    changestudent_regno= (event) => {
        this.setState({student_regno: event.target.value});
    }

    changestudent_emailID= (event) => {
        this.setState({student_emailID: event.target.value});
    }

    changestudent_phone= (event) => {
        this.setState({student_phone: event.target.value});
    }

    changestudent_DOB= (event) => {
        this.setState({student_DOB: event.target.value});
    }

    changestudent_password= (event) => {
        this.setState({student_password: event.target.value});
    }

    cancel(){
        this.props.history.push('/STUDENT');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Student</h3>
        }else{
            return <h3 className="text-center">Update Student</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3" id="add">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>  Name: </label>
                                            <input placeholder=" Name" name="Name" className="form-control" 
                                                value={this.state.student_name} onChange={this.changestudent_name}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Registration No.: </label>
                                            <input placeholder="Registration Number" name="Registration" className="form-control" 
                                                value={this.state.student_regno} onChange={this.changestudent_regno}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> EmailId: </label>
                                            <input placeholder="Email Address" name="emailID" className="form-control" 
                                                value={this.state.student_emailID} onChange={this.changestudent_emailID}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Contact Number: </label>
                                            <input placeholder="Contact Number" name="Contact" className="form-control" 
                                                value={this.state.student_phone} onChange={this.changestudent_phone}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> DOB: </label>
                                            <input placeholder="Email Address" name="dob" className="form-control" 
                                                value={this.state.student_DOB} onChange={this.changestudent_DOB}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.student_password} onChange={this.changestudent_password}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateStudent}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default AddSTUDENT