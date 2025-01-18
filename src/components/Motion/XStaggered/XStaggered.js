
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useAnimation,
  useInView,
  useTransform,
} from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const XStaggered = (props) => {
  return (
    <motion.li
      className={props.className}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
    //   viewport={{ once: true }}
      custom={props.index}
    >
      {props.children}
    </motion.li>
  );
};

export default XStaggered;
