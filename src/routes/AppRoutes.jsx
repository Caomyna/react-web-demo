import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/LoginForm';
import AdminLayout from '../pages/AdminLayout';
import PrivateRoute from './PrivateRoute';
import UsersPage from '../pages/UsersPage';

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
                <Route index element={<UsersPage />} />
                <Route path="users" element={<UsersPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
}
