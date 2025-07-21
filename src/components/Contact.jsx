import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center gap-2">
            <MapPin className="w-8 h-8 text-blue-600" /> Contact Us
          </h2>
          <p className="text-gray-600">
            We'd love to hear from you! Whether it's about booking rooms, our
            function hall, or our 100% pure veg dining, feel free to get in
            touch.
          </p>

         
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <p className="font-semibold text-gray-700">Address:</p>
              <p className="text-gray-600">
                Back side vidyavardhani school, Road, Latur - Nanded Hwy, Ahmedpur, Sirur Tajband, Maharashtra 413515
              </p>
            </div>
          </div>


          <div className="flex items-start gap-3">
            <Phone className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <p className="font-semibold text-gray-700">Phone:</p>
              <a
                href="tel:+919850498415"
                className="text-blue-600 hover:underline"
              >
                +91 9850498415
              </a>
            </div>
          </div>

          
          <div className="flex items-start gap-3">
            <Mail className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <p className="font-semibold text-gray-700">Email:</p>
              <a
                href="mailto:orionpureveg@gmail.com"
                className="text-blue-600 hover:underline"
              >
                orionpureveg@gmail.com
              </a>
            </div>
          </div>
        </div>

        
        <div className="relative w-full h-[350px] md:h-[450px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.644425458431!2d76.94455146789552!3d18.679945494309298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcfb9325d543a6b%3A0xccb06777ac3a18f6!2sHotel%20RG%20Orion%20Pure%20Veg%20Restaurant%20%26%20Lodging!5e0!3m2!1sen!2sin!4v1753074446478!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
