import { easeInOut, motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.main
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      exit={{ opacity: 1 }}
      className="absolute top-0 left-0 w-full h-full bg-pink-300"
    >
      <header className="absolute top-1/3 right-24">
        <h1 className="text-5xl">Contact</h1>
      </header>
    </motion.main>
  );
}
