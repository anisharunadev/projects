import React from "react"
import {motion} from "framer-motion"

export default function About() {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration:1.5
            }}
            className="h-screen flex flex-col relative justify-evenly items-center md:flex-row text-center md:text-left max-w-6xl mx-auto px-10">
            <h1 className="absolute top-24 text-lg md:text-xl tracking-[15px] uppercase text-gray-400">about</h1>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}

                whileInView={{
                    x: 0,
                    opacity:1
                }}

                viewport={{
                    once:true
                }}

                transition={{
                    duration: 1.5
                }}
                className="-mb-24 md:flex-shrink-0 w-[175px] h-[175px] md:h-[400px] md:[400px] lg:w-[500px] lg:h-[500px] rounded-full md:rounded-lg p-2 object-contain" src="https://picsum.photos/600" />
            
            <div className="px-10 space-y-10">
                <h2 className="text-center text-lg text-yellow-400 font-semibold">
                    Here is my <span className="underline text-gray-400 cursor-pointer">Little</span> Background
                </h2>
                <p className="text-sm md:text-lg lg:text-xl leading-8 text-gray-400">
                    Illo ad architecto expedita repudiandae blanditiis tenetur odio! Temporibus laudantium quo modi possimus consectetur rerum consequatur quisquam quam, voluptas est corrupti perferendis minus repellat dolorem quos, debitis delectus nesciunt aliquam!
                </p>
            </div>
        </motion.div>
    )
}