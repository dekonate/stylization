import Image from 'next/image';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { image, title, description, price } = product;

  return (
    <div className="bg-white rounded-3xl p-4 shadow-sm w-full flex flex-col">
      <div className="bg-slate-100 rounded-2xl aspect-square flex items-center justify-center p-6">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="w-full h-full object-contain"
        />
      </div>

      
      <h3 className="text-xl font-bold mt-4 text-gray-900">{title}</h3>

      
      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
        {description}
      </p>

      
      <div className="flex flex-col items-start mt-4">
        <span className="text-sm text-gray-900">{price} ₽</span>
        <button className="bg-blue-900 text-white rounded-full px-6 py-2 uppercase text-xs mt-4 transition-colors duration-200 hover:bg-blue-800">
          в корзину
        </button>
      </div>
    </div>
  );
}