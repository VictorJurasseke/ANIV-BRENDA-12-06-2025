import React from 'react';
import { motion } from "framer-motion";


const CardImage = ({ src, alt = "Imagem do card" }) => {
  return (
    <motion.div className="col-lg-4 col-sm-6"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }} // anima só uma vez quando 50% visível
      transition={{ duration: 0.4 }}>
      <div className="card">
        <img src={src} className="card-img-top" alt={alt} />
      </div>

    </motion.div>
  );
};

export default CardImage;
