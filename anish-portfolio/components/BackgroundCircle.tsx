import React from "react";
import { motion } from "framer-motion"

type props = {}

export default function BackgroundCircle({ }: props) {
    return (
        <motion.div
            initial={{
                opacity:0
            }}

            animate={{
                opacity: [0.2, 0.4, 0.8, 1.0, 0.2]
            }}

            transition={{
                duration: 2.5
            }}
            
            className="relative flex items-center justify-center">
            <div className="absolute border border-gray-500 md:w-[200px] md:h-[200px] w-[200px] h-[200px] mt-52 rounded-full animate-ping opacity-10"/>
            <div className="absolute border border-gray-500 md:w-[300px] md:h-[300px] w-[300px] h-[300px] mt-52 rounded-full animate-ping opacity-20"/>
            <div className="absolute border border-yellow-500 md:w-[450px] md:h-[450px] w-[400px] h-[400px] mt-52 rounded-full animate-pulse opacity-20" />
            <div className="absolute border border-gray-500 md:w-[600px] md:h-[500px] w-[500px] h-[500px] mt-52 rounded-full animate-ping opacity-40"  />
            <div className="absolute border border-gray-500 md:w-[800px] md:h-[800px] w-[600px] h-[600px] mt-52 rounded-full animate-ping opacity-50" />
        </motion.div>
    )
}
   