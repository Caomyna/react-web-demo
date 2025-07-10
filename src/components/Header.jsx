import { Button, Col, Layout, Row } from 'antd';
const { Header } = Layout;
import { BellOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';

const AdminHeader = ({ bg }) => (
    <Header
        style={{
            padding: '0 24px',
            height: 80,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: bg,
            boxShadow: '0 1px 4px rgba(0, 21, 41, 0.08)',
        }}>

        <Space size="large" align="center">
            {/* Chuông thông báo */}
            <Button type="text" shape="circle">
                <Badge count={5} offset={[-2, 4]}>
                    <BellOutlined style={{ fontSize: 22 }} />
                </Badge>
            </Button>

            {/* Avatar và tên người dùng */}
            <Space>
                <Avatar
                    src="https://i.imgur.com/LDOO4Qs.jpg"
                    size={36}
                    style={{ border: '1px solid gray' }}
                />
                <span style={{ fontWeight: 'bold', fontSize: 16 }}>NaCao</span>
            </Space>
        </Space>
    </Header>
);

export default AdminHeader;