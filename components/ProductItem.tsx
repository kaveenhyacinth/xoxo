/* eslint-disable @next/next/no-img-element */
import { IProduct } from "@/utils/data";
import Link from "next/link";
import React from "react";

export interface ProductItemProps {
  product: IProduct;
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="card">
      <Link href={`/products/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          className="rounded shadow"
        />
      </Link>

      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/products/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button type="button" className="primary-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
