"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface CartItem {
  priceId: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartContextValue {
  items: CartItem[];
  add: (item: Omit<CartItem, "quantity">) => void;
  remove: (priceId: string) => void;
  clear: () => void;
  total: number;
  count: number;
  open: boolean;
  setOpen: (v: boolean) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("hc-cart");
    if (saved) setItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("hc-cart", JSON.stringify(items));
  }, [items]);

  function add(item: Omit<CartItem, "quantity">) {
    setItems((prev) => {
      const existing = prev.find((i) => i.priceId === item.priceId);
      if (existing)
        return prev.map((i) =>
          i.priceId === item.priceId ? { ...i, quantity: i.quantity + 1 } : i
        );
      return [...prev, { ...item, quantity: 1 }];
    });
    setOpen(true);
  }

  function remove(priceId: string) {
    setItems((prev) => prev.filter((i) => i.priceId !== priceId));
  }

  function clear() {
    setItems([]);
  }

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, add, remove, clear, total, count, open, setOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
