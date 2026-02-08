"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

export default function AddToCartButton({ product, className = "" }: AddToCartButtonProps) {
  const { addToCart, items } = useCart();

  const cartItem = items.find(item => item.productId === product.id);
  const currentQuantity = cartItem?.quantity || 0;
  const isOutOfStock = product.inventory <= 0;
  const isMaxQuantity = currentQuantity >= product.inventory;

  const handleClick = () => {
    if (!isOutOfStock && !isMaxQuantity) {
      addToCart(product.id);
    }
  };

  if (isOutOfStock) {
    return (
      <button
        disabled
        className={`px-8 py-3 bg-neutral-700 text-neutral-400 font-semibold rounded-full cursor-not-allowed ${className}`}
      >
        Out of Stock
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      disabled={isMaxQuantity}
      className={`px-8 py-3 bg-amber-500 text-neutral-950 font-semibold rounded-full hover:bg-amber-400 transition-colors disabled:bg-neutral-600 disabled:cursor-not-allowed ${className}`}
    >
      {isMaxQuantity ? "Max Quantity" : "Add to Cart"}
    </button>
  );
}
