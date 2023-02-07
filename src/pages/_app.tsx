import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "@/components/navbar";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <NavBar />
      <AnimatePresence>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </>
  );
}
