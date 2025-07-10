import {
    HomeOutlined,
    BellOutlined,
    BookOutlined,
    ToolOutlined,
    FileTextOutlined,
    ReadOutlined,
    AppstoreAddOutlined,
    QuestionOutlined,
    TeamOutlined,
    CheckSquareOutlined,
    UserOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { Menu, Divider } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

function getItem(label, key, icon, children) {
    return { key, icon, children, label };
}

const mainMenuItems = [
    getItem('Trang chủ', '/', <HomeOutlined />),
    getItem('Thông báo', '/notifications', <BellOutlined />),
    getItem('Sách điện tử (offline)', '/books-offline', <BookOutlined />),
    getItem('Công cụ', '/tools', <ToolOutlined />),
    getItem('Sách điện tử', '/books', <FileTextOutlined />),
    getItem('Lớp học', '/classrooms', <ReadOutlined />),
    getItem('Education Game', '/games', <AppstoreAddOutlined />),
    getItem('Hướng dẫn sử dụng', '/guide', <ToolOutlined />),
];

const adminItems = [
    getItem('Thư viện', '/admin/library', <FileTextOutlined />),
    getItem('Quản lý câu hỏi', '/admin/questions', <QuestionOutlined />),
    getItem('Quản lý lớp học', '/admin/class-manage', <TeamOutlined />),
    getItem('Ngân hàng đề kiểm tra', '/admin/test-bank', <CheckSquareOutlined />),
    getItem('Quản lý người dùng', '/admin/users', <UserOutlined />),
    getItem('Type & OptionType', '/admin/types', <SettingOutlined />),
];

const Sidebar = ({ collapsed }) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div>
            {/* Logo */}
            <div
                style={{
                    height: 64,
                    margin: 16,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: collapsed ? 'center' : 'flex-start',
                }}
            >
                {!collapsed ? (
                    <h1 style={{ margin: 0, fontWeight: '600' }}>
                        <span style={{ marginRight: 8 }}>📘</span> Sách Số
                    </h1>
                ) : (
                    <span style={{ fontSize: 24 }}>📘</span>
                )}
            </div>

            {/* Main menu */}
            <Menu
                theme="light"
                mode="inline"
                selectedKeys={[location.pathname]}
                onClick={({ key }) => navigate(key)}
                items={mainMenuItems}
            />

            <Divider plain style={{ margin: '12px 0 8px 0' }} />

            {!collapsed && (
                <p style={{ textAlign: 'center', color: 'gray' }}>ADMINISTRATORS</p>
            )}

            {/* Admin menu */}
            <Menu
                theme="light"
                mode="inline"
                selectedKeys={[location.pathname]}
                onClick={({ key }) => navigate(key)}
                items={adminItems}
            />
        </div>
    );
};

export default Sidebar;
