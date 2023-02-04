import { motion } from "framer-motion"

export default function ProjectCard() {
    return (
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
        items-center justify-center p-20 md:p-44 h-screen z-40">
                <motion.img
                    initial={{
                        y:-100
                    }}
                    whileInView={{
                        y:0
                    }}
                    transition={{
                        duration:1.5
                    }}
                    className="w-[200px] h-[300px]"
                    src="https://picsum.photos/600" alt="" />
                
                <h1 className="text-3xl uppercase text-center">uber clone</h1>
                <p>blah balh balh balh balh balh balh balh</p>
        </div>
    )
}