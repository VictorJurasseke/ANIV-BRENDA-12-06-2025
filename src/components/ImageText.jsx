import React from 'react';
import { motion } from "framer-motion";

const ImageText = ({ img, title, text, direction }) => {
  const isLeft = direction === 'left';

  const imageElement = (
    <img
      src={img}
      className={`responsive-img-card ${isLeft ? 'rounded-end' : 'rounded-start'}  col-lg-3 col-sm-12`}
      alt={title}
      style={{ minWidth: '200px', height: 'auto', objectFit: 'cover' }}
    />
  );

  const textElement = (
    <div className="mb-4 p-3">
      <h1 className="fs-3 outline mb-4">{title}</h1>
      <p className='lead'>{text}</p>
    </div>
  );

  return (
    <motion.div 
    className={`align-items-center bg-light shadow-lg overflow-hidden rounded col-12 flex-column flex-lg-row  d-flex `}

     initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{once:true,amount: 0.8 }} // anima só uma vez quando 50% visível
      transition={{ duration: 0.8 }}
      >
      {imageElement}
      {textElement}
    </motion.div>
  );
};

export default ImageText;
