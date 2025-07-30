"use client"
import { IconBriefcase2,  IconBrandLinkedin, IconBrandX, IconHome, IconMail, IconTool, IconTrophy,  IconExternalLink, IconArrowBigRightFilled,  } from '@tabler/icons-react';

import {AnimatePresence,  motion, MotionValue, useMotionValue,  useTransform} from 'motion/react';
import Link from "next/link";
import React, { useRef , useState } from "react";
export default function Home() {
  type Link={
    title:string;
    icon:React.ReactNode|any;
    href:string
  }
  type Accomplishment={
    name:string,
    description:string
  }
  type Number={
    title:string,
    number:string
  }
  type Tool={
    name:string,
    image:string,
    role:string
  }
  type Experience={
    title:string,
    description:string,
    tenure:string
  }
  const accomplishments:Accomplishment[]=[{
    name:"All India Rank 17",
    description:`Captain of Team Vaahak that achieved All India Rank 17 in AeroTHON organized by SAE India.`
  },{
    name:"Winning Position",
      description: `Second position at CII-MAJESTIC Skill - Will - Lead Edition IV.Presented the topic - Project Management.`
  },{
    name:"Winning Position",
    description:`First Position for Best Idea Presentation in Startup Workshop on Drones Design, Development and Piloting at ABES Engineering College`
  }]
  const tools:Tool[]=[{
    name:"SolidWorks",
    image:"/sw.png",
    role:"CAD & Design Software"
  },{
    name:"AutoCAD",
    image:"/ac.jpg",
    role:"CAD Software"

  },{
    name:"Fusion360",
    image:"fs.jpg",
    role:"CAD & Design Software"
  },{
    name:"ANSYS",
    image:"an.webp",
    role:"Simulation and Analysis Tool"
  },{
    name:"Notion",
    image:"/n.webp",
    role:"Productivity Tool"
  }]
  const experiences:Experience[]=[{
    title:"FunEdu",
    description:"Proposed and excecuted modifications : adjusted mounting tolerances, reconfigured gear aligment, and optimized the layout of pneumatic lines for accesiblity and performance. ",
    tenure:"April-June 2025"
  },{
    title:"Aerosense Technologies",
    description: `Gained experience in aircraft weight distribution, balance analysis, propulsion systems, and electronic integration.
    Focused on performance tuning through iterative testing and optimization, leading to superior aerodynamics `,
    tenure:"Nov-Dec 2023"

  }]
  const numbers:Number[]=[{
    title:"Years of Expirience",
    number:"+1"
  },
    {
      title: "Internships",
      number: "+2"
    },
    {
      title: "Achievements",
      number: "+3"
    }
  
  ]
  const socials:Link[]=[{
    title:"Gmail",
    icon:(<IconMail className="h-6 w-6 text-[#2a3d45] text-bold "></IconMail>),
    href:"singhabhrant21@gmail.com"
  },
  
    {
      title: "Linkedin",
      icon: (<IconBrandLinkedin className="h-6 w-6 text-[#2a3d45] text-bold"></IconBrandLinkedin>),
      href: "https://www.linkedin.com/in/singhabhrant/"
    },
    {
      title: "X",
      icon: (<IconBrandX className="h-6 w-6 text-[#2a3d45] text-bold"></IconBrandX>),
      href: ""
    }
  
  ]
  function SocialArray() {
    return (
      <>
        {socials.map((el, idx) => {
          const isEmail = el.href.includes("@") && !el.href.startsWith("http");
          const link = isEmail ? `mailto:${el.href}` : el.href;

          return (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 hover:scale-110 transition-transform duration-200"
            >
              {el.icon}
            </a>
          );
        })}
      </>
    );
  }


  const links:Link[]=[{
    title:"Home",
    icon:(<IconHome className="h-full w-full text-white text-bold "></IconHome>),
    href:"#home"
  },
  
    {
      title: "Tools",
      icon: (<IconTool className="h-full w-full text-white text-bold"></IconTool>),
      href: "#tools"
    },
    {
      title: "Experience",
      icon: (<IconBriefcase2 className="h-full w-full text-white text-bold"></IconBriefcase2>),
      href: "#experience"
    },
    {
      title: "Accomplishments",
      icon: (<IconTrophy className="h-full w-full text-white text-bold"></IconTrophy>),
      href: "#accomplishments"
    }
  ]
  const mouseX=useMotionValue(Infinity)
  function NavigationBar(){
    return(
    <motion.main onMouseMove={(e:any)=>mouseX.set(e.pageX)} onMouseLeave={(e:any)=>mouseX.set(Infinity)} className="h-[2.5rem] w-[12.5rem]  gap-y-[1.25rem] gap-x-5 flex items-center justify-center bg-[#1c1a19] rounded-xl ">
      {links.map((el,idx)=>(<IconContainer mouseX={mouseX} key={el.title} el={el}></IconContainer>))}
    </motion.main>
    )
  }
  const IconContainer=({el,mouseX}:{el:Link,mouseX:MotionValue<number>})=>{
    const ref= useRef<HTMLDivElement>(null);
    const dist = useTransform(mouseX, (val) => {
      const bounds = ref.current?.getBoundingClientRect();
      if (!bounds) return 0;
      return val - bounds.x - bounds.width / 2;
    });

    const [hovered,setHovered]=useState(false);


    return (<Link href={el.href} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}><motion.div ref={ref} style={{
      
      
    }} className="flex relative items-center justify-center"><AnimatePresence>{hovered && <motion.div initial={{ opacity: 0, y: 10, x:'-50%'}} animate={{y:0,opacity:1,x:'-50%'}} exit={{opacity:0,y:2,x:'-50%'}} className="absolute px-2 text-xs left-1/2 -translate-x-1/2 text-neutral-200 font-semibold top-8 inset-x-9 py-0.5 whitespace-pre-wrap">{el.title}</motion.div>}</AnimatePresence><motion.div >{el.icon}</motion.div></motion.div></Link>)
  }

  function Hero(){
    return(
      <main className={`flex items-center justify-center mt-[5rem] scroll-smooth font-poppins gap-[5rem] w-full`}>
        {/* 1 */}
        <div className="rounded-[12px] sticky bg-[#ffffff] h-[35rem] w-[20rem]">
          <div className=" flex items-center rounded-[12px] justify-center">
            <img src="/pp.jpg" className=" h-[284px] object-cover rounded-[12px] w-[240px] mt-[10%] " alt="Abhrant Singh"></img>
          </div>
          <div  className="flex font-poppins items-center justify-center font-semibold text-[2.25rem] mt-2 tracking-tight text-[black]">Abhrant Singh</div>
          <div className="flex font-poppins text-xl font-light items-center justify-center w-full ml-[7.5%] tracking-wide mt-3 text-pretty  text-[#6a6b6e] ">A passionate Mechanical Engineer with a proven track record of developing innovative and efficient solutions to complex engineering challenges.</div>
          <div className=" flex items-center justify-center gap-[2.5rem] mt-3 hover:cursor-pointer  text-[#2a3d45] font-2xl"><SocialArray></SocialArray></div>
        </div>
        <div className="  overflow-auto scrollbar-hide touch-pan-y scroll-smooth
         inset-y-0 h-screen w-[40rem]">
          <div id="hero" className="flex items-center justify-baseline tracking-wide leading-none mt-4 font-poppins font-black text-white text-[4.5rem]">MECHANICAL</div>
          <div className="flex items-center justify-baseline tracking-wide leading-none font-black text-[#353334] text-[4.5rem]">ENGINEER</div>
          <div className="flex items-center justify-baseline mt-3 font-semilight text-[#837979] leading-[1.25rem] text-[1.1rem] pr-[3rem] text-wrap">
            Notable skills both in collaborative and independent capacities,
            I am an enthusiastic student who
            brings a strong work ethic and
            organizational skills to any setting. <br></br>
            I am hardworking, reliable, highly
            organized, proactive, and punctual
            with a team-oriented mentality.
          </div>
          <div className="flex items-center justify-baseline mt-[2.5rem] gap-x-5">
            {numbers.map((el, idx) => (
              <div key={el.title}>
                <div className="text-[3.5rem] leading-none font-extrabold">{el.number}</div>
                <div className="font-light text-xl text-[#837979]">{el.title}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center mt-[2.5rem] justify-baseline gap-[3rem]">
            <a
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-[#1c3144] text-white hover:cursor-pointer font-semibold gap-2 flex items-center justify-center rounded-md transition-colors hover:bg-[#25455d]"
            >
              Get Resume
              <IconExternalLink className="ml-2" />
            </a>

            <a
              href="mailto:singhabhrant21@gmail.com"
              className="px-3 py-2 bg-[#1c3144] text-white hover:cursor-pointer font-semibold gap-2 flex items-center justify-center rounded-md transition-colors hover:bg-[#25455d]"
            >
              Get in Touch
              <IconMail className="ml-2" />
            </a>



            
          </div>
          <div id="experience" className=" mt-[5rem] leading-none">
            <div className="flex items-center justify-baseline tracking-tight leading-none mt-4 font-poppins font-black text-white text-[4.5rem]">1 YEAR OF</div>
            <div className="flex items-center justify-baseline tracking-tight leading-none font-black text-[#353334] text-[4.5rem]">EXPERIENCE</div>
          </div>
          <div className="h-[20rem] w-full flex-col items-center mt-3 justify-center">
            {experiences.map((el) => (
              <div
                key={el.title}
                className="h-[50%] w-full group hover:bg-[#1c1a19]"
              >
                <div className="flex items-center justify-between pt-3 font-bold text-[1.25rem]">
                  {el.title}
                  <motion.div  ><IconArrowBigRightFilled className="h-6 w-6 transition-transform duration-300 ease-in-out group-hover:scale-125 text-neutral-400" /></motion.div>
                </div>
                <div className="flex items-center justify-baseline leading-5 text-[1rem] pt-2 text-[#837979]">
                  {el.description}
                </div>
                <div className="flex items-center justify-baseline pt-2 font-light">
                  {el.tenure}
                </div>
              </div>
            ))}
          </div>
          <div id="tools" className="h-[15rem] w-full gap-x-3 flex-col items-center justify-evenly mt-[5rem]">
            <div className="flex items-center justify-baseline tracking-tight leading-none mt-4 font-poppins font-black text-white text-[4.5rem]">PREMIUM</div>
            <div className="flex items-center justify-baseline tracking-tight leading-none font-black text-[#353334] text-[4.5rem]">TOOLS</div>
            <div className="grid grid-cols-2">
              {tools.map((el) => (
                <div className="flex  mt-[3rem] gap-x-2">
                  <div className="h-[3.15rem] w-[3.15rem] rounded-[12px] bg-white"><img className="h-full w-full rounded-2xl object-cover " src={ el.image } alt="brand logo"></img></div>
                  <div>
                    <div className="flex items-center justify-between  font-bold text-[1.25rem]">{el.name}</div>
                    <div className="flex items-center justify-baseline font-light">{el.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="accomplishments" className="flex-col h-[20rem] w-full items-center justify-baseline mt-[18rem]">
            <div className="flex items-center justify-baseline tracking-tight leading-none mt-4 font-poppins font-black text-white text-[4.5rem]">Accomplishments</div>
            <div className="h-[20rem] w-full flex-col items-center mt-3 justify-center">
              {accomplishments.map((el,idx) => (
                <div
                  key={idx}
                  className="h-[50%] w-full group hover:bg-[#1c1a19]"
                >
                  <div className="flex items-center justify-between pt-3 font-bold text-[1.25rem]">
                    {el.name}
                    
                  </div>
                  
                  <div className="flex items-center justify-baseline leading-5 text-[1rem] pt-2 text-[#837979]">
                    {el.description}
                  </div>
                  
                </div>
              ))}
            </div>
            


          </div>
          <div className="w-full h-[20rem] flex-col items-center justify-center  mt-[17.5em]">
            <div className="flex items-center justify-center font-bold text-[3.5rem] text-neutral-400">Let's Connect</div>
            <div className="flex items-center justify-center leading-relaxed p-10 text-[1rem] pt-2 text-[#837979]">I'm currently seeking new opportunities and would love to hear from you. Whether you have a question or just want to say hi, feel free to reach out.</div>
            <div className="flex items-center justify-center gap-[2rem] text-white">
              
              <a
                href="mailto:singhabhrant21@gmail.com"
                className="flex items-center text-white justify-center gap-[0.5rem]  hover:underline hover:cursor-pointer"
              >
                <IconMail className="h-5 w-5" />
                singhabhrant21@gmail.com
              </a>

              
              <a
                href="https://www.linkedin.com/in/singhabhrant/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-[0.5rem] text-white hover:underline hover:cursor-pointer"
              >
                <IconBrandLinkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </div>


          </div>



        </div>
        
      </main>
    )
  }


  return (
    <main className="min-h-screen bg-[#151312]">
      <motion.div className="pt-[1.25rem]  ">
        <div className="flex items-center justify-center"><NavigationBar></NavigationBar></div>
        <Hero></Hero>

        


      </motion.div>
    </main>
  );
}
