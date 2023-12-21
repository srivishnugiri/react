import React from 'react';
function Sign(){
  return (
    <body>
    <div class="form-container" d="signup">
      <form>
        <h1>Sign Up</h1>
      <label>FullName </label>
      <input type='text' required/>
      <br></br>
      <label>Email </label>
      <input type='text' required/>
      <br></br>
      <label>New PassWord </label>
      <input type='password' required/>
      <br></br>
      <label>Confirm PassWord </label>
      <input type='password' required/>
      <br></br>
      <button type="submit" class="submit-button">Submit</button>
      </form>
    </div>
    </body>
  );
}
export default Sign;