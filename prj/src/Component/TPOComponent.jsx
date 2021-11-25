import React, { Component } from 'react'
import TPOService from '../Service/TPOService'
import { FaEdit ,FaEye,FaTrash,FaPlus} from 'react-icons/fa';



export class TPOComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
                TPO: []
        }
        this.addTPO = this.addTPO.bind(this);
        this.editTPO = this.editTPO.bind(this);
        this.viewTPO = this.viewTPO.bind(this);
        this.deleteTPO = this.deleteTPO.bind(this);

      
    }

    componentDidMount(){
        TPOService.getTPO().then((res) => {
            this.setState({TPO: res.data});
        });
    }
    
    addTPO(){
        this.props.history.push("/add-TPO/_add"); 
    }
    editTPO(id){
        this.props.history.push(`/add-TPO/${id}`);
    }
    viewTPO(id){
        this.props.history.push(`/view-TPO/${id}`);
    }
    deleteTPO(id){
        TPOService.deleteTPO(id).then( res => {
        this.setState({TPO: this.state.TPO.filter(tpo => tpo.id !== id)});
        
    });}

    render() {
        return (
              <div>
          
            <div className="text-center"  id= "top2">    
            <h3>Add TPO</h3>
                   </div>
            
            
            <div className = "col-2">
               <button className="btn btn-primary" onClick={this.addTPO}> <FaPlus/>TPO</button>
            </div>
            <br></br>
            <div className = "table">
                   <table className = "table table-striped table-bordered  table-dark  table-hover" >

                       <thead>
                           <tr>
                                <th> Name</th>
                                <th>EmailId</th>
                                <th>Contact</th>
                                <th>Password</th>
                                <th>Actions</th>
                                
                               
                           </tr>
                       </thead>
                       <tbody>
                       {
                                     this.state.TPO.map(tpo =>
                                        <tr key = {tpo.id}>
                                              <td> { tpo.tpo_name} </td> 
                                            <td> { tpo.tpo_emailID} </td> 
                                            <td> {tpo.tpo_phone}</td>
                                            <td> {tpo.tpo_password}</td>
                                            <td>
                                    <button  className="btn btn-info"   onClick={ () => this.editTPO(tpo.id)} ><FaEdit/>Update </button>
                                    <button style={{marginLeft: "10px"}}  onClick={ () => this.deleteTPO(tpo.id)} className="btn btn-danger"><FaTrash/>Delete </button>

                                    <button style={{marginLeft: "10px"}}  onClick={ () => this.viewTPO(tpo.id)} className="btn btn-info"><FaEye/>View </button>
                                               
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

export default TPOComponent
