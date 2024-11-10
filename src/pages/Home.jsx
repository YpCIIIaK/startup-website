import ProblemSolution from '../components/sections/ProblemSolution';
import KeyFeatures from '../components/sections/KeyFeatures';
import Testimonials from '../components/sections/Testimonials';
import CallToAction from '../components/sections/CallToAction';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">
              EcoSphere: Empowering Businesses to Reduce Their Environmental Footprint
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Our technology-driven platform enables companies to track, analyze,
              and optimize their carbon footprint for a greener, more sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#problem-solution" className="btn btn-primary">
                Learn More
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <div id="problem-solution">
        <ProblemSolution />
      </div>
      <KeyFeatures />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;