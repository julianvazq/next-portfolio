import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../../components/shared/Navbar';

const MovieExplorerPage = () => {
  return (
    <>
      <Navbar />
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ background: 'red' }}
      >
        <h1>Movie Explorer</h1>
        <Link href='/'>
          <a>Home Page</a>
        </Link>
      </motion.div>
    </>
  );
};

export default MovieExplorerPage;
