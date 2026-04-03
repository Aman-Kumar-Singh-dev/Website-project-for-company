"use client";
import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

export default function Reveal({ children, width = "fit-content", delay = 0 }: RevealProps) {
  return (
    <div style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }} /* Apple Ease */
      >
        {children}
      </motion.div>
    </div>
  );
}
