import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';
import { Container } from '../../components/common/Container';
import { Section } from '../../components/common/Section';
import { Button } from '../../components/common/Button';
import { Helmet } from 'react-helmet-async';
import { PAGE_TITLES } from '../../seo';

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>{PAGE_TITLES.notFound}</title>
      </Helmet>

      <Section className="min-h-[80vh] flex items-center justify-center pt-32 pb-20">
        <Container size="sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-10 rounded-3xl border border-slate-800 text-center space-y-6 shadow-2xl"
          >
            <div className="w-20 h-20 mx-auto rounded-3xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center text-3xl">
              <FaExclamationTriangle />
            </div>

            <div className="space-y-2">
              <span className="text-5xl font-black gradient-text font-mono">404</span>
              <h1 className="text-2xl font-bold text-slate-100">Oops! Looks like you're lost.</h1>
              <p className="text-sm text-slate-400 max-w-sm mx-auto">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
              </p>
            </div>

            <div className="pt-4 flex justify-center">
              <Link to="/">
                <Button variant="primary" size="lg" icon={FaHome}>
                  Return Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
};

export default NotFound;
