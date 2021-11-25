import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import style2 from '../css/style2.css'

class Login extends Component {
    render() {
        return (
            <>
            <div class="row" >
            <div class="col-sm-4" id="left" >
                <h5>Student Registration For Placement</h5>
            </div>
           
           
            <div class="col-sm-4" id="login-bg" >
            <div class="row" id="form-control right " >
              <div class=" container text-center " id="form-control  " >
		           <h1 >Login</h1>
                   
		           <div class="text-center" id="login-div">
                   <hr class="hr-dark "/>
		              <form action="" method="post"  >
		                <div class="form-group" id="form">
                            
                        <br/><input type="text" name="name" id="name" className="form=control" placeholder="Username"/> <br />
                        <input type="password" name="password" className="form=control" id="passord" placeholder="password"/> <br /><br/>
                        
                        <div class="button1">
                            <input type="submit" value="LOGIN" class="wpcf7-form-control wpcf7-submit"/>
                        </div><br/>
						<a href="/forgotPassword"><p>Forgot Password?</p></a>
                        </div>

				</form>

	            </div>
                 </div>
                 </div>
                 </div>
                 </div>

            </>
        )
    }

}

export default Login


	    