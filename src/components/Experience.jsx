import React from 'react'

const Experience = () => {
  return (
    <div className='h-screen bg-black'>
     <div className='flex justify-center'><h1 className='border-b-2 pb-2 text-white text-6xl' >Experience</h1></div>
     <div className='flex gap-8 justify-center mt-10'>
      <div className='text-white flex flex-col gap-40 justify-center relative hidden sm:flex'>
        <div className='bg-blue-500 p-2 rounded relative bottom-7'>18/01/2023 - 18/03/2023</div>
        <div  className='bg-blue-500 p-2 rounded relative bottom-7'>02/08/2021 - 02/08/2022</div>

      </div>
      <div className='border border-2 border-blue-600 min-h-[60vh] relative'>
        <span className='bg-white h-5 w-5 border  rounded-full absolute top-20 left-[-0.6em]'></span>
        <span className='bg-white h-5 w-5 border  rounded-full absolute top-[17.5rem] left-[-0.6em]'></span>
      </div>
      <div className='flex flex-col  gap-16 justify-center  '>
        <div className='text-white flex flex-col gap-2'>
        <div className='bg-blue-500 p-2 rounded w-56 sm:hidden'>18/01/2023 - 18/03/2023</div>
          <h1 className='text-2xl'>Associate Software Engineer</h1>
          <p className='text-xl'>Test Yantra Software Solution, Benglore Internship.</p>
          <ul className='list-disc'>
            <li>Integrated new features</li>
            <li>Worked on LMS project implemeted 50%</li>
          </ul>
        </div>
        <div className='text-white flex flex-col gap-2 '>
        <div  className='bg-blue-500 p-2 rounded w-56 sm:hidden'>02/08/2021 - 02/08/2022</div>
          <h1 className='text-2xl'>Computer Operator</h1>
          <p className='text-xl'>Ang India, Noida, Full Time.</p>
          <ul className='list-disc'>
            <li>Handled Branch Vault Room Operations.</li>
          </ul>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Experience