"use client";

import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

export const Greeting = () => {
  const { data: session } = useSession();
  const userName = session?.user?.email
    ? session.user.email.split("@")[0]
    : null;

  return (
    <div
      className="mx-auto mt-4 flex size-full max-w-3xl flex-col justify-center px-4 md:mt-16 md:px-8"
      key="overview"
    >
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="font-semibold text-xl md:text-2xl"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.5 }}
      >
        {userName ? `Olá, ${userName}!` : "Olá!"}
      </motion.div>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="text-xl text-zinc-500 md:text-2xl"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.6 }}
      >
        Como posso ajudá-lo hoje?
      </motion.div>
    </div>
  );
};
