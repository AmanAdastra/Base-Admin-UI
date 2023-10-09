import React from 'react'
import SideBar from './SideBar'

const NavigationLayout = ({children}) => {
  return (
    <div className='h-[100vh] flex'>
        <div className=' w-[260px]  bg-red-400'>
            <SideBar/>
        </div>
        <main>
            {children}
        </main>
    </div>
  )
}

export default NavigationLayout