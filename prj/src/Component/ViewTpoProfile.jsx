import React, { Component } from 'react'
import TpoService from '../Service/TpoProfService'

export class ViewTpoProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            tpo: {}
        }
    }

    componentDidMount(){
        TpoService.getTpoById(this.state.id).then( res => {
            this.setState({tpo: res.data});
        })
    }
    
    cancel(){
        this.props.history.push('/tpo-profile/');
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
                                        <label>  Name: </label>
                                        <div> { this.state.tpo.tpo_name}</div>
                                    </div>
                                    <div className = "form-group">
                                        <label> EmailID: </label>
                                        <div> { this.state.tpo.tpo_emailID}</div>
                                    </div>
                                    <div className = "form-group">
                                        <label> Contact: </label>
                                        <div> { this.state.tpo.tpo_phone}</div>
                                    </div>
                                    <div className = "form-group">
                                        <label>Password: </label>
                                        <div> { this.state.tpo.tpo_password}</div>
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
export default ViewTpoProfile
