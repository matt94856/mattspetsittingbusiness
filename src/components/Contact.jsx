import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaw } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be added later with Formspree
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="section bg-gradient-to-b from-light to-sand relative overflow-hidden">
      {/* Decorative paw prints */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <FaPaw className="w-12 h-12" />
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-ocean"
        >
          Get in Touch
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ocean">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-md border-primary/20 shadow-sm focus:border-primary focus:ring-primary bg-white/80 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ocean">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-md border-primary/20 shadow-sm focus:border-primary focus:ring-primary bg-white/80 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-ocean">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 block w-full rounded-md border-primary/20 shadow-sm focus:border-primary focus:ring-primary bg-white/80 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ocean">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md border-primary/20 shadow-sm focus:border-primary focus:ring-primary bg-white/80 backdrop-blur-sm"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn bg-secondary hover:bg-secondary/90 text-white w-full"
                >
                  Let's Meet Your Pet!
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-primary/10">
                <h3 className="text-xl font-semibold mb-4 text-ocean">Contact Information</h3>
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center"
                  >
                    <FaPhone className="text-primary w-5 h-5" />
                    <span className="ml-3">(555) 123-4567</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center"
                  >
                    <FaEnvelope className="text-primary w-5 h-5" />
                    <span className="ml-3">matt@matts-petsitting.com</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center"
                  >
                    <FaMapMarkerAlt className="text-primary w-5 h-5" />
                    <span className="ml-3">Serving [Your City/Area]</span>
                  </motion.div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-primary/10">
                <h3 className="text-xl font-semibold mb-4 text-ocean">Service Hours</h3>
                <div className="space-y-2">
                  <motion.p whileHover={{ x: 5 }}>Monday - Friday: 7am - 8pm</motion.p>
                  <motion.p whileHover={{ x: 5 }}>Saturday: 8am - 6pm</motion.p>
                  <motion.p whileHover={{ x: 5 }}>Sunday: 9am - 5pm</motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 