import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";




 export const MotionLeft = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  // const isInView = useInView(ref,  { once: false });
  const mainControls = useAnimation();
  
  console.log("🚀 ~ DivMotion ~ isInView:", isInView)
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);


  return (
    <motion.div
      className={props.className}
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: 45 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.5, delay: props.delay || 1 }}
      initial="hidden"
      animate={mainControls}
    >
      {props.children}
    </motion.div>
  );
};






export const MotionRight = (props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        mainControls.start("visible");
      }
    }, [isInView, mainControls]);
  
    return (
      <motion.div
        className={props.className}
        ref={ref}
        variants={{
          // hidden: { opacity: 0, x: 100 },
          hidden: { opacity: 0, x: -50},
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5, delay: props.delay || 1 }}
        initial="hidden"
        animate={mainControls}
      >
        {props.children}
      </motion.div>
    );
  };
  
  






export const MotionTop = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      className={props.className}
      ref={ref}
      variants={{ 
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay: 0.1 }}
      initial="hidden"
      animate={mainControls}
    >
      {props.children}
    </motion.div>
  );
};



