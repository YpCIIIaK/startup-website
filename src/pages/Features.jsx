import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import KeyFeatures from '../components/sections/KeyFeatures';

const Features = () => {
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
            <h1 className="heading">Our Features</h1>
            <p className="subheading">
              Discover how EcoSphere can help your organization achieve its
              sustainability goals.
            </p>
          </motion.div>
        </div>
      </section>

      <KeyFeatures />

      <section className="section bg-white" ref={ref}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading text-center">Why Choose EcoSphere?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Data-Driven Insights</h3>
                <p className="text-gray-600">
                  Make informed decisions based on real-time data and analytics.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Easy Integration</h3>
                <p className="text-gray-600">
                  Seamlessly integrate with your existing systems and workflows.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
                <p className="text-gray-600">
                  Get assistance from our team of sustainability experts.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Regular Updates</h3>
                <p className="text-gray-600">
                  Stay current with the latest features and improvements.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;