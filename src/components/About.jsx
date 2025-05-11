import { motion } from 'framer-motion';
import { FaPaw } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section bg-gradient-to-b from-light to-sand relative overflow-hidden">
      {/* Decorative paw prints */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
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
          About Me
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg text-gray-600 mb-6">
                Hi! I'm Matt, a lifelong animal lover with 5+ years of professional pet care experience.
                I understand that your pets are family, and I treat them with the same love and care
                that you would.
              </p>
              <p className="text-lg text-gray-600">
                My goal is to provide reliable, personalized care that gives you peace of mind
                while you're away. Whether it's daily walks, feeding, or overnight stays,
                I'm committed to making sure your pets are happy and well-cared for.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-lg overflow-hidden shadow-lg"
            >
              {/* Placeholder for photo - replace src with actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="text-center"
                >
                  <FaPaw className="w-16 h-16 text-white/50 mx-auto mb-4" />
                  <p className="text-white font-medium">Photo Coming Soon</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 