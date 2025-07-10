import { FileOutlined, HomeOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

function getItem(label, key, icon, children) {
    return { key, icon, children, label };
}

const items = [
    getItem('Trang chủ', '', <HomeOutlined />),
    getItem('Quản lý người dùng', '/admin/users', <UserOutlined />),
    getItem('Teams', '/admin/teams', <TeamOutlined />),
    getItem('Files', '/admin/files', <FileOutlined />),
];

const Sidebar = ({ collapsed }) => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <Menu
            theme="light"
            mode="inline"
            selectedKeys={[location.pathname]}
            onClick={({ key }) => navigate(key)}
            items={items}
        />
    );
};

export default Sidebar;
