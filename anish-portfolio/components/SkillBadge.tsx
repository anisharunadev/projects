import { motion } from "framer-motion"

type Props = {
    comeFromLeft?: Boolean
}
export default function SkillBadge({comeFromLeft} : Props) {
    return (
        <div className="group flex cursor-pointer">
            <motion.img
                initial={{
                    x: -100,
                    opacity:0
                }}
                whileInView={{
                    x: 0,
                    opacity:1
                }}
                transition={{
                    duration:1.2
                }}
                viewport={{
                    once:true
                }}
                className="w-24 h-24 border border-gray-500 object-cover transition duration-300 ease-in-out rounded-full relative filter group-hover:grayscale"
                src="https://picsum.photos/200" />
            
            <div className="absolute w-24 h-24 opacity-0 group-hover:opacity-80 bg-white rounded-full transition ease-in-out duration-300">
                <div className="flex items-center h-full justify-center opacity-100">
                    <p className="text-2xl text-bold text-black opacity-100">100%</p>
                </div>
            </div>
        </div>
    )
}