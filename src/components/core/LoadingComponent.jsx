import React from 'react'
import {Spinner} from "@nextui-org/react";

const LoadingComponent = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <Spinner  color="primary" labelColor="primary" size='lg'/>
    </div>
  )
}

export default LoadingComponent