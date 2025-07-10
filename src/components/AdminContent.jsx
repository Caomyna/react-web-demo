import { Breadcrumb, Layout } from 'antd';
import { Outlet, useLocation } from 'react-router-dom';
const { Content } = Layout;

const AdminContent = ({ bg, borderRadius }) => {
    const location = useLocation();
    const segments = location.pathname.split('/').filter(Boolean);

    return (
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }} items={segments.map(seg => ({ title: seg }))} />
            <div
                style={{
                    padding: 24,
                    minHeight: 360,
                    background: bg,
                    borderRadius: borderRadius,
                }}
            >
                <Outlet />
            </div>
        </Content>
    );
};

export default AdminContent;
