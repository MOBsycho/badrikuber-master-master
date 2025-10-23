"use client";
import  MyNav  from "@/components/MyNav";
import EventTimeline from "@/components/EventTimeline";
import React from "react";
import Footer from "@/components/Footer";
import ExpandableCardDemo from "@/components/expandable-card-demo-standard";

const Events = () => {
  return (
    <main className="bg-primary cursor-default select-none">
     <MyNav />
     <h1 className="text-center text-brown-100 text-4xl font-bold">
      Our Celebrations
     </h1>
     <h3 className="text-center text-brown-100 text-2xl">Of course you can also participate😉</h3>
     <ExpandableCardDemo/>
     <Footer/>
    </main>
  );
};

export default Events;
