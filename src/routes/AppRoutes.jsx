import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/LoginForm';
import AdminLayout from '../pages/AdminLayout';
import Users from '../pages/UsersPage';
import PrivateRoute from './PrivateRoute';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route
                path="/admin"
                element={
                    <PrivateRoute>
                        <AdminLayout />
                    </PrivateRoute>
                }
            >
                <Route index element={<Users />} />
                <Route path="users" element={<Users />} />
            </Route>
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
}
