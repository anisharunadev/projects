// import { AiTwotoneMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
// import { CgSmartphone } from 'react-icons/cg';
// import { CiLocationOn } from 'react-icons/ci';
// import { BiCalendarHeart } from 'react-icons/bi';


// export default function Resume() {
    
//     return (
//         <div className="container mx-auto px-4 bg-slate-50 relative text-xl font-semibold shadow-2xl overflow-y-scroll h-screen scrollbar scrollbar-thumb-yellow-400">
//             {/* header */}
//             <div className="container px-10 py-32">
//                 <div className="header px-2 space-y-2">
//                     <h1 className="text-7xl pt-8 text-yellow-400 uppercase tracking-wider font-bold">Arunachalam V</h1>
//                     <h3 className="text-3xl py-2 font-bold tracking-wider">Full-Stack Developer</h3>
//                 </div>
//                 <div className="grid grid-cols-3 gap-4 mt-5 p-5 font-semibold">
//                     <p className='resume-flex-icon'> <AiTwotoneMail/> arunachalamv@gmail.com</p>
//                     <p className='resume-flex-icon'> <CgSmartphone/> 7092671505</p>
//                     <p className='resume-flex-icon'> <CiLocationOn/> Chennai, TN</p>
//                     <a className='resume-flex-icon cursor-pointer' href={'https//github.com/anisharunadev'} target={"_blank"} rel={"noreferrer"}> <AiFillGithub/> <span className='text-blue-600 dark:text-blue-500 hover:underline'>Git Hub</span></a>
//                     <a className='resume-flex-icon cursor-pointer'> <AiFillLinkedin/> <span className='text-blue-600 dark:text-blue-500 hover:underline'>LInked In</span></a>
//                 </div>

//                 <div className="grid grid-cols-3 gap-10 mt-5">

//                     <div className="col-span-2">
//                         <h1 className="resume-headline">Work Experience</h1>
//                         <div className="resume-hr"></div>
//                         <h2 className='text-2xl font-semibold py-2'>Full Stack Engineer</h2>
//                         <h5 className='text-2xl font-bold text-yellow-400'>Bytize inc</h5>
//                         <div className="flex flex-row space-x-10 py-2">
//                             <p className='resume-flex-icon'><BiCalendarHeart/>  Apr 2022 - current</p>
//                             <p className='resume-flex-icon'> <CiLocationOn/> Chennai, TN</p>
//                         </div>

//                         <div>
//                             <ul className='resume-list'>
//                                 <li>Wrote structuyellow, tested, readable, and maintainable code</li>
//                                 <li>Identified and corrected 10+ bottlenecks and 100+ bug fixes</li>
//                                 <li>Analyzed systems flow, data usage, and work processes; investigated 100% of problem areas</li>
//                                 <li>Helped maintain code quality, organization, and automatization for 6+ applications</li>
//                                 <li>Integrated existing software into 13 upgraded, modified systems for higher performance</li>
//                                 <li>Analyzed 30+ user requirements to derive technical software design and performance requirements</li>
//                                 <li>Planned, tracked, and managed deliverables on 200+ short-term sprints and 50+ long-term deployments</li>
//                             </ul>
//                         </div>
//                     </div>

//                     <div className='col-span-1 text-lg'>
//                         <div>
//                             <h1 className="resume-headline">EDUCATION</h1>
//                             <div className="resume-hr"></div>
//                             <div className='text-2xl font-semibold'>Master of Science</div>
//                             <div>Cyber Forensic & Information Security</div>
//                             <div className='text-2xl font-bold text-yellow-400 py-2'>University Of Madras</div>
//                             <p className='resume-flex-icon'>  <BiCalendarHeart/> Nov 2020 - Nov 2022</p>
//                             <p className='resume-flex-icon'> <CiLocationOn/> Chennai, TN</p>
//                         </div>

//                         <div className='mt-10'>
//                             <h1 className='text-2xl font-semibold'>Bachelor of Science</h1>
//                             <div>Computer Science</div>
//                             <div className='text-2xl font-bold text-yellow-400 py-2'>Dr.M.G.R. Educational and Research Institute</div>
//                             <p className='resume-flex-icon'> <BiCalendarHeart/> June 2017 - June 2020</p>
//                             <p className='resume-flex-icon'> <CiLocationOn/> Chennai, TN</p>
//                         </div>
//                     </div>


//                     <div className="col-span-2">
//                         <h2 className='text-2xl font-semibold py-2'>Jr. Full-Stack Developer</h2>
//                         <h5 className='text-2xl font-bold text-yellow-400'>Mitsify Web Development LLP</h5>
//                         <div className="flex flex-row space-x-10 py-3">
//                             <p className='resume-flex-icon'> <BiCalendarHeart/> Aug 2021 - Apr 2022</p>
//                             <p className='resume-flex-icon'> <CiLocationOn/> Chennai, TN</p>
//                         </div>

//                         <div>
//                             <ul className='resume-list'>
//                                 <li>Worked with Agile team across 4+ application domains</li>
//                                 <li>Helped evolve front-end and back-end stack</li>
//                                 <li>Developed code following common security practices and development design patterns</li>
//                             </ul>
//                         </div>

                        
//                     </div>

//                     <div className='col-span-1'>
//                         <h1 className="resume-headline">Skills</h1>
//                         <div className="resume-hr"></div>
//                         <ul className='resume-list'>
//                             <li>JavaScript</li> 
//                             <li>Vue.js</li> 
//                             <li>React.js</li> 
//                             <li>Node.js</li> 
//                             <li>Rest APIs</li> 
//                             <li>Php</li> 
//                             <li>Laravel/Lumen</li> 
//                         </ul>
//                     </div>


//                     <div className="col-span-2">
//                     <h2 className='text-2xl font-semibold py-2 gap-3 flex items-center'>Full-Stack Developer <span className='text-white text-xs font-semibold mr-4 px-2.5 py-0.5 rounded dark:bg-yellow-400'>internship</span></h2>
//                         <h5 className='text-2xl font-bold text-yellow-400'>Raspberry Info Systems Pvt Ltd</h5>
//                         <div className="flex flex-row space-x-10 py-3">
//                             <p className='resume-flex-icon'> <BiCalendarHeart/> Apr 2021 - Aug 2022</p>
//                             <p className='resume-flex-icon'> <CiLocationOn/> Chennai, TN</p>
//                         </div>

//                         <div>
//                             <ul className='resume-list'>
//                                 <li>Responding to integration requests from front-end developers</li>
//                                 <li>Updating and altering application features to enhance performance</li>
//                                 <li>Conducting analysis of website and application requirements</li>
//                             </ul>
//                         </div>
                       
//                     </div>

//                     <div className='col-span-1'>
//                         <h1 className='resume-headline'>CERTIFICATIONS</h1>
//                         <div className="resume-hr"></div>
//                         <ul className='resume-list'>
//                             <li>PHP Certification</li> 
//                             <li>Full Stack Developer Certification</li> 
//                             <li>Python MSME Certification</li> 
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }