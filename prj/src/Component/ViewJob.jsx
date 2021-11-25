import React, { Component } from 'react'
import JobService from '../Service/JobService'


export class ViewJob extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            job: {}
        }
    }

    componentDidMount(){
        JobService.getJobById(this.state.id).then( res => {
            this.setState({job: res.data});
        })
    }
    cancel(){
        this.props.history.push('/job/');
    }

    render() {
        return (
            <div>
            <br></br>
               <div className = "container" >
                    <div className = "row" >
                        <div className = "card col-md-6 offset-md-3 offset-md-3" id="add">
                            
                            <div className = "card-body" >
                                <form>
                                    <div className = "form-group" >
                                        <label> Company Name: </label>
                                        <div> { this.state.job.companyname}</div>
                                    </div>
                                    <div className = "form-group">
                                        <label> Batch: </label>
                                        <div> { this.state.job.batch}</div>
                                    </div>
                                    <div className = "form-group">
                                        <label> Designation: </label>
                                        <div> { this.state.job.designation}</div>
                                    </div>
                                    <div className = "form-group">
                                        <label>CTC: </label>
                                        <div> { this.state.job.ctc}</div>
                                    </div>
                                    
                                    <div className = "form-group">
                                        <label> Agreement: </label>
                                        <div> { this.state.job.agreement}</div>
                                    </div>
                                    <div className = "form-group">
                                        <label>  Job Requirements: </label>
                                        <div> { this.state.job.requirements}</div>
                                    </div>
                                    <div className = "form-group">
                                        <label> Selectioncriteria: </label>
                                        <div> { this.state.job.selectioncriteria}</div>
                                           </div>
                                    <div className = "form-group">
                                        <label> Internship_period: </label>
                                        <div> { this.state.job.internship_period}</div>
                                        </div>
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
export default ViewJob
