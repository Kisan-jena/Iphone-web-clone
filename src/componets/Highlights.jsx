
import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel.jsx';

const Highlights = () => {

  useGSAP(()=>{
    gsap.to('#title',{
      opacity:1,
      y:0
    })

    gsap.to('.link',{
      opacity:1,
      y:0,
      duration:1,
      stagger:0.25
    })
  },[])

  return (
    <section  id='highlights' className='w-screen border overflow-hidden h-full common-padding bg-zinc'>
      <div className='scrim-max-width border'>
        <div className='mb-12 md:flex max-w-full items-end justify-between  border'>
          <h1 id='title' className='section-heading'>
            Get the highlights
          </h1>

          <div className='flex flex-wrap border items-end gap-5'>
            <p className='link'>Watch the Film
              <img src={watchImg} alt="watch" className='ml-2' />
            </p>
            <p className='link'>Watch the event
              <img src={rightImg} alt="watch" className='ml-2' />
            </p>
          </div>
        </div>


        <VideoCarousel/>
      </div>

    </section>
  )
}

export default Highlights
