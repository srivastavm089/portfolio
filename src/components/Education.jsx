import React from 'react'

const Education = () => {
  return (
    <div className='bg-black text-white h-screen flex flex-col items-center'>
      <h1 className='text-center text-5xl pt-20 border-b-2 pb-2'>Education</h1>
       <div className='flex justify-center gap-5 mt-20   h-96'>
        
         <div  className=' bg-gray-700 self-start pt-12 pb-12 pr-12 pl-2'>
          <div className='text-sm sm:text-2xl '>
            <p>BCA,Computer Science</p>
            <p className='text-blue-500'>Integral Universit, Lucknow</p>
            <p>CGPA-8.50</p>
          </div>
         </div>
         <div className='border border-blue-500 relative '>
          <span className='absolute w-5 bg-blue-500 h-5 rounded-full right-[-1.5vh] top-[22%]'></span>
          <span className='absolute w-5 bg-blue-500 h-5 rounded-full right-[-1.5vh] top-[72%]'></span>
         </div>
         <div className=' bg-gray-700 self-end pt-12 pb-12 pr-12 pl-2'>
          <div className='text-sm  sm:text-2xl '>
            <p>MCA, Computer Science</p>
            <p className='text-blue-500'>JS University, Shikohabad</p>
            <p>CGPA - 7.35</p>
          </div>
         </div>


       </div>
    </div>
  )
}

export default Education