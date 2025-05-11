import { motion } from 'framer-motion';
import { FaPaw, FaDog, FaMoon } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaPaw className="w-8 h-8" />,
      title: 'Pet Sitting',
      description: 'In-home visits for feeding, playtime, and potty breaks.',
      price: 'Starting at $25/visit',
    },
    {
      icon: <FaDog className="w-8 h-8" />,
      title: 'Dog Walking',
      description: "Daily walks tailored to your pet's needs.",
      price: 'Starting at $20/walk',
    },
    {
      icon: <FaMoon className="w-8 h-8" />,
      title: 'Overnight Stays',
      description: 'Trusted overnight care for peace of mind.',
      price: 'Starting at $75/night',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="section bg-gradient-to-b from-sand to-light relative overflow-hidden">
      {/* Decorative waves */}
      <div className="absolute top-0 left-0 w-full">
        <svg className="w-full h-24" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            fill="#00B4D8"
            fillOpacity="0.1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <div className="container relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-ocean"
        >
          Our Services
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-all border border-primary/10"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-primary mb-4"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-ocean">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <motion.p
                whileHover={{ scale: 1.1 }}
                className="text-primary font-semibold"
              >
                {service.price}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 