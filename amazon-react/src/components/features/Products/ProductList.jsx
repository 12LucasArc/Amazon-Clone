import productData from '../../features/Products/ProductData';
import ProductCard from '../Products/ProductCard';

export default function ProductList() {
    return (
        <div className=" p-6">
            <h2 className="text-2xl font-semibold mb-4">Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {productData.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product} />
                ))}
            </div>
        </div>
    );
}