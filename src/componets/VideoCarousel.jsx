
import React, { useEffect, useRef, useState } from 'react'
import { hightlightsSlides } from '../constants'


const VedioCarousel = () => {
  const videoRef=useRef([])
  const videoSpanRef=useRef([])
  const videoDivRef=useRef([])

  const [video,setVideo]=useState({
    isEnd:false,
    startPlay:false,
    videoId:0,
    isLastVideo:false,
    isPlaying:false
  })

  useEffect(()=>{
    const currentProgress=0;
    
  },[videoId,startPlay])
  return (
    <>
      <div className='flex items-center'>
        {hightlightsSlides.map((item,index)=>(
          <div key={item.id} id='slider' className='sm:pr-20 pr-10'>
            <div className='video-carousel_container'>
              <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                <video id='video' playsInline={true} preload='auto' muted>
                  <source src={item.video} type='video/mp4' />
                </video>
              </div>
              <div className='absolute top-12 left-[5%] z-10'>
                {item.textLists.map((text)=>(
                  <p key={text} className='md:text-2xl text-xl font-medium'> 
                    {text} 
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default VedioCarousel
