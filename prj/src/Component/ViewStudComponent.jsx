import React, { Component } from 'react'
import STUDENTService from '../Service/STUDENTService'

class ViewStudComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {}
        }
    }

    componentDidMount(){
        STUDENTService.getSTUDENTById(this.state.id).then( res => {
            this.setState({student: res.data});
        })
    }
    cancel(){
        this.props.history.push('/STUDENT');
    }

    render() {
        return (
            <div>
                <br></br>
                <div class="container">
                <div className = "card col-md-6 offset-md-3" id="add">
                    <h3 className = "text-center"> View Student </h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>  Name: </label>
                            <div> { this.state.student.student_name}</div>
                        </div>
                        <div className = "row">
                            <label> Student Last Name: </label>
                            <div> { this.state.student.student_regno }</div>
                        </div>
                        <div className = "row">
                            <label> Student Email ID: </label>
                            <div> { this.state.student.student_emailID }</div>
                        </div>
                        <div className = "row">
                            <label> Student First Name: </label>
                            <div> { this.state.student.student_phone}</div>
                        </div>
                        <div className = "row">
                            <label> Student Last Name: </label>
                            <div> { this.state.student.student_DOB }</div>
                        </div>
                        <div className = "row">
                            <label> Student Email ID: </label>
                            <div> { this.state.student.student_password }</div>
                        </div>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                    </div>
</div>
                </div>
            </div>
        )
    }
}

export default ViewStudComponent
