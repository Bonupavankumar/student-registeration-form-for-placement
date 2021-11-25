import React, { Component } from 'react'
import JobService from '../Service/JobService';


export class AddJob extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:this.props.match.params.id,
            companyname: '',
            agreement: '',
            designation: '',
            ctc:'',
            internship_period:'',
            batch:'',
            requirements:'',
            selectioncriteria:''
        }
        this.changecompanyname = this.changecompanyname.bind(this);
        this.changeagreement=this.changeagreement.bind(this);
        this.changedesignation=this.changedesignation.bind(this);
        this.changectc=this.changectc.bind(this);
        this.changeinternship_period=this.changeinternship_period.bind(this);
        this.changebatch=this.changebatch.bind(this);
        this.changerequirements=this.changerequirements.bind(this);
        this.changeselectioncriteria=this.changeselectioncriteria.bind(this);
        this.saveOrUpdateJob = this.saveOrUpdateJob.bind(this);
        this.cancel = this.cancel.bind(this);
    }


   

    saveOrUpdateJob = (e) => {
        e.preventDefault();
        let job = {companyname: this.state.companyname, agreement: this.state.agreement, designation: this.state.designation,ctc: this.state.ctc,internship_period: this.state.internship_period,batch: this.state.batch,requirements:this.state.requirements,selectioncriteria:this.state.selectioncriteria};
        console.log('Job => ' +JSON.stringify(job));
      
        if(this.state.id === '_add'){
            JobService.createJob(job).then(res =>{
                this.props.history.push('/job');
            });
        }else{
            JobService.updateJob(job, this.state.id).then( res => {
                this.props.history.push('/job');
            });
        }
    }

    componentDidMount(){

        
        if(this.state.id === '_add'){
            return
        }else{
            JobService.getJobById(this.state.id).then  ( (res)=>{
                let job= res.data;
                this.setState({companyname:job.companyname,
                    
                    agreement: job.agreement,
                    batch:job.batch,
                    designation:job.designation,
                    internship_period:job.internship_period,
                    ctc:job.ctc,
                    requirements:job.requirements,
                    selectioncriteria:job.selectioncriteria
    
    
                });
            });
            
        }        
    }
    
    

        cancel(){
            this.props.history.push('/job/');
        }

        getTitle(){
            if(this.state.id === '_add'){
                return <h3 className="text-center">Add Job</h3>
            }else{
                return <h3 className="text-center">Update Job</h3>
            }
        }
    
        changecompanyname= (event) => {
            this.setState({companyname: event.target.value});
        }
    
        changeagreement= (event) => {
            this.setState({agreement: event.target.value});
        }
    
        changedesignation= (event) => {
            this.setState({designation: event.target.value});
        }
        changectc= (event) => {
            this.setState({ctc: event.target.value});
        }
        changeinternship_period= (event) => {
            this.setState({internship_period: event.target.value});
        }
        changebatch= (event) => {
            this.setState({batch: event.target.value});
        }
        changerequirements= (event) => {
            this.setState({requirements: event.target.value});
        }
        changeselectioncriteria= (event) => {
            this.setState({selectioncriteria: event.target.value});
        }



    render() {
        return (
            <div>
            <br></br>
               <div className = "container" >
                    <div className = "row" >
                        <div className = "card col-md-6 offset-md-3 offset-md-3" id="add">
                                {
                                    this.getTitle()
                                }
                            <div className = "card-body" >
                                <form>
                                    <div className = "form-group" >
                                        <label> Company Name: </label>
                                        <input placeholder="Company Name" name="companyname" className="form-control" 
                                            value={this.state.companyname} onChange={this.changecompanyname} />
                                    </div>
                                    <div className = "form-group">
                                        <label> Batch: </label>
                                        <input placeholder="Batch" name="batch" className="form-control" 
                                            value={this.state.batch} onChange={this.changebatch}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Designation: </label>
                                        <input placeholder="Designation" name="designation" className="form-control" 
                                             value={this.state.designation} onChange={this.changedesignation}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>CTC: </label>
                                        <input placeholder="CTC" name="ctc" className="form-control" 
                                            value={this.state.ctc} onChange={this.changectc}/>
                                    </div>
                                    
                                    <div className = "form-group">
                                        <label> Agreement: </label>
                                        <input placeholder="Agreement" name="agreement" className="form-control" 
                                            value={this.state.agreement} onChange={this.changeagreement}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>  Job Requirements: </label>
                                        <input placeholder=" Job Requirements" name=" requirements" className="form-control" 
                                            value={this.state.requirements} onChange={this.changerequirements}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Selectioncriteria: </label>
                                        <input placeholder="Selectioncriteria" name="selectioncriteria" className="form-control" 
                                            value={this.state.selectioncriteria} onChange={this.changeselectioncriteria}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Internship_period: </label>
                                        <input placeholder="Internship_period" name="internship_period" className="form-control" 
                                            value={this.state.internship_period} onChange={this.changeinternship_period}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateJob}>Save</button>
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

export default AddJob
