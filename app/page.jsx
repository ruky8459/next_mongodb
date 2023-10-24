import React from 'react'
import TickCard from './(components)/TickCard'

const DashBoard = () => {
  return (
    <div className='p-5'>
      <div className='lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-4'>
        <TickCard />
        <TickCard />
        <TickCard />
        <TickCard />
      </div>
    </div>
  )
}

export default DashBoard