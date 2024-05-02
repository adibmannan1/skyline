import React from 'react'

const Achievements = ({number, description}) => {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-2xl md:text-4xl font-bold text-[#0D263B]'>{number}</h1>
      <p className='text-[#7C8893] leading-5'>{description}</p>
    </div>
  )
}

export default Achievements