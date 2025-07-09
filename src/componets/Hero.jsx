import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo,smallHeroVideo} from '../utils'

const Hero = () => {

  const [videoSrc,setVideoSrc]=useState( window.innerWidth < 760 ? 
    smallHeroVideo: heroVideo)
  
  useGSAP(()=>{
    gsap.to('#hero',{
      opacity:1,
      delay:2
    })

    gsap.to("#cta",{
      opacity:1,
      y:-50,
      delay:2
    })
  },[])

  const handleVideoSrcSet = () => {
    if (window.innerWidth<760){
      setVideoSrc(smallHeroVideo)
    }else{
      setVideoSrc(heroVideo)
    }
  }

  // useEffect bas ak bar chalega jab hmm website open karange and 
  // tab compoenet first time mount hoga tab use effect-chalega and 
  // uske bad event listener store ho jayaga broweser mai and dhyan 
  // rakhega resize 
  useEffect(()=>{
    window.addEventListener('resize',handleVideoSrcSet)

    return ()=>{
      window.removeEventListener('resize',handleVideoSrcSet)
    }
  },[])

  return (
    <section className='w-full borde nav-height bg-black relative'>
      <div className='h-5/6 borde w-full flex-center flex-col ' >
        <p id='hero' className='hero-title'>iPhone 15 Pro</p>
        <div className='borde md:w-10/12 w-9/12'>
        {/*  playsinline attribute is used with the <video> 
        tag to allow the video to play inline within the webpage, 
        especially on mobile devices, instead of automatically 
        going fullscreen. */}
          <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type='video/mp4'/>
          </video>
        </div>
      </div>

      <div 
        id='cta' 
        className='borde flex flex-col items-center opacity-0 
        translate-y-20'
        >
          <a href="#highlights" className='btn'>Buy</a>
          <p>From $199 month or $999</p>
      </div>

    </section>
  )
}

export default Hero
