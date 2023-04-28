import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const index = () => {
  return (
    <div className='flex justify-center items-center p-2 gap-6'>
      <Image width={180} height={180} src="/logo_big.png" alt="" />
      <Link className='bg-red-200 flex items-center p-3' href={"/create"}>Create an article!</Link>
    </div>
  )
}

export default index