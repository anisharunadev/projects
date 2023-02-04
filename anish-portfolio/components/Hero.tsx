import React from "react";
import {useTypewriter, Cursor} from "react-simple-typewriter"
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";
import {motion} from "framer-motion"


type props = {}

export default function Hero({ }: props) {

    const [text] = useTypewriter({
        words: [
            "Hi, I am Anish",
            "Guy-who-loves-Coffee.tsx",
            "<ButLovesToCodeMore/>"
        ],
        loop: true,
        delaySpeed: 2000
    })

    return (
        <div className="flex justify-center items-center flex-col h-screen overflow-hidden text-center space-y-8">
            <BackgroundCircle />
            
            <img className="rounded-full w-32 h-32 relative mx-auto object-cover" src="https://picsum.photos/200" />
            <div className="">
                <h2 className="text-gray-400 uppercase tracking-[5px] text-sm pb-3 md:trancking-[15px] ">Full Stack Developer</h2>
                <h1 className="text-3xl md:text-6xl font-semibold text-yellow-400">
                    <span className="mr-2">{text}</span>
                    <Cursor cursorColor="yellow"/>
                </h1>
            </div>

            <div className="flex space-x-2 z-30">
                <Link href="#About">
                    <button className="heroButton">About</button>
                </Link>
                <Link href="#Experience">
                    <button className="heroButton">Experience</button>
                </Link>
                <Link href="#Skills">
                    <button className="heroButton">Skills</button>
                </Link>
                <Link href="#Projects">
                    <button className="heroButton">Projects</button>
                </Link>
            </div>

        </div>
    )
}