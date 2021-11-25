import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FaEdit ,FaEye,FaTrash,FaPlus} from 'react-icons/fa';

import STUDENTService from '../Service/STUDENTService';



class STUDENTComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                students: []
        }
        this.addSTUDENT = this.addSTUDENT.bind(this);
        this.editSTUDENT = this.editSTUDENT.bind(this);
        this.viewSTUDENT = this.viewSTUDENT.bind(this);
        this.deleteSTUDENT = this.deleteSTUDENT.bind(this);
    }
   
  
    componentDidMount(){
        STUDENTService.getSTUDENT().then((res) => {
            this.setState({students: res.data});
        });
    }
    addSTUDENT(){
        this.props.history.push("/add-STUDENT/_add"); 
    }
    editSTUDENT(id){
        this.props.history.push(`/add-STUDENT/${id}`);
    }
    viewSTUDENT(id){
        this.props.history.push(`/view-STUDENT/${id}`);
    }
    deleteSTUDENT(id){
        STUDENTService.deleteSTUDENT(id).then( res => {
        this.setState({students: this.state.students.filter(students => students.id !== id)});
        
    });}
   
    render() {
        return (
            <div>
         
         
            <Container >
            <Row style={{height:'60px   ' }}>
                <Col  style={{backgroundColor:"#fff" }} className='col-1'></Col>
                <Col style={{backgroundColor:"#6C0411" ,fontFamily:'lucida Calligraphy',fontSize:'60px' ,textAlign:'center',color:'white'}} className='col-10'> Student List</Col>
                <Col   style={{backgroundColor:"fff" }}className='col-1'></Col>
            </Row>
            </Container>
            <div  className='col-1'>
               <button className="btn btn-primary" onClick={this.addSTUDENT}><FaPlus/>       STUDENT</button>
            </div>
            
            <br></br>
            <div className = "table">
                        <table className = "table table-striped table-bordered  table-dark  table-hover " >

                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th> Reg</th>
                                    <th> Email Id</th>
                                    <th> Contact</th>
                                    <th> DOB</th>
                                    <th> Password</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.students.map(
                                        student => 
                                        <tr key = {student.id}>
                                            
                                            <td> {student.student_name} </td>   
                                             <td> {student.student_regno} </td>   
                                             <td> {student.student_emailID}</td>
                                             <td> {student.student_phone}</td>
                                             <td> {student.student_DOB}</td>
                                             <td> {student.student_password}</td>

                                             <td>
                                                 <button  className="btn btn-info" onClick={ () => this.editSTUDENT(student.id)}><FaEdit/>Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteSTUDENT(student.id)}className="btn btn-danger"><FaTrash/>Delete </button>
                                                 <button style={{marginLeft: "10px"}}  onClick={ () => this.viewSTUDENT(student.id)} className="btn btn-info"><FaEye/>View </button>
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

export default STUDENTComponent