import {motion} from "framer-motion"
import ExperienceCard from "./ExperienceCard"

export default function Experience() {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            className="h-screen flex relative flex-col items-center justify-evenly text-center md:flex-row max-w-full px-10 mx-auto">
            
            <h1 className="uppercase text-lg md:text-xl text-gray-400 tracking-[10px] md:tracking-[15px]  absolute top-24">Work Experience</h1>

            <div className="flex w-full max-w-6xl mt-24 flex-row space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-thumb-yellow-400">
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>

        </motion.div>
    )
}