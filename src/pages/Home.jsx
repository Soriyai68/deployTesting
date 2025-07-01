import React, { useState } from 'react'
const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-9xl text-black justify-center flex items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500'>
        Soriya
      </div>
      <div className='text-2xl text-white text-center mt-4'>
        Count: {count}
      </div>
      <button
        onClick={() => setCount(count + 1)}
        className='mt-4 px-4 py-2 bg-blue-600 text-white rounded'
      >
        Increment
      </button>

    </>
  )
}
export default Home