import { RxDotFilled } from 'react-icons/rx'
import { BsBookmark } from 'react-icons/bs'
import { useState } from 'react'

export default function CardItem(props) {
  return (
    <div class='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <a href='#'>
            <img class='rounded-t-lg' src='https://pict.sindonews.net/webp/480/pena/news/2023/05/05/13/1089191/mahfud-md-satgas-tppu-siap-bekerja-tsr.webp' alt='' />
        </a>
        <div class='p-5 relative'>
          <div className='flex items-center mb-5 text-slate-500 text-sm'>
            <span>Jeff Dunn</span>
            <RxDotFilled />
            <span>May 6, 2023</span>
          </div>
            <a href='#'>
                <h5 class='mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Noteworthy technology acquisitions 2021</h5>
            </a>
            <p class='mb-3 font-normal text-gray-600 dark:text-gray-400'>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <button className='absolute top-5 right-5 text-2xl'>
              <BsBookmark/>
            </button>
        </div>
    </div>
  )
}