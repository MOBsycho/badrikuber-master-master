"use client";

import MyNav from "@/components/MyNav";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    // <section className="bg-primary">
    //   <main className="h-screen w-full bg-primary" id="contact">
    //   <MyNav />
    //     <div className="container mx-auto pb-20 px-4 md:px-6 bg-primary">
    //       <div className="text-center mb-12">
    //         <h2 className="font-sanskrit text-3xl md:text-4xl font-bold text-amber-100 mb-4">
    //           Contact Us
    //         </h2>
    //         <p className="font-body text-amber-100 max-w-2xl mx-auto">
    //           We welcome your inquiries and look forward to helping you connect
    //           with our temple community.
    //         </p>
    //       </div>

    //       <div className="grid grid-cols-1 md:grid-cols-2  gap-12 bg-primary">
    //         {/* Contact Information */}
    //         <div>
    //           <div className="bg-amber-100 p-8 rounded-lg ">
    //             <h3 className="font-sanskrit text-2xl font-bold text-primary mb-6">
    //               Temple Information
    //             </h3>
    //             <div className="space-y-6">
    //               <div className="flex items-start gap-4">
    //                 <MapPin
    //                   className="text-primary mt-1 flex-shrink-0"
    //                   size={24}
    //                 />
    //                 <div>
    //                   <h4 className="font-body font-medium text-primary mb-1">
    //                     Address
    //                   </h4>
    //                   <p className="font-body text-primary">
    //                     Pandukeshwar
    //                     <br />
    //                     Joshimath, UK 246443
    //                   </p>
    //                 </div>
    //               </div>

    //               <div className="flex items-start gap-4">
    //                 <Phone
    //                   className="text-primary mt-1 flex-shrink-0"
    //                   size={24}
    //                 />
    //                 <div>
    //                   <h4 className="font-body font-medium text-primary mb-1">
    //                     Phone
    //                   </h4>
    //                   <p className="font-body text-primary">
    //                     (+91) 456-7890
    //                   </p>
    //                 </div>
    //               </div>

    //               <div className="flex items-start gap-4">
    //                 <Mail
    //                   className="text-primary mt-1 flex-shrink-0"
    //                   size={24}
    //                 />
    //                 <div>
    //                   <h4 className="font-body font-medium text-primary mb-1">
    //                     Email
    //                   </h4>
    //                   <p className="font-body text-primary">
    //                     info@kuberjitemple.org
    //                   </p>
    //                 </div>
    //               </div>

    //               <div className="flex items-start gap-4">
    //                 <Clock
    //                   className="text-primary mt-1 flex-shrink-0"
    //                   size={24}
    //                 />
    //                 <div>
    //                   <h4 className="font-body font-medium text-primary mb-1">
    //                     Temple Hours
    //                   </h4>
    //                   <p className="font-body text-primary">
    //                     Monday - Friday: 7:00 AM - 12:00 PM, 5:00 PM - 8:00 PM
    //                     <br />
    //                     Saturday: 7:00 AM - 12:00 PM, 4:00 PM - 9:00 PM
    //                     <br />
    //                     Sunday: 7:00 AM - 9:00 PM
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Contact Form */}
    //         <div className="bg-primary h-full w-full">
    //           <form className="space-y-5">
    //             {/* <PaperPlaneScene flying={false} /> */}
    //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    //               <div className="space-y-2">
    //                 <label
    //                   htmlFor="name"
    //                   className="font-body text-sm font-medium text-amber-100"
    //                 >
    //                   Your Name
    //                 </label>
    //                 <Input
    //                   id="name"
    //                   placeholder="Enter your name"
    //                   className="border-amber-100 focus-visible:ring-amber-100 text-amber-100"
    //                 />
    //               </div>
    //               <div className="space-y-2">
    //                 <label
    //                   htmlFor="email"
    //                   className="font-body text-sm font-medium text-amber-100"
    //                 >
    //                   Email Address
    //                 </label>
    //                 <Input
    //                   id="email"
    //                   type="email"
    //                   placeholder="Enter your email"
    //                   className="border-amber-100 focus-visible:ring-amber-100 text-amber-100"
    //                 />
    //               </div>
    //             </div>

    //             <div className="space-y-2">
    //               <label
    //                 htmlFor="subject"
    //                 className="font-body text-sm font-medium text-amber-100"
    //               >
    //                 Subject
    //               </label>
    //               <Input
    //                 id="subject"
    //                 placeholder="Enter message subject"
    //                 className="border-amber-100 focus-visible:ring-amber-100 text-amber-100"
    //               />
    //             </div>

    //             <div className="space-y-2">
    //               <label
    //                 htmlFor="message"
    //                 className="font-body text-sm font-medium text-amber-100"
    //               >
    //                 Message
    //               </label>
    //               <Textarea
    //                 id="message"
    //                 placeholder="Enter your message"
    //                 rows={5}
    //                 className="border-amber-100 focus-visible:ring-amber-100 resize-none text-amber-100"
    //               />
    //             </div>

    //             <Button
    //               type="submit"
    //               className="w-full bg-amber-100 text-primary hover:bg-amber-200 transition-colors font-body font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50"
    //             >
    //               Send Message
    //             </Button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </main>
    //   <Footer/>
    // </section>
    <div className="bg-primary">
      <MyNav />
      <ContactSection/>
      <Footer/>
    </div>
  );
}
