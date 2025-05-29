import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

export default function RequireAuth({ children }) {
    const { currentUser } = useAuth();

    if (!currentUser) {
        return <Navigate to="/Login" />;
    }

    return children;
}