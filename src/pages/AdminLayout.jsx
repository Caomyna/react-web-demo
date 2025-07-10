import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, theme } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { removeToken } from '../utils/auth';
import Sidebar from '../components/Sidebar';
import AdminHeader from '../components/Header';
import AdminContent from '../components/AdminContent';

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
            <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} theme="light"
                width={250}
            >
                <Sidebar collapsed={collapsed} />
            </Sider>
            <Layout>
                <AdminHeader bg={colorBgContainer} />
                <AdminContent bg={colorBgContainer} borderRadius={borderRadiusLG} />
            </Layout>
        </Layout>
    );
};

export default AdminLayout;
