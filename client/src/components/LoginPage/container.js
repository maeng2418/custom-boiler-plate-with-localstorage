import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import LoginPage from './presenter';

const Container = (props) => {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
  
    const onEmailHandler = (event) => {
      setEmail(event.currentTarget.value);
    };
  
    const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value);
    };
  
    const onSubmitHandler = (event) => {
      event.preventDefault(); // 페이지 새로고침 막음.
  
      let body = {
        email: Email,
        password: Password
      }
  
      props.loginUser(body)
      .then(response => {
        if(response.payload.loginSuccess) {
          props.history.push('/'); // 로그인 성공시 페이지 이동
        } else {
          alert("Error");
        }
      })
    }

    return (
        <LoginPage onEmailHandler={onEmailHandler} Email={Email} onPasswordHandler={onPasswordHandler} Password={Password} onSubmitHandler={onSubmitHandler}/>
    )
}

export default withRouter(Container);