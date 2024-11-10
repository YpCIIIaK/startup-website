import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-16">
      <section className="section bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="heading">About EcoSphere</h1>
            <p className="subheading">
              Building a sustainable future through innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white" ref={ref}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At EcoSphere, our mission is to empower businesses to make
                sustainable choices through accessible, technology-driven
                solutions.
              </p>
              <p className="text-lg text-gray-600">
                We believe that by providing organizations with the right tools
                and insights, we can collectively work towards a greener, more
                sustainable future.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary-light/20 to-secondary-light/20 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;