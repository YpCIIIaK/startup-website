import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Real-time Carbon Footprint Dashboard',
    description: 'Interactive dashboard showing live carbon emissions data and trends.',
    image: '/dashboard.jpg',
    tags: ['Analytics', 'Real-time', 'Dashboard']
  },
  {
    title: 'Sustainability Report Generator',
    description: 'Automated tool for creating comprehensive sustainability reports.',
    image: '/report.jpg',
    tags: ['Reporting', 'Automation', 'Analytics']
  },
  {
    title: 'Carbon Tracking Module',
    description: 'Advanced system for tracking and analyzing carbon emissions.',
    image: '/tracking.jpg',
    tags: ['Tracking', 'Analysis', 'Monitoring']
  }
];

const Portfolio = () => {
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
            <h1 className="heading">Our Portfolio</h1>
            <p className="subheading">
              Explore our innovative solutions for environmental sustainability.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white" ref={ref}>
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="aspect-video bg-gray-100"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;