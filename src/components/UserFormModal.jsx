import React, { useEffect } from 'react';
import { Modal, Form, Input, Select } from 'antd';

const { Option } = Select;

export default function UserFormModal({ open, onCancel, onSubmit, initialValues }) {
    const [form] = Form.useForm(); //Dùng Form.useForm() để điều khiển form từ bên ngoài (set/reset/submit)

    useEffect(() => {
        if (initialValues) {
            form.setFieldsValue(initialValues);
        } else {
            form.resetFields();
        }
    }, [initialValues]);

    return (
        <Modal
            open={open}
            title={initialValues ? 'Cập nhật người dùng' : 'Thêm người dùng'}
            onCancel={onCancel}
            onOk={() => form.submit()} //gọi form.submit() để kích hoạt onFinish
        >
            <Form form={form} layout="vertical" onFinish={onSubmit}>
                <Form.Item name="name" label="Họ tên" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="avatar" label="Avatar">
                    <Input />
                </Form.Item>
                {/* <Form.Item name="phone" label="Điện thoại">
                    <Input />
                </Form.Item>
                <Form.Item name="accountType" label="Loại tài khoản">
                    <Select>
                        <Option value="Học sinh">Học sinh</Option>
                        <Option value="Giáo viên">Giáo viên</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="level" label="Cấp">
                    <Select>
                        <Option value="Cấp 1">Cấp 1</Option>
                        <Option value="Cấp 2">Cấp 2</Option>
                        <Option value="Cấp 3">Cấp 3</Option>
                    </Select>
                </Form.Item> */}
            </Form>
        </Modal>
    );
}
