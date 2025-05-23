"use client";

import Link from "next/link";
import { useCart } from "@/components/cart/cart-context";
import { formatCurrency } from "@/lib/utils/format";

export function CartButton() {
  const { cart } = useCart();
  const { totalItems, totalAmount } = cart;

  if (totalItems === 0) {
    return (
      <Link
        href="/cart"
        className="flex items-center gap-1 p-2 text-gray-700 hover:text-primary transition-colors"
        aria-label="Cart is empty"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </Link>
    );
  }

  return (
    <Link
      href="/cart"
      className="flex items-center gap-2 p-2 text-gray-700 hover:text-primary transition-colors relative"
      aria-label={`${totalItems} items in cart`}
    >
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-medium text-black bg-orange-600 rounded-full">
          {totalItems}
        </span>
      </div>
      <span className="text-sm font-medium">{formatCurrency(totalAmount)}</span>
    </Link>
  );
}
