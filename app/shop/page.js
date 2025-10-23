
"use client"
import Footer from '@/components/Footer';
import { motion } from "framer-motion"
import MyNav from '@/components/MyNav';
import Image from 'next/image';


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
    <div className="min-h-screen bg-primary p-8">
      <motion.div 
      initial={{opacity:0, y:100}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:1, ease: 'easeInOut'}}
      viewport={{once:true}}
      className='flex flex-col items-center justify-center mb-8'>
       
      <h1 className="text-3xl font-bold text-center mb-4 text-brown-100 flex items-center justify-center">
         Welcome to Our E-Store</h1>
         <h3 className='text-brown-100 text-center font-bold text-xl'>
          Bhakti se Bhara, Seva ke Liye Samarpit.
         </h3> 
         <Image src="/products/products.png" className='saturate-200' width={200} height={200} alt="Store"/>
         </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <motion.div
           initial={{opacity:0,y:100}}
           whileInView={{opacity:1,y:0}}
           transition={{duration:1, ease:"easeInOut"}}
           viewport={{once:true}}
          key={product.id}
            className="border-brown-100 border-3 text-green-700 rounded-xl shadow-lg p-4 flex flex-col items-center  transition"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="rounded-xl"
            />
            <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
            <p className="text-lg font-medium text-green-700">{product.price}</p>
            <button className="mt-2 px-4 font-semibold py-2 bg-amber-100 text-primary rounded-lg ">
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
    </div>
    <Footer/>
    </section>
  );
}
