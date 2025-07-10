import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, theme } from 'antd';
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { removeToken } from '../utils/auth';
import Sidebar from '../components/Sidebar';
import AdminHeader from '../components/Header';
import AdminContent from '../components/AdminContent';

// const { Header, Content, Sider } = Layout;
const { Sider } = Layout;

const AdminLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();


    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} theme="light">

                <div style={{ height: 32, margin: 16 }}>
                    {collapsed ? (
                        <h1 style={{ textAlign: 'center' }}>📘</h1>
                    ) : (
                        <h1 style={{ paddingLeft: '30px', margin: 0 }}>Sách Số</h1>
                    )}
                </div>
                <Sidebar collapsed={collapsed} />
            </Sider>
            <Layout>
                <AdminHeader bg={colorBgContainer} />
                <AdminContent bg={colorBgContainer} borderRadius={borderRadiusLG} />
            </Layout>
        </Layout>
    );

    // const sidebarItems = [
    //     {
    //         key: 'users',
    //         icon: <UserOutlined />,
    //         label: 'Users',
    //     },
    //     {
    //         key: 'settings',
    //         icon: <LaptopOutlined />,
    //         label: 'Settings',
    //     },
    //     {
    //         key: 'analytics',
    //         icon: <NotificationOutlined />,
    //         label: 'Analytics',
    //     },
    //     {
    //         key: 'logout',
    //         icon: <LogoutOutlined />,
    //         label: 'Logout',
    //     },
    // ];

    // const handleMenuClick = ({ key }) => {
    //     if (key === 'logout') {
    //         removeToken();
    //         navigate('/login');
    //     } else {
    //         navigate(`/admin/${key}`);
    //     }
    // };

    // // Lấy phần cuối path để set selected menu
    // const currentPath = location.pathname.split('/')[2] || 'users';

    // return (
    //     <Layout style={{ minHeight: '100vh' }}>
    //         <Header style={{ display: 'flex', alignItems: 'center' }}>
    //             <div style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
    //                 Admin Panel
    //             </div>
    //             {/* Có thể thêm top menu hoặc nút logout ở đây nếu muốn */}
    //         </Header>

    //         <Layout>
    //             <Sider width={200} style={{ background: colorBgContainer }}>
    //                 <Menu
    //                     mode="inline"
    //                     selectedKeys={[currentPath]}
    //                     style={{ height: '100%', borderRight: 0 }}
    //                     items={sidebarItems}
    //                     onClick={handleMenuClick}
    //                 />
    //             </Sider>

    //             <Layout style={{ padding: '0 24px 24px' }}>
    //                 <Breadcrumb
    //                     style={{ margin: '16px 0' }}
    //                     items={[
    //                         { title: 'Admin' },
    //                         { title: currentPath.charAt(0).toUpperCase() + currentPath.slice(1) },
    //                     ]}
    //                 />
    //                 <Content
    //                     style={{
    //                         padding: 24,
    //                         margin: 0,
    //                         minHeight: 280,
    //                         background: colorBgContainer,
    //                         borderRadius: borderRadiusLG,
    //                     }}
    //                 >
    //                     <Outlet /> {/* Nơi hiển thị trang con */}
    //                 </Content>
    //             </Layout>
    //         </Layout>
    //     </Layout>
    // );
};

export default AdminLayout;
