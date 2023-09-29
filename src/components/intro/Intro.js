
import React from 'react'
import './intro.css'
import my from "../../assets/image.png"
import btnHire from "../../assets/hireme.png"
import cv from "../../assets/Mohamad Alghoul (4) (1).pdf (1).pdf"
import {motion} from "framer-motion"



const Intro = () =>{

  return (
   <section id='home'>
    <div className='introconteant'>
        <motion.span className='hello'   animate={{ y: [-1000, 100, 0] }}transition={{ ease: "easeOut", duration: 3 }}>Hello,</motion.span>
        <motion.span className='introText' animate={{ y: [1000, 100, 0] }}transition={{ ease: "easeOut", duration: 3 }}>I'M <span className='introName'>Mohamad</span><br></br>Frontend Developer</motion.span>
        <motion.p animate={{ y: [-1000, 100, 0], x: [-1000, 100, 0] }}transition={{ ease: "easeOut", duration: 3 }} className='introPara'>I am a web developer and have extensive experience in creating websites, 
         <br></br>My experience is creating and designing websites, </motion.p>
         <a href={cv} download="cv"> <motion.button className='btni'
     animate={{ x: [-400, 100, 0] }}
     whileHover={{ scale: 1.1 }}
  transition={{ ease: "easeOut", duration: 3, type: "spring", stiffness: 400, damping: 10 }}
         ><img src={btnHire} alt="hire"></img>Hire me</motion.button>
</a>
    </div>
    <div className='introImg'>
        <motion.img    initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2.5,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }} src={my} alt='me' />
    </div>
   </section>
  )
}

export default Intro
