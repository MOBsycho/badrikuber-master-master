"use client";
import  MyNav  from "@/components/MyNav";
import Footer from "@/components/Footer";


export default function Events(){
  return (
    <main className="bg-primary cursor-default select-none">
     <MyNav />
     <h1 className="text-center text-brown-100 text-4xl font-bold">
      Our Celebrations
     </h1>
     <h3 className="text-center text-brown-100 text-2xl">Of course you can also participate😉</h3>
     <Footer/>
    </main>
  );
}