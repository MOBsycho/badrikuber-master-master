import { useCart } from '@/components/cart/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import RotatingLogo from '../RotatingLogo';

export const Header = () => {
  

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <RotatingLogo/>
          <h1 className="text-xl font-bold text-spiritual-gold">
            KuberJi Store
          </h1>
        </div>
        
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-10 w-10" />
          {(
            <Badge 
              variant="default" 
              className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-accent"
            >
              {123}
            </Badge>
          )}
        </Button>
      </div>
    </header>
  );
};