"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import ProductCard from "@/components/productCard/ProductCard";

type Product = {
  _id: string;
  name: string;
  price: number;
};

export default function FlashSale() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getFlashSaleProducts = async () => {
      try {
        const res = await api.get(
          "/products/flashSale"
        );

        setProducts(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getFlashSaleProducts();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">
        Flash Sale
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}