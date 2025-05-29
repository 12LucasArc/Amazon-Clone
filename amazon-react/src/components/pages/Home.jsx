import { useAuth } from '../../context/AuthContext';
import Header from '../layouts/Header';
import ProductList from '../features/Products/ProductList';

export default function Home() {
    const { user } = useAuth();

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />

            <main className="p-6">
                <h1 className="text-2xl font-semibold mb-4">
                    Welcome, {user?.name || ""}
                </h1>
                <ProductList />
            </main>
        </div>
    );
}