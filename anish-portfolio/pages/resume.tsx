import Head from 'next/head'
import { AiTwotoneMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { CgSmartphone } from 'react-icons/cg';
import { CiLocationOn } from 'react-icons/ci';
import { BiCalendarHeart } from 'react-icons/bi';
import { FaMedal } from 'react-icons/fa';
import { GrCertificate } from 'react-icons/gr';
import { GiSkills } from 'react-icons/gi';
import { SiFurrynetwork } from 'react-icons/si';

export default function Resume() {
    return (
        <div>
            <Head>
                <title>anish-resume</title>
                <meta charSet="UTF-8"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="max-w-5xl mx-auto px-4 min-w-5xl text-lg font-semibold">
            {/* header */}
            <div className="px-10 py-20 my-8 border border-yellow-400 border-spacing-2 bg-slate-50 shadow-xl">
                <div className="header px-2 space-y-2">
                    <h1 className="text-7xl pt-8 text-yellow-400 uppercase tracking-wider font-bold">Arunachalam V</h1>
                    <h3 className="text-3xl py-2 font-bold tracking-wider font-mono">Full-Stack Developer</h3>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-5 p-5 font-semibold">
                    <p className='resume-flex-icon'> <AiTwotoneMail/> arunachalamv@gmail.com</p>
                    <p className='resume-flex-icon'> <CgSmartphone/> 7092671505</p>
                    <p className='resume-flex-icon'> <CiLocationOn/> Chennai, TN</p>
                    <a className='resume-flex-icon cursor-pointer' href={'https//github.com/anisharunadev'} target={"_blank"} rel={"noreferrer"}> <AiFillGithub/> <span className='text-blue-600 dark:text-blue-500 hover:underline'>Git Hub</span></a>
                    <a className='resume-flex-icon cursor-pointer'> <AiFillLinkedin/> <span className='text-blue-600 dark:text-blue-500 hover:underline'>LInked In</span></a>
                </div>

                <div className="grid grid-cols-3 gap-10 mt-5">

                    <div className="col-span-2">
                        <h1 className="resume-headline resume-flex-icon"><SiFurrynetwork />Work Experience</h1>
                        <div className="resume-hr"></div>
                        <h2 className='text-2xl font-semibold py-2 font-mono'>Full Stack Engineer</h2>
                        <h5 className='text-2xl font-bold text-yellow-400'>Bytize inc</h5>
                        <div className="flex flex-row space-x-10 py-2">
                            <p className='resume-flex-icon'><BiCalendarHeart/>  Apr 2022 - current</p>
                            <p className='resume-flex-icon'> <CiLocationOn/> Chennai, TN</p>
                        </div>

                        <div>
                            <ul className='resume-list'>
                                <li>Wrote structure, tested, readable, and maintainable code</li>
                                <li>Identified and corrected 10+ bottlenecks and 100+ bug fixes</li>
                                <li>Helped maintain code quality, organization, and automatization for 6+ applications</li>
                                <li>Integrated existing software into 13 upgraded, modified systems for higher performance</li>
                                <li>Analyzed 30+ user requirements to derive technical software design and performance requirements</li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-span-1 text-lg'>
                        <div>
                            <h1 className="resume-headline resume-flex-icon"> <FaMedal/> EDUCATION</h1>
                            <div className="resume-hr"></div>
                            <div className='text-xl font-semibold'>Master of Science</div>
                            <div className='text-sm'>Cyber Forensic & Information Security</div>
                            <div className='text-xl font-bold text-yellow-400 py-2'>University Of Madras</div>
                            <p className='resume-flex-icon'>  <BiCalendarHeart/> Nov 2020 - Nov 2022</p>
                            <p className='resume-flex-icon'> <CiLocationOn/> Chennai, TN</p>
                        </div>

                        <div className='mt-10'>
                            <h1 className='text-xl font-semibold'>Bachelor of Science</h1>
                            <div className='text-sm'>Computer Science</div>
                            <div className='text-xl font-bold text-yellow-400 py-2'>Dr.M.G.R. Educational and Research Institute</div>
                            <p className='resume-flex-icon'> <BiCalendarHeart/> June 2017 - June 2020</p>
                            <p className='resume-flex-icon'> <CiLocationOn/> Chennai, TN</p>
                        </div>
                    </div>


                    <div className="col-span-2">
                        <h2 className='text-2xl font-semibold py-2 font-mono'>Jr. Full-Stack Developer</h2>
                        <h5 className='text-2xl font-bold text-yellow-400'>Mitsify Web Development LLP</h5>
                        <div className="flex flex-row space-x-10 py-3">
                            <p className='resume-flex-icon'> <BiCalendarHeart/> Aug 2021 - Apr 2022</p>
                            <p className='resume-flex-icon'> <CiLocationOn/> Chennai, TN</p>
                        </div>

                        <div>
                            <ul className='resume-list'>
                                <li>Worked with Agile team across 4+ application domains</li>
                                <li>Helped evolve front-end and back-end stack</li>
                                <li>Developed code following common security practices and development design patterns</li>
                            </ul>
                        </div>

                        
                    </div>

                    <div className='col-span-1'>
                        <h1 className="resume-headline resume-flex-icon"> <GiSkills />Skills</h1>
                        <div className="resume-hr"></div>
                        <ul className='resume-list'>
                            <li>JavaScript</li> 
                            <li>Vue.js</li> 
                            <li>React.js</li> 
                            <li>Node.js</li> 
                            <li>Rest APIs</li> 
                            <li>Php</li> 
                            <li>Laravel/Lumen</li> 
                        </ul>
                    </div>


                    <div className="col-span-2">
                    <h2 className='text-2xl font-semibold py-2 gap-3 flex items-center font-mono'>Full-Stack Developer <span className='text-white text-xs font-semibold mr-4 px-2.5 py-0.5 rounded dark:bg-yellow-400'>internship</span></h2>
                        <h5 className='text-2xl font-bold text-yellow-400'>Raspberry Info Systems Pvt Ltd</h5>
                        <div className="flex flex-row space-x-10 py-3">
                            <p className='resume-flex-icon'> <BiCalendarHeart/> Apr 2021 - Aug 2022</p>
                            <p className='resume-flex-icon'> <CiLocationOn/> Chennai, TN</p>
                        </div>

                        <div>
                            <ul className='resume-list'>
                                <li>Responding to integration requests from front-end developers</li>
                                <li>Updating and altering application features to enhance performance</li>
                                <li>Conducting analysis of website and application requirements</li>
                            </ul>
                        </div>
                       
                    </div>

                    <div className='col-span-1'>
                        <h1 className='resume-headline resume-flex-icon'> <GrCertificate/> CERTIFICATIONS</h1>
                        <div className="resume-hr"></div>
                        <ul className='resume-list'>
                            <li>PHP Certification</li> 
                            <li>Full Stack Developer Certification</li> 
                            <li>Python MSME Certification</li> 
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            
        </div> 
    )
}
        