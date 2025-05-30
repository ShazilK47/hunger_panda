"use client";

import { useState } from "react";
import Image from "next/image";
import { MenuItem } from "@/lib/types/menu";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils/format";
import { getImageUrl, optimizeUnsplashUrl } from "@/lib/utils/image-utils";

interface MenuItemCardProps {
  menuItem: MenuItem;
  onAddToCart?: (item: MenuItem, quantity: number) => void;
  inCart?: boolean;
}

export function MenuItemCard({
  menuItem,
  onAddToCart,
  inCart = false,
}: MenuItemCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { name, description, price, imageUrl, category } = menuItem;

  // Get optimized image URL with fallback
  const displayImage = optimizeUnsplashUrl(
    getImageUrl(imageUrl, "menuItemDefault"),
    640
  );

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(menuItem, quantity);
      // Reset quantity after adding to cart
      setQuantity(1);
    }
  };

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-hover group">
      <div className="relative">
        <div className="absolute top-2 right-2 z-10">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">
            {category}
          </span>
        </div>{" "}
        <div className="h-48 overflow-hidden relative bg-gray-100">
          <Image
            src={displayImage}
            alt={name}
            fill
            className="object-cover transition-transform group-hover:scale-105 duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg=="
            data-fallback-type="menuItemDefault"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/fallback-food-image.jpg";
            }}
          />
        </div>
      </div>

      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="font-serif group-hover:text-primary transition-colors">
            {name}
          </CardTitle>
          <div className="text-lg font-bold text-primary">
            {formatCurrency(price)}
          </div>
        </div>
        <CardDescription className="line-clamp-2 mt-2">
          {description || "No description available"}
        </CardDescription>
      </CardHeader>

      {onAddToCart && (
        <CardFooter className="pt-4 border-t">
          <div className="w-full flex items-center gap-2">
            {" "}
            <div className="flex items-center border border-gray-200 rounded-full overflow-hidden shadow-sm">
              <button
                className="w-8 h-9 flex items-center justify-center text-gray-800 font-bold disabled:opacity-50 hover:bg-gray-100 transition-all"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                disabled={quantity <= 1}
                aria-label="Decrease quantity"
              >
                <span className="transform translate-y-[-1px]">−</span>
              </button>
              <span className="w-8 h-9 flex items-center justify-center font-medium text-gray-900">
                {quantity}
              </span>
              <button
                className="w-8 h-9 flex items-center justify-center text-gray-800 font-bold hover:bg-gray-100 transition-all"
                onClick={() => setQuantity((prev) => prev + 1)}
                aria-label="Increase quantity"
              >
                <span className="transform translate-y-[-1px]">+</span>
              </button>
            </div>
            <Button
              onClick={handleAddToCart}
              className="flex-1 rounded-pill font-semibold shadow-sm hover:shadow-md"
              disabled={inCart}
            >
              {inCart ? "In Cart" : "Add to Cart"}
            </Button>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
