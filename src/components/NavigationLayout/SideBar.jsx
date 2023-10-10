import React from 'react'
import { sideToggle } from '@/store/GolbalStore'
import { useAtomValue } from 'jotai'

const SideBar = () => {
  const toggle = useAtomValue(sideToggle)

  console.log(toggle)

  return (
    <div className="">SideBar</div>
  )
}

export default SideBar