import React from 'react'

const HomePage = () => {
  return (
    <div className='flex flex-col w-full'>
      <div className="flex text-white gap-2 w-full">
        <div className="flex flex-col gap-2 min-w-[180] flex-1">
          <p className='font-thin'>Total Posts</p>
          <h1 className='text-2xl'>123</h1>
        </div>
        <div className="flex flex-col gap-2 min-w-[180] flex-1">
          <p className='font-thin'>Scheduled Posts</p>
          <h1 className='text-2xl'>123</h1>
        </div>
        <div className="flex flex-col gap-2 min-w-[180] flex-1">
          <p className='font-thin'>Draft Posts</p>
          <h1 className='text-2xl'>123</h1>

          
        </div>
      </div>
    </div>


  )
}



export default HomePage