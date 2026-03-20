"use client";

import { createContext, useContext, useEffect, useState, useRef, ReactNode } from "react";
import { Product, getProduct } from "@/data/products";

export interface CartItem {
  productId: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getItemCount: () => number;
  getCartItems: () => (CartItem & { product: Product })[];
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "ryan-clark-creates-cart";

function getInitialCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(getInitialCart);
  const isInitialMount = useRef(true);

  // Save cart to localStorage whenever it changes (skip initial mount)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = (productId: string) => {
    const product = getProduct(productId);
    if (!product || product.inventory <= 0) return;

    setItems((prev) => {
      const existing = prev.find((item) => item.productId === productId);
      if (existing) {
        // Check inventory before adding more
        if (existing.quantity >= product.inventory) return prev;
        return prev.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { productId, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.productId !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    const product = getProduct(productId);
    if (!product) return;

    // Cap quantity at inventory
    const cappedQuantity = Math.min(quantity, product.inventory);

    setItems((prev) =>
      prev.map((item) =>
        item.productId === productId
          ? { ...item, quantity: cappedQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getCartTotal = () => {
    return items.reduce((total, item) => {
      const product = getProduct(item.productId);
      if (!product) return total;
      return total + product.price * item.quantity;
    }, 0);
  };

  const getItemCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  const getCartItems = () => {
    return items
      .map((item) => {
        const product = getProduct(item.productId);
        if (!product) return null;
        return { ...item, product };
      })
      .filter((item): item is CartItem & { product: Product } => item !== null);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getItemCount,
        getCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
