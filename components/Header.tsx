import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header>
        <div className='p-3 flex justify-between items-center border-b border-b-gray-700'>
            <Link href="/" className='font-mono text-2xl font-semibold text-hdPrimary'>HILMANDEV</Link>
            <Link href="/about" className='font-mono text-2xl font-semibold'>
                <img src="/hilman-image.JPG" alt='hilman-img' className='w-12 h-12 rounded-full'/>
            </Link>
        </div>
    </header>
  )
}