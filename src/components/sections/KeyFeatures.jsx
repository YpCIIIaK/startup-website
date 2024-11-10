import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBarChart2, FiFileText, FiTarget, FiBell } from 'react-icons/fi';

const features = [
  {
    icon: <FiBarChart2 size={24} />,
    title: 'Carbon Footprint Analysis',
    description: 'Get real-time insights into your organization\'s carbon emissions across all operations.',
  },
  {
    icon: <FiFileText size={24} />,
    title: 'Sustainability Reporting',
    description: 'Generate detailed reports to understand your impact and share them with stakeholders.',
  },
  {
    icon: <FiTarget size={24} />,
    title: 'Emission Reduction Recommendations',
    description: 'Receive data-driven recommendations to help you minimize your carbon footprint.',
  },
  {
    icon: <FiBell size={24} />,
    title: 'Goal Tracking & Alerts',
    description: 'Set sustainability goals and receive alerts to stay on track.',
  },
];

const KeyFeatures = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section bg-gray-50" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading">Powerful Tools for Real Impact</h2>
          <p className="subheading max-w-3xl mx-auto">
            Our comprehensive suite of features helps your organization achieve its
            sustainability goals effectively and efficiently.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;