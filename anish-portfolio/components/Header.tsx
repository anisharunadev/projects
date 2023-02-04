import React from "react";
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import fileDownload from "js-file-download"
import axios from "axios"

type props = {}

export default function Header({ }: props) {

    const handleResumeDownload = (url:string, fileName:string) => {
        axios.get(url, {
            responseType: "blob"
        }).then((res) => {
            fileDownload(res.data, fileName)
        })
    }
    return (
        <header className="flex top-0 flex-start justify-between items-center max-w-6xl p-5 sticky z-20 mx-auto">
            <motion.div
                initial={{
                    x: -150,
                    opacity: 0
                }}

                animate={{
                    x: 0,
                    opacity: 1
                }}

                transition={{
                    duration: 1.5
                }}

                className="space-x-3 md:space-x-5"> 
                <SocialIcon network="facebook" className="cursor-pointer" bgColor="transparent" fgColor="gray" />
                <SocialIcon network="instagram" className="hidden md:inline-flex cursor-pointer" bgColor="transparent" fgColor="gray" />
                <SocialIcon network="linkedin" className="cursor-pointer" bgColor="transparent" fgColor="gray" />
                <SocialIcon network="github" className="cursor-pointer" bgColor="transparent" fgColor="gray"/>
            </motion.div>
            <motion.div
                onClick={ () => handleResumeDownload("/images/IMG_0455.jpeg", "Arunachalam.jpeg") }
                initial={{
                    x: 150,
                    opacity: 0
                }}

                animate={{
                    x: 0,
                    opacity: 1
                }}

                transition={{
                    duration: 1.5
                }}
                
                className="flex items-center space-x-3 md:space-x-5">
                <SocialIcon network="email" className="cursor-pointer" bgColor="transparent" fgColor="gray" />
                <h3 className="cursor-pointer text-gray-400 uppercase hidden md:inline-flex">Get Resume</h3>
            </motion.div>
       </header>
    )
}