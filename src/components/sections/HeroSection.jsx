import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center bg-gradient-to-br from-green-50 to-blue-50">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('/earth-pattern.svg')] bg-repeat opacity-10"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            EcoSphere: Empowering Businesses to Reduce Their Environmental Footprint
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            Our technology-driven platform enables companies to track, analyze, and
            optimize their carbon footprint for a greener, more sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/features" className="btn btn-primary">
              Learn More
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;