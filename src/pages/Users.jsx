import React, { useEffect, useState } from 'react';
import { message, Spin } from 'antd';

import UserTable from '../components/UserTable';
import { fetchUsers } from '../api/users';

export default function UsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

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

    return loading ? <Spin tip="Đang tải dữ liệu..." /> : <UserTable users={users} />;
}
