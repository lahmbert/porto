'use client';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import PageTransition from './PageTransition';

export default function AnimatedLayout({ children }) {
  const pathname = usePathname();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <PageTransition key={pathname}>
        {children}
      </PageTransition>
    </AnimatePresence>
  );
}