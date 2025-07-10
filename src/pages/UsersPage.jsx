import React, { useEffect, useState } from 'react';
import { message, Spin, Input, Select, Button, Row, Col, Form, Space, Card, Divider } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';

import UserTable from '../components/UserTable';
import { fetchUsers } from '../api/users';

const { Option } = Select;

export default function UsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        accountType: 'Học sinh',
        level: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchUsers();
                const formatted = res.data.map((user, index) => ({
                    stt: index + 1,
                    id: user.id,
                    name: user.name,
                    accountType: 'Học sinh',
                    level: index % 3 === 0 ? 'Cấp 1' : index % 3 === 1 ? 'Cấp 2' : 'Cấp 3',
                    email: user.email,
                    phone: user.phone || 'Không có',
                    password: user.password,
                    role: user.role,
                    avartar: user.avatar,
                    createdAt: new Date(user.creationAt).toLocaleString(),
                }));
                setUsers(formatted);
            } catch (err) {
                console.error(err);
                message.error('Không thể tải danh sách người dùng');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleFilterChange = (key, value) => {
        setFilters({ ...filters, [key]: value });
    };

    const handleSearch = () => {
        message.info('Đã lọc dữ liệu (giả lập)');
        // TODO: thực hiện lọc thực tế nếu cần
    };


    return (
        // loading ? <Spin tip="Đang tải dữ liệu..." /> : <UserTable users={users} />;
        <>
            <Row justify="space-between" align="middle" style={{ marginBottom: 20 }}>
                <Col>
                    <h3 style={{ margin: 0 }}>QUẢN LÝ NGƯỜI DÙNG</h3>
                </Col>
                <Col>
                    <Space>
                        <Button icon={<PlusOutlined />} >Thêm người dùng</Button>
                        <Button icon={<UploadOutlined />}>Nhập từ Excel</Button>
                    </Space>
                </Col>
            </Row>
            <Divider style={{ margin: '0 0 24px 0' }} />
            <Form
                layout="inline"
                style={{ marginTop: 20, marginBottom: 20 }}
                onFinish={handleSearch}
            >
                <Form.Item label="Loại tài khoản">
                    <Select
                        value={filters.accountType}
                        style={{ width: 120 }}
                        onChange={(val) => handleFilterChange('accountType', val)}
                    >
                        <Option value="Học sinh">Học sinh</Option>
                        <Option value="Giáo viên">Giáo viên</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Cấp">
                    <Select
                        value={filters.level}
                        style={{ width: 100 }}
                        onChange={(val) => handleFilterChange('level', val)}
                    >
                        <Option value="">Tất cả</Option>
                        <Option value="Cấp 1">Cấp 1</Option>
                        <Option value="Cấp 2">Cấp 2</Option>
                        <Option value="Cấp 3">Cấp 3</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Email">
                    <Input
                        value={filters.email}
                        onChange={(e) => handleFilterChange('email', e.target.value)}
                        style={{ width: 200 }}
                    />
                </Form.Item>

                <Form.Item label="Điện thoại">
                    <Input
                        value={filters.phone}
                        onChange={(e) => handleFilterChange('phone', e.target.value)}
                        style={{ width: 200 }}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">Tìm kiếm</Button>
                </Form.Item>
            </Form>

            {loading ? <Spin tip="Đang tải dữ liệu..." /> : <UserTable users={users} />}


        </>
    );
}
