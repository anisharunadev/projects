import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"


export default function Project() {
    return (
        <motion.div
            initial={{
                opacity:0
            }}
            whileInView={{
                opacity:1
            }}
            transition={{
                duration:1.5
            }}
            
            className="h-screen relative flex overflow-hidden  text-left flex-row max-w-full justify-evenly mx-auto itens-center z-8">
            <h1 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">projects</h1>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-28">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>

            <div className="w-full absolute top-[30%] bg-yellow-400 h-[400px] opacity-20 -skew-y-12">
            
            </div>

        </motion.div>
    )

}