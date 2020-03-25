import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Typography } from 'antd';

const LoginPage = (props) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
    <form style={{ display: 'flex', flexDirection: "column" }} onSubmit={props.onSubmitHandler}>
      <Form.Item required>
        <Input
          id="email"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Enter your email"
          type="email"
          value={props.Email}
          onChange={props.onEmailHandler}
        />
        <Form.Item required>
          <Input
            id="password"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Enter your password"
            type="password"
            value={props.Password}
            onChange={props.onPasswordHandler}
          />
        </Form.Item>
        <Form.Item>
          <div>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{ minWidth: '100%' }}>
              로그인
                </Button>
          </div>
        </Form.Item>
      </Form.Item>
    </form>
  </div>
)

export default LoginPage