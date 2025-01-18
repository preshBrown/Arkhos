import React from 'react'
import { useRef } from 'react'
import { motion, useScroll, useAnimation, useInView, useTransform } from "framer-motion";


const ScrollBaseZoom = (props) => {
    const ref = useRef(null)
   const { scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1" , "1.27 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.li ref={ref} style={{
        scale: scaleProgress,
        opacity: opacityProgress
    }} className={props.className}>
      {props.children}
    </motion.li>
  )
}

export default ScrollBaseZoom
