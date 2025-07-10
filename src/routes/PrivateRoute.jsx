import { Navigate } from 'react-router-dom';
import { getToken } from '../utils/auth';

export default function PrivateRoute({ children }) {
    const isAuthenticated = getToken();
    return isAuthenticated ? children : <Navigate to="/login" replace />;
}
