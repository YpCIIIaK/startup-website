import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProblemSolution = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="section bg-white" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="heading">Addressing the Carbon Crisis</h2>
            <p className="text-lg text-gray-600 mb-6">
              In a world grappling with climate change, businesses are increasingly
              pressured to reduce their carbon footprint. However, many lack the
              tools to measure and manage their environmental impact effectively.
            </p>
            <p className="text-lg text-gray-600">
              EcoSphere is designed to bridge this gap by providing a comprehensive
              platform that offers real-time analytics, insightful reporting, and
              actionable recommendations to reduce emissions.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-light/20 to-secondary-light/20 rounded-lg p-8">
              <img
                src="/dashboard-preview.svg"
                alt="EcoSphere Dashboard"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;