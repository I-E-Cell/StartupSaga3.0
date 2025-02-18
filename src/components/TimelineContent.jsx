import { motion } from "framer-motion";

const timelineData = [
  { year: "2020", title: "Beginning", description: "The journey begins here with the first milestone." },
  { year: "2021", title: "Growth", description: "Expanding horizons and reaching new heights." },
  { year: "2022", title: "Evolution", description: "Transforming challenges into opportunities." },
  { year: "2023", title: "Innovation", description: "Breaking boundaries and setting new standards." },
];

export default function TimelineContent() {
  return (
    <div className="relative z-10 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-24">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 w-24">
                  <div className="text-4xl font-bold text-pink-300">{item.year}</div>
                </div>
                <div className="flex-grow pl-8 ml-4 border-l-2 border-pink-200">
                  <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
