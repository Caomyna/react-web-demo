import { Table, Button, Space, Tag, Popconfirm, Tooltip } from 'antd';
import {
    EditOutlined,
    DeleteOutlined,
    KeyOutlined,
    PhoneOutlined,
    CalendarOutlined,
    UserOutlined,
    MailOutlined
} from '@ant-design/icons';

export default function UserTable({ users }) {
    const handleDelete = (id) => {
        console.log('Xoá user', id);
    };

    const handleEdit = (id) => {
        console.log('Sửa user', id);
    };

    const handleChangePassword = (id) => {
        console.log('Đổi mật khẩu', id);
    };

    const columns = [
        {
            title: '#',
            dataIndex: 'stt',
            key: 'stt',
        },
        {
            title: 'Mã',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Họ và tên',
            dataIndex: 'name',
            key: 'name',
            render: (text) => (
                <>
                    <UserOutlined style={{ marginRight: 6 }} />
                    {text}
                </>
            ),
        },
        {
            title: 'Loại tài khoản',
            dataIndex: 'accountType',
            key: 'accountType',
            render: (type) => <Tag color="blue">{type}</Tag>,
        },
        {
            title: 'Cấp',
            dataIndex: 'level',
            key: 'level',
            render: (cap) => {
                let color = 'blue';
                if (cap === 'Cấp 2') color = 'orange';
                else if (cap === 'Cấp 3') color = 'red';
                return <Tag color={color}>{cap}</Tag>;
            },
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: (text) => (
                <>
                    <MailOutlined style={{ marginRight: 6 }} />
                    {text}
                </>
            ),
        },
        {
            title: 'Điện thoại',
            dataIndex: 'phone',
            key: 'phone',
            render: (phone) => (
                <>
                    <PhoneOutlined style={{ marginRight: 6 }} />
                    {phone}
                </>
            ),
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (date) => (
                <>
                    <CalendarOutlined style={{ marginRight: 6 }} />
                    {date}
                </>
            ),
        },

        {
            title: 'Password',
            dataIndex: 'password',
            key: 'password',
        },

        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },

        {
            title: 'Avatar',
            dataIndex: 'avartar',
            key: 'avartar',
        },

        {
            title: 'Hành động',
            key: 'actions',
            render: (_, record) => (
                <Space>
                    <Tooltip title="Sửa">
                        <Button icon={<EditOutlined />} onClick={() => handleEdit(record.id)} />
                    </Tooltip>
                    <Tooltip title="Xem">
                        <Button icon={<KeyOutlined />} onClick={() => handleChangePassword(record.id)} />
                    </Tooltip>
                    <Tooltip title="Xoá">
                        <Popconfirm title="Xoá user này?" onConfirm={() => handleDelete(record.id)}>
                            <Button danger icon={<DeleteOutlined />} />
                        </Popconfirm>
                    </Tooltip>
                </Space>
            ),
        },
    ];

    // Dữ liệu mẫu 
    const data = [
        {
            stt: '1',
            id: '68719',
            name: 'THAO LINH',
            accountType: 'Học sinh',
            level: 'Cấp 2',
            email: 'banme87@gmail.com',
            phone: '0967102244',
            createdAt: '08/07/2025 17:43',
        },
        {
            stt: '2',
            id: '68718',
            name: 'AN THUYEN',
            accountType: 'Học sinh',
            level: 'Cấp 3',
            email: 'lenguyenanthuyen2009@gmail.com',
            phone: '088887877777',
            createdAt: '08/07/2025 17:15',
        },
        // Thêm các user còn lại...
    ];

    return (
        <Table
            columns={columns}
            dataSource={users}
            rowKey="id"
            pagination={{ pageSize: 10 }}
            scroll={{ x: 'max-content' }}
            bordered
        />
    );
}
