import React, { Component } from 'react'
import TpoService from '../Service/TpoProfService';
import { FaEdit ,FaEye} from 'react-icons/fa';




export class TpoProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
                Tpo: []
        }
        this.editTpo = this.editTpo.bind(this);
        this.viewTpo = this.viewTpo.bind(this);
      
    }


    componentDidMount(){
        TpoService.getTpo().then((res) => {
            this.setState({Tpo: res.data});
        });
    }
    editTpo(id){
        
        this.props.history.push(`/update-tpo-profile/${id}`);
    }
    viewTpo(id){
        this.props.history.push(`/view-tpo-profile/${id}`);
    }
    
    render() {
        return (
            <div>
          
            
            
            <div className = "row">
              
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
                                     this.state.Tpo.map(tpo =>
                                        <tr key = {tpo.id}>
                                              <td> { tpo.tpo_name} </td> 
                                            <td> { tpo.tpo_emailID} </td> 
                                            <td> {tpo.tpo_phone}</td>
                                            <td> {tpo.tpo_password}</td>
                                            <td>
                                    <button  className="btn btn-info"   onClick={ () => this.editTpo(tpo.id)} ><FaEdit/>Update </button>
                                    <button style={{marginLeft: "10px"}}  onClick={ () => this.viewTpo(tpo.id)} className="btn btn-info"><FaEye/>View </button>
                                               
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

export default TpoProfile
