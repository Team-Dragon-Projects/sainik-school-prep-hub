
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us to start your journey towards Sainik School success
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Address</h3>
                <p className="text-gray-600">
                  15/81, Vivekanandha Coaching Center<br />
                  Opposite to Forest Office<br />
                  Amaravathinagar, Udumalpet<br />
                  Tiruppur - 642102<br />
                  India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Phone</h3>
                <p className="text-gray-600">
                  +91 9080023226<br />
                  +91 9443271565<br />
                  +91 9965698089
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Email</h3>
                <p className="text-gray-600">
                  amaravianradha@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600">
                  +91 9443271565
                </p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-8">
            <iframe
              src="https://maps.app.goo.gl/4Cag7eo2yWTJXr6MA"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
