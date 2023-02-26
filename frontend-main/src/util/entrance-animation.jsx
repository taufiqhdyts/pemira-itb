import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Pops = ({ children }) => {
  return (
    <motion.div
      animate={{ opacity: [0, 0.9, 1], scale: [0.3, 1.05, 1] }}
      transition={{ duration: 0.3, times: [0, 0.8, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const StepPops = ({ children }) => {
  const [step, setStep] = useState(0);

  const totalSteps = children.length;
  useEffect(() => {
    if (step < totalSteps) {
      setTimeout(() => {
        setStep((s) => s + 1);
      }, 100);
    }
  }, [step, totalSteps]);
  return (
    <>
      {children.map((e, i) =>
        i <= step ? <Pops key={i}>{e}</Pops> : <div key={i} />
      )}
    </>
  );
};

export const OpacityAnim = ({ children, time }) => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: time || 0.3, times: [0, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const Sliding = ({ children, from, slow }) => {
  const initX = from === "right" ? "100vw" : from === "left" ? "-100vw" : "0vw";
  const initY = from === "bottom" ? "40vh" : from === "top" ? "-40vh" : "0vw";

  return (
    <motion.div
      animate={{ top: [initY, "0vh"], left: [initX, "0vw"], opacity: slow ? [0,1] : 1}}
      transition={{ duration: slow ? 0.7 : 0.2, times: [0, 1] }}
      style={{
        position: "relative",
      }}
    >
      {children}
    </motion.div>
  );
};
