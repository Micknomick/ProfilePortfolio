'use client'; // 必須

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const items = [
  { id: 1, title: 'Title 1', subtitle: 'Subtitle 1' },
  { id: 2, title: 'Title 2', subtitle: 'Subtitle 2' },
  { id: 3, title: 'Title 3', subtitle: 'Subtitle 3' },
  { id: 4, title: 'Title 4', subtitle: 'Subtitle 4' },
];

const AnimatedList = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="container flex flex-wrap justify-center items-center min-h-screen">
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id.toString()}
          onClick={() => setSelectedId(item.id)}
          className="p-4 bg-white rounded-lg shadow-md cursor-pointer"
        >
          <motion.div className="bg-black p-4 rounded-lg shadow-lg">
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
          </motion.div>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId.toString()} className="fixed inset-0 bg-white p-8">
            {items.map((item) =>
              item.id === selectedId ? (
                <React.Fragment key={item.id}>
                  <motion.h5>{item.subtitle}</motion.h5>
                  <motion.h2>{item.title}</motion.h2>
                  <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
                </React.Fragment>
              ) : null
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedList;
