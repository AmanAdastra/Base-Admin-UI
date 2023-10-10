import React from 'react'

const PageHeader = ({title}) => {
  return (
    <div className='h-[40px] my-[24px] flex justify-between items-center pl-2'>
            <h1 className='font-bold text-[#664dc9] text-xl'>{title}</h1>
    </div>
  )
}

export default PageHeader