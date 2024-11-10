import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    quote: "EcoSphere has transformed our approach to sustainability. With their carbon tracking tools, we've managed to reduce our emissions by 20% in just a few months.",
    author: "Alex Green",
    position: "CEO, EcoCo Enterprises",
    image: "/testimonial1.jpg"
  },
  {
    quote: "The EcoSphere platform made it easy for us to understand our impact and make informed decisions. Highly recommend!",
    author: "Jamie Collins",
    position: "Sustainability Director, Green Future Solutions",
    image: "/testimonial2.jpg"
  },
  {
    quote: "Outstanding platform that helped us achieve our sustainability goals ahead of schedule. The insights provided are invaluable.",
    author: "Sarah Chen",
    position: "Operations Manager, Sustainable Tech",
    image: "/testimonial3.jpg"
  }
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section bg-white" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading">What Our Users Say</h2>
          <p className="subheading max-w-3xl mx-auto">
            Discover how EcoSphere is helping organizations achieve their sustainability goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="mb-4">
                <svg className="text-primary h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                </div>
                <div className="ml-4">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.position}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;