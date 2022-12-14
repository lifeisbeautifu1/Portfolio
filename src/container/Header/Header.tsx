import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';

import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Alexey</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <h1 style={{ width: '100%', textAlign: 'right' }}>Who Am I? 🤠</h1>
          <p className="p-text">
            Web Developer <span style={{ fontSize: 20 }}>🤓</span>
          </p>
          <p className="p-text">
            Working on Web Apps <span style={{ fontSize: 20 }}>👨‍💻</span>
          </p>
          <p className="p-text">
            Writing Words, Compiling Code{' '}
            <span style={{ fontSize: 20 }}>📝</span>
          </p>
          <p className="p-text">
            Goal : To be a better Developer{' '}
            <span style={{ fontSize: 20 }}>🎯</span>
          </p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img app__flex"
    >
      <img src={images.profile} alt="profile_bg" />
      {/* <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      /> */}
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.typescript, images.node, images.react].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
