"use client";
import React from "react";
import Image from "next/image";
import MyNav from "@/components/MyNav";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-amber-100 cursor-default select-none">
      {/* Navigation */}
      <div className="md:hidden bg-primary">
        <MyNav />
      </div>

      {/* Hero Section */}
      <section className="hidden md:block about-section bg-amber-100 h-screen w-full">
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="bg-primary bg-opacity-80 rounded-xl shadow-lg w-full max-w-6xl mx-6 sm:mx-20 p-6 sm:p-12">
            <MyNav />
            <div className="flex flex-row justify-between mx-auto mt-12">
              <div className="flex w-1/2 p-8">
                <Image
                  src="/images/sitting-2.jpeg"
                  alt="Pandukeshwar Temple"
                  className="rounded-lg saturate-100"
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex flex-col justify-center w-1/2 p-8">
                <h1 className="mb-4 text-brown-100 text-3xl font-bold">
                  About Pandukeshwar
                </h1>
                <p className="font-semibold text-lg text-amber-100">
                  Nestled amidst the mighty Himalayas, Pandukeshwar is a sacred
                  village near the Alaknanda River in Chamoli district,
                  Uttarakhand. It is known as the winter abode of Lord Kuber and
                  holds deep ties to Lord Badrinath, mythology, and ancient
                  rituals that continue to this day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Hero */}
      <main className="sm:hidden flex bg-primary mt-[-2px] p-4 flex-col items-center">
        <h1 className="mb-4 text-brown-100 text-3xl font-bold">
          About Pandukeshwar
        </h1>
        <p className="font-semibold text-lg text-amber-100 text-center">
          A divine Himalayan village revered as the winter abode of Lord Kuber,
          the treasurer of gods, and deeply connected with the traditions of
          Badrinath Dham.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="mt-4"
        >
          <Image
            src="/images/sitting-2.jpeg"
            alt="Pandukeshwar Temple"
            className="rounded-lg"
            width={500}
            height={500}
          />
        </motion.div>
      </main>

      {/* Gods Section */}
      <section className="bg-primary md:mx-40 md:my-10 md:rounded-xl p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-brown-100 mb-10">
          Deities of Pandukeshwar
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Kuber Bhandari",
              role: "God of Wealth",
              lineage: "Kamdi Thok (Panwar)",
              desc: "Kuber Bhandari, the divine treasurer of the gods, is the main deity of Pandukeshwar. He is chiefly worshipped by the Kamdi Thok. The temple of Lord Kuber serves as the winter abode of Lord Badrinath’s Utsav Murti.",
              img: "/images/kuberji/kuberji2.jpeg",
            },
            {
              name: "Ghantakarna",
              role: "Kshetrapal (Protector of the Region)",
              lineage: "Bhandari Thok",
              desc: "Ghantakarna Devta stands as the vigilant protector of Pandukeshwar, safeguarding the region and its sacred grounds. His worship is mainly done by the Bhandari Thok lineage.",
              img: "/images/ghantakran.jpeg",
            },
            {
              name: "Nanda Devi",
              role: "Goddess of Bliss & Prosperity",
              lineage: "Bhatt & Mehta Thok",
              desc: "Nanda Devi is venerated as the compassionate Mother Goddess of Pandukeshwar. The Bhatt and Mehta Thoks are her primary devotees, maintaining her sacred traditions through generations.",
              img: "/images/deities/nanda-devi.jpg",
            },
            {
              name: "Vishwakarma",
              role: "Divine Architect",
              lineage: "Universal Worship",
              desc: "Lord Vishwakarma, the celestial craftsman, is revered for his creative powers and his blessings on all who serve in the temple’s upkeep and artistry.",
              img: "/images/deities/vishwakarma.jpg",
            },
            {
              name: "Laatu Devta",
              role: "Local Guardian Deity",
              lineage: "Village Protector",
              desc: "Laatu Devta is considered a fierce and protective spirit deity, invoked for safeguarding the community and maintaining balance within the sacred valley.",
              img: "/images/deities/laatudevta.jpg",
            },
          ].map((god, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="bg-amber-100 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition duration-300"
            >
              <Image
                src={god.img}
                alt={god.name}
                width={400}
                height={300}
                className="rounded-xl mb-4 object-cover h-[250px] w-full"
              />
              <h2 className="text-2xl font-bold text-brown-100 mb-1">
                {god.name}
              </h2>
              <p className="text-amber-900 font-semibold mb-1">{god.role}</p>
              <p className="text-amber-800 text-sm italic mb-2">
                Lineage: {god.lineage}
              </p>
              <p className="text-amber-900 font-medium">{god.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Festivals & Gaadu Section */}
      <section className="bg-amber-100 md:mx-40 md:my-10 md:rounded-xl p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-brown-100 mb-10">
          Festivals & The Sacred Gaadu Tradition
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-amber-900 font-semibold text-center max-w-4xl mx-auto mb-10"
        >
          A unique ritual known as <span className="text-brown-100">“Gaadu”</span> —
          or self-abhishek — takes place five times a year, where chosen
          individuals are believed to embody the divine. These ceremonies mark
          key spiritual moments tied to the sacred rhythm of Badrinath Dham and
          the village of Pandukeshwar.
        </motion.p>

        {/* Vertical Timeline for Gaadu Festivals */}
        <div className="relative max-w-3xl mx-auto mt-10">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-primary rounded-full"></div>

          {[
            {
              name: "Makar Sankranti",
              desc: "The first Gaadu of the year, marking the start of the divine cycle and invoking prosperity.",
              side: "left",
              img: "/images/festivals/makar-sankranti.jpg",
            },
            {
              name: "Vasant Panchami",
              desc: "Celebrates the onset of spring and the day when the opening date of Badrinath Dham is decided.",
              side: "right",
              img: "/images/festivals/vasant-panchami.jpg",
            },
            {
              name: "Baisakhi",
              desc: "Marks the opening of the sacred Kapaath (gates) of Badrinath Temple, symbolizing renewal and abundance.",
              side: "left",
              img: "/images/festivals/baisakhi.jpg",
            },
            {
              name: "Ashtami Gaadu",
              desc: "An inner temple ritual symbolizing purity, devotion, and renewal of divine energy.",
              side: "right",
              img: "/images/festivals/ashtami.jpg",
            },
            {
              name: "Baawan Dwadasi",
              desc: "The final and most revered Gaadu of the year, performed inside the Badrinath temple sanctum.",
              side: "left",
              img: "/images/festivals/baawan-dwadasi.jpg",
            },
          ].map((fest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`mb-10 flex flex-col md:flex-row ${
                fest.side === "right" ? "md:flex-row-reverse" : ""
              } items-center`}
            >
              <div className="md:w-1/2 p-4">
                <Image
                  src={fest.img}
                  alt={fest.name}
                  width={500}
                  height={300}
                  className="rounded-xl shadow-lg object-cover h-[250px] w-full"
                />
              </div>
              <div className="md:w-1/2 bg-primary p-6 rounded-2xl shadow-xl text-amber-100">
                <h2 className="text-2xl font-bold mb-2">{fest.name}</h2>
                <p className="text-lg font-medium">{fest.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-10 text-lg text-amber-900 font-semibold">
          Out of the five Gaadus, three take place in{" "}
          <span className="text-brown-100">Pandukeshwar</span> and two
          within the sanctum of{" "}
          <span className="text-brown-100">Badrinath Dham</span>.
        </p>
      </section>

      <Footer />
    </div>
  );
}