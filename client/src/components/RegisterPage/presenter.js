import React from 'react';
import { Form, Input, Button } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegisterPage = (props) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
    <Form style={{ minWidth: '375px', display: 'flex', flexDirection: 'column' }} {...formItemLayout} onSubmit={props.onSubmitHandler} >
      <Form.Item required label="Name">
        <Input
          id="name"
          placeholder="Enter your name"
          type="text"
          value={props.Name}
          onChange={props.onNameHandler}
        />
      </Form.Item>
      <Form.Item required label="Last Name">
        <Input
          id="lastName"
          placeholder="Enter your Last Name"
          type="text"
          value={props.LastName}
          onChange={props.onLastNameHandler}
        />
      </Form.Item>
      <Form.Item required label="Email" hasFeedback>
        <Input
          id="email"
          placeholder="Enter your Email"
          type="email"
          value={props.Email}
          onChange={props.onEmailHandler}
        />
      </Form.Item>
      <Form.Item required label="Password" hasFeedback>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={props.Password}
                  onChange={props.onPasswordHandler}
                />
              </Form.Item>

              <Form.Item required label="Confirm" hasFeedback>
                <Input
                  id="confirmPassword"
                  placeholder="Enter your confirmPassword"
                  type="password"
                  value={props.ConfirmPassword}
                  onChange={props.onConfirmPasswordHandler}
                />
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button onClick={props.onSubmitHandler} style={{ minWidth: '100%' }} type="primary">
                  회원 가입
                </Button>
              </Form.Item>
    </Form>
  </div>
);

export default RegisterPage;
