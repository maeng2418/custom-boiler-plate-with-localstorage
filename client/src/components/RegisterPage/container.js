import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import RegisterPage from './presenter';

const Container = (props) => {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault(); // 페이지 새로고침 막음.

    if(Password !== ConfirmPassword) {
      return alert('비밀번호와 비밀번호 확인은 같아야 합니다.');
    }

    let body = {
      email: Email,
      password: Password,
      name: Name
    }

    props.registerUser(body)
    .then(response => {
      if(response.payload.success){
        props.history.push('/login');
      } else {
        alert("Failed to sign up");
      }
    })
  }

  return (
    <RegisterPage onSubmitHandler={onSubmitHandler} Email={Email} onEmailHandler={onEmailHandler} Name={Name} onNameHandler={onNameHandler} Password={Password} onPasswordHandler={onPasswordHandler} ConfirmPassword={ConfirmPassword} onConfirmPasswordHandler={onConfirmPasswordHandler}/>
  );
}

export default withRouter(Container);
