
"use client"
import Footer from '@/components/Footer';
import { motion } from "framer-motion"
import MyNav from '@/components/MyNav';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/cart/ProductCard';
import { Header } from '@/components/cart/CartHeader';


const products = [
  {
    id: 1,
    name: 'Brass Diya Set',
    price: '₹299',
    image: '/products/diya-1.png'
  },
  {
    id: 2,
    name: 'Rudraksha Mala',
    price: '₹499',
    image: '/products/rudrakash.png',
  },
  {
    id: 3,
    name: 'Puja Thali',
    price: '₹699',
    image: '/products/pooja-thali-1.png',
  },
  {
    id: 4,
    name: 'Gomati Chakra Set',
    price: '₹199',
    image: '/products/gomati-2.png',
  },
];

export default function Shop() {
  return (
    <section className="bg-primary cursor-default select-none"> 
    <MyNav/>
    <div className="min-h-screen bg-background">
      {/* <Header /> */}
      
      <main className="container py-12">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-spiritual-gold bg-clip-text ">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our collection of handloom products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
    <Footer/>
    </section>
  );
}
