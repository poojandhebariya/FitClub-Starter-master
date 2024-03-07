import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"
import NumberCounter from 'number-counter'


import {motion} from 'framer-motion'

const Hero = () => {

   const mobile=window.innerWidth<=768?true:false;
   const transition = {type: 'spring' ,duration :3} 

  return (
    <div className='hero' id='home'>
        <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header/>

        <div className="the-best-ad">
            <motion.div
                initial={{left: mobile?"160px":"238px"}}
                whileInView={{left: '8px'}}
                transition={{...transition,type: 'tween'}}
                
            >
            </motion.div>
            <span>The Best Fitness Club In The Town</span>
        </div>

        <div className="hero-text">
            <div>
                <span className='stroke-text'>Shape</span>
                <span> Your</span>
            </div>
            <div>
                <span>Ideal Body</span>
            </div>

            <div>
                <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
            </div>
        </div>

        <div className="figures">
            <div>
                <span><NumberCounter end={140} start={100} delay='4' preFix="+" /></span>
                <span>Expert Coachs</span>
            </div>
            <div>
                <span><NumberCounter end={978} start={500} delay='4' preFix="+" /></span>
                <span>Members Joined</span>
            </div>
            <div>
                <span><NumberCounter end={50} start={30} delay='4' preFix="+" /></span>
                <span>Fitness Programs</span>
            </div>
        </div>

        <div className="hero-buttons">
            <buttons className="btn">Get Started</buttons>
            <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className='btn'>Join Now</button>
        <motion.div className='heart-rate'
            initial={{right: '-1rem'}}
            whileInView={{right: '4rem'}}
            transition={transition}
        >
            <img src={heart} alt="" />
            <span>Heart Rate</span>
            <span>116 Bpm</span>
        </motion.div>

        <img src={hero_image} alt="" className='hero-image'/>
        <motion.img 
        
        initial={{right:'11rem'}}
        whileInView={{right: '21rem'}}
        transition={transition}

        src={hero_image_back} alt="" className='hero-image-back'/>

        <motion.div className="calories"
            initial={{right: '37rem'}}
            whileInView={{right: '28rem'}}
            transition={transition}
        >
            <img src={calories} alt="" />
            <div>
                <span>Calories Burn</span>
                <span>220kcal</span>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
