// components/ProductCard.tsx
interface Product {
  name: string;
  price: string;
  image: string;
}

export default function ProductCard({ name, price, image }: Product) {
  return (
    <div className="flex flex-col items-center group">
      {/* Square Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#1A1A1A] mb-5">
        <img 
          src={image} 
          alt={name} 
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Product Info */}
      <div className="text-center space-y-1">
        <h3 className="text-white text-[10px] md:text-[12px] font-medium uppercase tracking-[0.1em]">
          {name}
        </h3>
        <p className="text-[#D1A2B5] text-[10px] md:text-[12px] font-semibold">
          N{price}
        </p>
      </div>
    </div>
  );
}