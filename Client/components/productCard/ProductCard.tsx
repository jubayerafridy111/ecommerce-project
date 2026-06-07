type ProductCardSchema = {
  name: string;
  price: number;
};

export default function ProductCard({name,price}: ProductCardSchema) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      {/* Fake Image Area */}
      <div className="h-40 bg-gray-100 flex items-center justify-center text-center px-4">
        <span className="font-medium text-gray-700">
          {name}
        </span>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold truncate">
          {name}
        </h3>

        <p className="mt-2 text-lg font-bold text-red-500">
          ${price}
        </p>
      </div>
    </div>
  );
}