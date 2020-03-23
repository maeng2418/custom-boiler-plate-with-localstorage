import React from 'react';

const RegisterPage = (props) => (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
      <form style={{display: 'flex', flexDirection: "column"}} onSubmit={props.onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={props.Email} onChange={props.onEmailHandler}/>
        <label>Name</label>
        <input type="name" value={props.Name} onChange={props.onNameHandler}/>
        <label>Password</label>
        <input type="password" value={props.Password} onChange={props.onPasswordHandler}/>
        <label>Confirm Password</label>
        <input type="password" value={props.ConfirmPassword} onChange={props.onConfirmPasswordHandler}/>
        <br/>
        <button type="submit">
          회원 가입
        </button>
      </form>
    </div>
);

export default RegisterPage;
