import { motion } from 'framer-motion';
import { FaPaw } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-primary/10 to-sand">
      {/* Animated waves */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-24 md:h-32" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            fill="#00B4D8"
            fillOpacity="0.2"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block mb-6"
          >
            <FaPaw className="w-16 h-16 text-secondary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-ocean"
          >
            Reliable, Loving Pet Care
            <span className="block text-primary">in Your Neighborhood</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-dark/80 mb-8"
          >
            Professional pet sitting and dog walking services tailored to your pet's needs.
            Your furry friends deserve the best care, even when you're away.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#contact" className="btn bg-secondary hover:bg-secondary/90 text-white">
              Book a Free Meet & Greet
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating paw prints */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/20"
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <FaPaw className="w-8 h-8" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero; 