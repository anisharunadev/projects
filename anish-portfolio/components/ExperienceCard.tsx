import { motion } from "framer-motion";


export default function ExperienceCard() {
    return (
        <article className="flex flex-col items-center flex-shrink-0 space-y-7 snap-center w-[300px] md:w-[400px] xl:w-[450px] p-10 bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 rounded-xl">
            <motion.img
                initial={{
                    opacity: 0,
                    y:-100
                }}
                whileInView={{
                    opacity: 1,
                    y:0
                }}
                transition={{
                    duration: 1.5
                }}
                className="w-32 h-32 xl:w-[150px] xl:h-[150px] object-contain object-center rounded-lg" src="https://picsum.photos/200" alt="" />
            
            <div className="px-5 md:px-10">
                <h1 className="text-lf md:text-xl text-light text-semibold text-gray-400">Full Stack Developer</h1>
                <p className="text-lg md:text-xl text-yellow-400">Mitisify</p>
                <div>
                    {/* badge */}
                </div>
                <p className="py-2 md:py-3 lg:py-4">present</p>

                <ul className="list-disc space-y-2 md:space-y-3 lg:space-y-3 ml-5 text-sm md:text-sm xl:text-sm text-gray-400 text-left ">
                    <li>blah blah experience blah blah experience</li>
                    <li>blah blah experience blah blah experience</li>
                    <li>blah blah experience</li>
                    
                </ul>
            </div>

        </article>
            
    )
}