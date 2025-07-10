import React, { useState } from 'react'
import { Alert, Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../api/auth';
import { setToken } from '../utils/auth';

const Login = () => {
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const data = await loginApi(values.email, values.password);

            setToken(data.access_token);
            setIsSuccess(true);
            setTimeout(() => {
                navigate('/admin'); // chuyển sang trang admin
            }, 1000);
        } catch (error) {
            setIsSuccess(false);
            setMessage('Đăng nhập thất bại: Email hoặc mật khẩu sai');
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: '100px auto' }}>
            <h1>Login</h1>
            {message && (
                <Alert message={message} type={isSuccess ? 'success' : 'error'} showIcon />
            )}
            <Form
                layout="vertical"
                onFinish={onFinish}
                initialValues={{
                    email: 'john@mail.com',
                    password: 'changeme',
                }}>
                <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="password" label="Mật khẩu" rules={[{ required: true }]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary" block>
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login

