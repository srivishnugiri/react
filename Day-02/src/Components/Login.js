import React from 'react';
import PetCard from './PetCard';
function Login(){
  return (
    <body>
    <div className="form-container" d="login">
      <form>
        <h1><b>Login</b></h1>
      <label><b>UserName </b></label>
      <input type='text' required/>
      <br></br>
      <label><b>PassWord </b></label>
      <input type='password' required/>
      <br></br>
      <button type="submit" class="submit-button" onClick={PetCard}><b>Submit</b></button>
      </form>
    </div>
    </body>
  );
}
export default Login;