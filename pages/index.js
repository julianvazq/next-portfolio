import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import Projects from '../components/home/ProjectSection';
import Footer from '../components/home/Footer';

export default function Home() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Hero />
      <Projects />
      {/* <Footer /> */}
    </motion.div>
  );
}
