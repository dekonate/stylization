import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        
        <div className="flex justify-center mt-12">
          <button className="bg-blue-900 text-white uppercase rounded-full px-6 py-4 text-sm font-medium transition-colors duration-200 hover:bg-blue-800 w-full sm:w-auto">
            смотреть всю коллекцию
          </button>
        </div>
      </div>
    </main>
  );
}