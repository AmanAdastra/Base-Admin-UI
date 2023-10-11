import React from 'react'
import { ThemeSwitcher } from '../core/ThemeSwitcher'

const AuthLayout = ({children}) => {
  return (
    <div className="bg-auth-bg-image h-[100vh] bg-cover">
        <div className='h-[60px] flex justify-end items-center px-4'>
        <ThemeSwitcher/>
        </div>
        <main className='h-[60vh] flex justify-center items-center mx-2' >
            <div className='backdrop-blur-sm bg-transparent dark:bg-black h-[90%] w-[500px] rounded-lg pt-[65px] pb-[54px] px-[55px]'>
                    {children}
            </div>
        </main>
    </div>
  )
}

export default AuthLayout