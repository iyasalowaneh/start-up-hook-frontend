// redux
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

//actions
import { signin } from "../../store/actions/authAction"

const Signin = () => {

  const [user, SetUser] = useState({

        email: "",
        password: "",
    }
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (event) => {
    SetUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
     dispatch(signin(user,history));
    
  };

  return (
<>
<form onSubmit={handleSubmit} >
  <div class="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to signIn.</p>
    <hr></hr> 
       <label for="email"><b>Email</b></label>
    <input  type="text" placeholder="Enter Email" name="email" onChange={handleChange}  required/>

    <label for="firstName"><b>password</b></label>
    <input  type="password" placeholder="Enter password" name="password" onChange={handleChange}  required/>

    
    <div class="clearfix">
      <button type="submit" class="signupbtn">Sign Up</button>
    </div>
  </div>
</form>







</>  );
};

export default Signin;