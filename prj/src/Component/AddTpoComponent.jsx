import React, { Component } from 'react'
import TPOService from '../Service/TPOService';


export class AddTpoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:this.props.match.params.id,
            tpo_name: '',
            tpo_emailID: '',
            tpo_phone: '',
            tpo_password:''
            
        }
        this.changetpo_name = this.changetpo_name.bind(this);
        this.changetpo_emailID=this.changetpo_emailID.bind(this);
        this.changetpo_phone=this.changetpo_phone.bind(this);
        this.changetpo_password=this.changetpo_password.bind(this);
       
    }


   

    saveOrUpdateTPO = (e) => {
        e.preventDefault();
        let tpo = {tpo_name: this.state.tpo_name, tpo_emailID: this.state.tpo_emailID, tpo_phone: this.state.tpo_phone,tpo_password: this.state.tpo_password};
        console.log('Tpo => ' +JSON.stringify(tpo));
      
        if(this.state.id === '_add'){
            TPOService.createTPO(tpo).then(res =>{
                this.props.history.push('/TPO');
            });
        }else{
            TPOService.updateTPO(tpo, this.state.id).then( res => {
                this.props.history.push('/TPO');
            });
        }
    }

    componentDidMount(){

        
        if(this.state.id === '_add'){
            return
        }else{
            TPOService.getTPOById(this.state.id).then  ( (res)=>{
                let tpo= res.data;
                this.setState({
                    tpo_name:tpo.tpo_name, 
                    tpo_emailID: tpo.tpo_emailID,
                    tpo_phone:tpo.tpo_phone,
                    tpo_password:tpo.tpo_password
                    
    
                });
            });
            
        }        
    }
    
    

        cancel(){
            this.props.history.push('/TPO/');
        }

        getTitle(){
            if(this.state.id === '_add'){
                return <h3 className="text-center">Add TPO</h3>
            }else{
                return <h3 className="text-center">Update TPO</h3>
            }
        }
    
        changetpo_name= (event) => {
            this.setState({tpo_name: event.target.value});
        }
    
        changetpo_emailID= (event) => {
            this.setState({tpo_emailID: event.target.value});
        }
    
        changetpo_phone= (event) => {
            this.setState({tpo_phone: event.target.value});
        }
        changetpo_password= (event) => {
            this.setState({tpo_password: event.target.value});
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
                                        <label>  Name: </label>
                                        <input placeholder=" name" name="companyname" className="form-control" 
                                            value={this.state.tpo_name} onChange={this.changetpo_name} />
                                    </div>
                                    <div className = "form-group">
                                        <label> EmailID: </label>
                                        <input placeholder="EmailID" name="batch" className="form-control" 
                                            value={this.state.tpo_emailID} onChange={this.changetpo_emailID}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Contact No.: </label>
                                        <input placeholder="contact" name="designation" className="form-control" 
                                             value={this.state.tpo_phone} onChange={this.changetpo_phone}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Password: </label>
                                        <input placeholder="password" name="ctc" className="form-control" 
                                            value={this.state.tpo_password} onChange={this.changetpo_password}/>
                                    </div>
                                   
                                    <button className="btn btn-success" onClick={this.saveOrUpdateTPO}>Save</button>
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


export default AddTpoComponent
