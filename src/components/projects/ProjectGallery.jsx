import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExpand, FaTimes } from 'react-icons/fa';

export const ProjectGallery = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="space-y-2 my-4">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
          Screenshot Gallery
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {images.map((imgUrl, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(imgUrl)}
              className="relative aspect-video rounded-xl overflow-hidden glass-card border border-slate-800 cursor-pointer group"
            >
              <img
                src={imgUrl}
                alt={`Screenshot ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <FaExpand className="text-sm" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-4 flex items-center justify-center"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full glass-card text-white text-lg hover:bg-slate-800"
            >
              <FaTimes />
            </button>
            <img
              src={selectedImage}
              alt="Zoomed screenshot"
              className="max-w-full max-h-[85vh] rounded-2xl border border-slate-800 shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectGallery;
