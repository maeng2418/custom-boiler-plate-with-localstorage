import React from 'react';

const LoginPage = (props) => (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
      <form style={{display: 'flex', flexDirection: "column"}} onSubmit={props.onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={props.Email} onChange={props.onEmailHandler}/>
        <label>Password</label>
        <input type="password" value={props.Password} onChange={props.onPasswordHandler}/>
        <br/>
        <button type="submit">
          Login
        </button>
      </form>
    </div>
)

export default LoginPage