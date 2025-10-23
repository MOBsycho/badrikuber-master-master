"use client";

import React from "react";
import MyNav from "@/components/MyNav";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { MapPin, Train, Plane, Car } from "lucide-react";

const places = [
  {
    name: "Badrinath",
    time: "20km",
    img: "https://images.unsplash.com/photo-1601821139314-66a4d14cfc00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwxNDk1ODQ2OXx8ZW58MHx8fHx8",
  },
  {
    name: "Vasudhara",
    time: "20km with 8 km trek",
    img: "https://imgs.search.brave.com/WTm_5h6N7HQNH5elkE0zyrQa1HLMsK0IykYTkftW3CM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJhd2VsbC5pbi9h/ZG1pbi9pbWFnZXMv/dXBsb2FkLzIyMjM3/NzY0N0JhZHJpbmF0/aF9WYXN1ZGhhcmFf/RmFsbHNfTWFpbi5q/cGc",
  },
  {
    name: "Mana Village",
    time: "22km",
    img: "https://imgs.search.brave.com/ca-IJ6S0_m1UI3ArDkWHqLGmy_DtjGfk3ZGTx-Co6sI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vcVRmd2pu/aTVVaEE0X0QtT0pS/TXBxczRvVmZCcEFC/eUU3QmJJcGR0RWVV/by9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl6/TjJGdy9NUzV6WTJW/dVpUY3VZMjl0L0wy/bHpMMmx0WVdkbEwy/bHUvWTNKbFpHbGli/R1ZwYm1ScC9ZUzh4/TFcxaGJtRXRkbWxz/L2JHRm5aUzFpWVdS/eWFXNWgvZEdndGRY/UjBZWEpoYTJoaC9i/bVF0WVhSMGNpMW9a/WEp2L1AzRnNkRDA0/TWlaMGN6MHgvTnpJ/Mk5qUTJORFk0TVRJ/MQ",
  },
  {
    name: "Hemkund Shahib",
    time: "5 km road with 7km trek",
    img: "https://images.unsplash.com/photo-1653545709990-a6a4c8a6c36c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVta3VuZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Valley of Flowers",
    time: "20km road with 7km trek",
    img: "https://images.unsplash.com/photo-1631377649998-58947055c21d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFsbGV5JTIwb2YlMjBmbG93ZXJzfGVufDB8fDB8fHww",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // adjust delay between children
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const ReachUs = () => {
  return (
    <div className="bg-white">
      <MyNav />
      
      {/* Hero Section with Video */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/pandukeshwar.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-quicksand">
              How to Reach Pandukeshwar
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto">
              Journey to the sacred abode nestled in the Himalayas
            </p>
          </motion.div>
        </div>
      </section>

      {/* How to Reach Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-spiritual-green mb-4 font-quicksand"
          >
            How to Reach
          </motion.h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Your journey to the divine temple of KuberJi
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "By Road",
                desc: "Accessible via NH7, 22 km from Joshimath. Regular taxis and buses available from major cities.",
                icon: <Car className="w-12 h-12" />,
              },
              {
                title: "By Train",
                desc: "Nearest railway station: Rishikesh (270 km). Taxi and bus services available to Pandukeshwar.",
                icon: <Train className="w-12 h-12" />,
              },
              {
                title: "By Air",
                desc: "Jolly Grant Airport (295 km) in Dehradun. Taxi services and buses connect to the temple.",
                icon: <Plane className="w-12 h-12" />,
              },
            ].map((mode, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-spiritual-gold mb-4 flex justify-center">
                  {mode.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-spiritual-green">
                  {mode.title}
                </h3>
                <p className="text-center text-gray-600 leading-relaxed">
                  {mode.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-spiritual-green mb-4 font-quicksand">
              Nearby Attractions
            </h2>
            <p className="text-gray-600 text-lg">
              Explore sacred and scenic places around Pandukeshwar
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {places.map((place, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    height={200}
                    width={400}
                    src={place.img}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-spiritual-green mb-2">
                    {place.name}
                  </h3>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-spiritual-gold" />
                    <p className="text-sm">{place.time}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ReachUs;
