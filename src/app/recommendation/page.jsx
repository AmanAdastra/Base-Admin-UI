import React from 'react'
import UsersGraph from '@/components/Graphs/UsersGraph'
import PageHeader from '@/components/core/PageHeader'
import GraphCards from '@/components/Graphs/GraphCards'
const page = () => {
  return (
    <div>
        <PageHeader title={"Recommendation"}/>
        <div className='flex flex-wrap'>
            <GraphCards/>
        </div>
        <UsersGraph/>
    </div>
  )
}

export default page