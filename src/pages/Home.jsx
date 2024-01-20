import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function Home() {
  const [opa, setOpa] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="home"
    >
      <div className="text-container">
        <AnimatePresence>
          {opa && (
            <>
              <motion.h5
                layout
                initial={{ x: -9999 }}
                animate={{ x: 0 }}
                exit={{ x: -9999 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  type: "spring",
                }}
                // style={{ transform: `translateX( ${opa ? "0" : "-999px"})` }}
              >
                SO, YOU WANT TO TRAVEL TO
              </motion.h5>
              <motion.h1
                layout
                initial={{ y: 9999 }}
                animate={{ y: 0 }}
                exit={{ y: 9999 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                // style={{ transform: `translateY( ${opa ? "0" : "999px"})` }}
              >
                SPACE
              </motion.h1>
              <motion.p
                layout
                initial={{ x: 9999 }}
                animate={{ x: 0 }}
                exit={{ x: 9999 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                // style={{ transform: `translateY( ${opa ? "0" : "999px"})` }}
              >
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </motion.p>
            </>
          )}
        </AnimatePresence>
      </div>

      <div className="explore-button">
        <div className="btn-circle">
          <motion.button
            initial={{ rotate: "0deg" }}
            animate={{
              rotate: "-360deg",
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            onClick={() => {
              setOpa((prev) => !prev);
            }}
          >
            EXPLORE
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
