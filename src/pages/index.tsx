import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Animation page transition</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        exit={{ y: "100%" }}
        className="absolute top-0 left-0 w-full h-full bg-yellow-200"
      >
        <header className="absolute overflow-hidden top-1/3 right-24">
          <motion.h1
            animate={{ x: 0 }}
            initial={{ x: "100%" }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-5xl"
          >
            Home
          </motion.h1>
        </header>
      </motion.main>
    </>
  );
}
