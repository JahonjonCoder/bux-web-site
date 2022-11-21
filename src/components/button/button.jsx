import React from 'react';
import { motion } from 'framer-motion';

const button = (props) => {


  return (
    <>
        <motion.button whileTap={{scale:1.1}} style={props.styles}>{props.title}</motion.button>
    </>
  )
}

export default button