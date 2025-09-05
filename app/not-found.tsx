import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='m-auto flex flex-col items-center gap-3 '>
        <Image src={"/error.jpg"} alt='error image' width={400} height={400}/>
        <h1>این صفحه رو نساختیم صداشو درنیار...</h1>
    </div>
  )
}

export default page