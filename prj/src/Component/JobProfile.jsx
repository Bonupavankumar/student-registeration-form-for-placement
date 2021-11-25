import React, { Component } from 'react'
import JobService from '../Service/JobService'
import style2 from '../css/style2.css'
import { FaEdit ,FaEye,FaPlus,FaTrash} from 'react-icons/fa';

export class JobProfile extends Component {

    constructor(props) {
        super(props);

        this.state = {
                jobs: []
        }
        this.addJob = this.addJob.bind(this);
        this.editJob = this.editJob.bind(this);
        this.viewJob = this.viewJob.bind(this);
        this.deleteJob = this.deleteJob.bind(this);
       
        
    }


    componentDidMount(){
        JobService.getJob().then((res) => {
            this.setState({jobs: res.data});
        });
    }
   


    addJob(){
        this.props.history.push("/add-job/_add"); 
    }
    editJob(id){
        this.props.history.push(`/add-job/${id}`);
    }
    viewJob(id){
        this.props.history.push(`/view-job/${id}`);
    }
    deleteJob(id){
        JobService.deleteJob(id).then( res => {
        this.setState({jobs: this.state.jobs.filter(job => job.id !== id)});
        
    });}
   
    
    render() {
        return (
            <div>
            <h3 className="text-center" id="top" >Job List</h3>
            <div className="text-center"  id= "top2">
                  <h4> Placement Cell Can Add Job Here.......</h4>
                  
                   </div>
            
            <div className = "col-3">
               <button className="btn btn-primary" onClick={this.addJob}> <FaPlus/> Add Job</button>
            </div>
            <br></br>
            <div className = "table">
                   <table className = "table table-striped table-bordered  table-dark  table-hover" >

                       <thead>
                           <tr>
                               
                                <th>Company Name</th>
                                <th>Batch</th>
                                <th>Requirements</th>
                                <th>Designation</th>
                                <th>CTC</th>
                                <th>Agreement</th>
                                <th>Internship_period</th>
                                <th> SelectionCriteria</th>
                                <th>Actions</th>
                           </tr>
                       </thead>
                       <tbody>
                       {
                                     this.state.jobs.map(
                                        job => 
                                        <tr key = {job.id}>
                                         
                                            <td> { job.companyname} </td> 
                                            <td> { job.batch} </td> 
                                            <td> {job.requirements}</td>
                                            <td> { job.designation} </td> 
                                            <td> { job.ctc} </td> 
                                            <td> { job.agreement} </td> 
                                            <td> { job.internship_period} </td> 
                                            <td>{job.selectioncriteria}</td>
                                           
                                    
                                    <td>
                                    <button  className="btn btn-info"  onClick={ () => this.editJob(job.id)}><FaEdit/>Update </button>
                                    <button style={{marginLeft: "10px"}}  onClick={ () => this.deleteJob(job.id)} className="btn btn-danger"><FaTrash/>Delete </button>
                                     <button style={{marginLeft: "10px"}}  onClick={ () => this.viewJob(job.id)} className="btn btn-info"><FaEye/>View </button>
                                    </td>
                                    </tr>
                                   
                                     )
                                }
                       </tbody>
                   </table>

            </div>
            
            </div>
        )
    }
}

export default JobProfile
