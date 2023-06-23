import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { ICredentials } from '../../types/credentials.types';
import { useLoginStore } from './store';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { sendCredentials }  = useLoginStore();
  const onFinish = (values: ICredentials) => {
    sendCredentials(values, navigate);
  };

  return (
    <div className="center-form">
        <Form
          layout='vertical'
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 18 }}
          style={{ width: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
        <Form.Item
          label="Имя пользователя"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ span: 18 }}>
          <Checkbox>Запомнить меня</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 18 }}>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>
    </div>  
  );
}
  

export default Login;