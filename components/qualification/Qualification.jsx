// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import './qualification.css';

const Qualification = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const dataVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: { height: "100%" },
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification 🧑🏻‍🎓</h2>
      <span className="section__subtitle">My Personal Journey 🚗</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>
        </div>

        <div className="qualification__sections">
          <motion.div
            className="qualification__content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Education Entry 1 */}
            <motion.div className="qualification__data qualification__data--single" variants={dataVariants}>
              <div className="qualification__single-item">
                <h3 className="qualification__title">Master's Degree</h3>
                <span className="qualification__subtitle">Southeast Missouri State University</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;