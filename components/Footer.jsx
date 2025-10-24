import {  Mail, MapPin, Phone, } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
 const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-spiritual-cream text-amber-100 pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Temple Information */}
          <div>
            <h3 className="text-2xl font-bold text-spiritual-gold mb-4">KuberJi Mandir Pandukeshwar</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className=" mt-1 flex-shrink-0" size={18} />
                <p className="font-semibold text-sm">KuberJi Mandir, Pandukeshwar, <br/>
                  Near Badrinath, Uttarakhand
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className=" flex-shrink-0" size={18} />
                <p className="font-semibold text-sm">(123) 456-7890</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className=" flex-shrink-0" size={18} />
                <p className="font-semibold text-sm">info@kuberjitemple.org</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold font-medium text-sm  mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="text-amber-100 hover:text-temple-gold transition-colors">
                  <Image src="/icons/facebook-48.svg" alt="Facebook" width={48} height={48} />
                </a>
                <a href="#" aria-label="Instagram" className="text-amber-100 hover:text-temple-gold transition-colors">
                  <Image src="/icons/instagram-48.svg" alt="Instagram" width={48} height={48} />
                </a>
                <a href="#" aria-label="YouTube" className="text-amber-100 hover:text-temple-gold transition-colors">
                  <Image src="/icons/youtube-48.svg" alt="YouTube" width={48} height={48} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-spiritual-gold text-xl font-bold  mb-4">Quick Links</h3>
            <ul className="space-y-2 font-semibold text-sm">
              <li><Link href="/about" className="hover:text-temple-gold transition-colors">About Us</Link></li>
              <li><Link href="/events" className="hover:text-temple-gold transition-colors">Temple Events</Link></li>
              <li><Link href="/services" className="hover:text-temple-gold transition-colors">Temple Services</Link></li>
              <li><Link href="/media" className="hover:text-temple-gold transition-colors">Photo Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-temple-gold transition-colors">Contact Us</Link></li>
              <li><Link href="/donate" className="hover:text-temple-gold transition-colors">Make a Donation</Link></li>
            </ul>
          </div>
        
          {/* Temple Hours */}
          <div>
            <h3 className=" text-xl font-bold text-spiritual-gold mb-4">Temple Hours</h3>
            <table className="w-full font-semibold text-sm">
              <tbody>
                <tr>
                  <td className="py-1 pr-2">Monday - Friday:</td>
                  <td className="py-1">7:00 AM - 12:00 PM, 5:00 PM - 8:00 PM</td>
                </tr>
                <tr>
                  <td className="py-1 pr-2">Saturday:</td>
                  <td className="py-1">7:00 AM - 12:00 PM, 4:00 PM - 9:00 PM</td>
                </tr>
                <tr>
                  <td className="py-1 pr-2">Sunday:</td>
                  <td className="py-1">7:00 AM - 9:00 PM</td>
                </tr>
              </tbody>
            </table>
            
            <div className="mt-6">
              <h4 className="font-semibold font-medium text-sm text-temple-gold mb-2">Special Aarti Times</h4>
              <p className="font-semibold text-sm">Morning Aarti: 8:00 AM</p>
              <p className="font-semibold text-sm">Evening Aarti: 7:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-amber-100/20 text-center">
          <p className="font-semibold text-sm text-amber-100/70">
            &copy; {currentYear} Kuber Ji Mandir Pandukeshwar. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
