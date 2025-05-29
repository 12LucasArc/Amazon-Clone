import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/features/Auth/Login';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/Login" element={<Login />} />
            </Routes>
        </Router>
    );
}