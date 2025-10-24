import { Product } from '@/components/cart/CartContext'
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';



export const ProductCard = ({ product }) => {

  return (
    <div className="group relative overflow-hidden rounded-xl bg-card transition-all duration-300 hover:shadow-[var(--shadow-card-hover)]" style={{ boxShadow: 'var(--shadow-card)' }}>
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-muted to-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <div className="mb-2 flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              {product.category}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-card-foreground">
              {product.name}
            </h3>
          </div>
          <p className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ${product.price}
          </p>
        </div>
        
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        
        <Button
         
          variant="cart"
          className="w-full"
          size="lg"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
