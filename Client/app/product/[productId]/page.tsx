import { api } from "@/lib/api";
import AddToCartButton from "@/components/AddToCartButton/AddToCartButton";

type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
};

type Props = {
  params: Promise<{productId: string}>;
};

export default async function ProductPage({params}: Props) {
  const { productId } = await params;

  const res = await api.get(`/products/${productId}`);
  const product: Product = res.data.data;

  return (
    <div className="max-w-7xl mx-auto p-10">
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Image Placeholder */}
        <div className="h-96 bg-gray-100 rounded-xl flex items-center justify-center">
          <span className="text-2xl font-bold">
            {product.name}
          </span>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="text-3xl font-bold text-red-500 mt-4">
            ${product.price}
          </p>

          <p className="mt-6 text-gray-600">
            {product.description}
          </p>

          <AddToCartButton
            product={{
              _id: product._id,
              name: product.name,
              price: product.price,
            }}
          />
        </div>

      </div>
    </div>
  );
}