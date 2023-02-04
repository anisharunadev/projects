import {motion} from "framer-motion"
import SkillBadge from "./SkillBadge"

type props = {}
export default function Skill({ }: props) {
    return (
            <motion.div 
            initial={{
                opacity: 0
            }}

            animate={{
                opacity:1
            }}

            transition={{
                duration: 2.5
            }}
        
            className="min-h-screen flex flex-col relative items-center justify-center">
            <h1 className="absolute top-24 text-lg md:text-xl tracking-[15px] uppercase text-gray-400">Skills</h1>
            <h3 className="top-36 text-lg text-center tracking-widest uppercase text-gray-600 mb-12">Hover over a Skill for currency Profiency</h3>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
                <SkillBadge />
                <SkillBadge />
                <SkillBadge />
                <SkillBadge />
                <SkillBadge />
                <SkillBadge />
                <SkillBadge />
                <SkillBadge />
                <SkillBadge />
                <SkillBadge />
            </div>
        </motion.div>
    )
}