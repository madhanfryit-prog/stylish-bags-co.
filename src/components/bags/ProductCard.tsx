import { ArrowRight, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  name: string;
  category: string;
  description: string;
  price: string;
  originalPrice: string;
  alt: string;
}

export const ProductCard = ({ image, name, category, description, price, originalPrice, alt }: ProductCardProps) => {
  return (
    <Card className="product-tile group">
      <div className="relative overflow-hidden rounded-[1.25rem] rounded-b-none bg-surface">
        <div className="absolute left-4 top-4 z-10 inline-flex items-center rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-primary shadow-soft">
          20% OFF
        </div>
        <img
          src={image}
          alt={alt}
          loading="lazy"
          width={768}
          height={768}
          className="aspect-[4/4.2] w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none"
        />
      </div>

      <CardContent className="space-y-5 p-5 pt-5">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">{category}</p>
            <div className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
              <Star className="size-3.5 fill-current" />
              4.8
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-2xl font-bold text-foreground">{name}</h3>
            <p className="text-sm leading-6 text-muted-foreground">{description}</p>
          </div>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div className="space-y-1">
            <p className="text-2xl font-extrabold text-foreground">{price}</p>
            <p className="text-sm text-muted-foreground line-through">{originalPrice}</p>
          </div>
          <Button variant="soft" className="group/button">
            View
            <ArrowRight className="transition-transform duration-300 group-hover/button:translate-x-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
