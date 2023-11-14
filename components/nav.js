import Link from 'next/link'
import React from 'react'
import '../src/app/globals.css'

export default function Nav() {
    return (
        <section className="fixed bottom-0 h-screen w-screen bg-red-800 lg:bg-green-800 lg:w-1/6 md:h-screen lg:left-0">
            <div className='relative mx-7 top-10'>
                <div className=''>Instagram</div>
                <div className='flex flex-col items-center relative top-10'>

                    <div className='flex flex-col items-center relative top-10'>
                        <Link href='/Home'>
                            <div className='flex items-center'><img src='/icons/home.png' alt='Home' className='w-1/6 mx-1 my-4' />Home</div>
                        </Link>
                        <Link href='/Search'>
                            <div className='flex items-center'><img src='/icons/search.png' alt='Search' className='w-1/6 mx-1 my-3' />Search</div>
                        </Link>
                        <Link href='/Explore'>
                            <div className='flex items-center lg:hidden bg-pink-300'><img src='/icons/explore.png' alt='Explore' className='w-1/6 mx-1 my-4' />Explore</div>
                        </Link>
                        <Link href='/Reels'>
                            <div className='flex items-center'><img src='/icons/reels.png' alt='Reels' className='w-1/6 mx-1 my-3' />Reels</div>
                        </Link>
                        <Link href='/Messages'>
                            <div className='flex items-center'><img src='/icons/message.png' alt='Messages' className='w-1/6 mx-1 my-4' />Messages</div>
                        </Link>
                        <Link href='/Notification'>
                            <div className='flex items-center'><img src='/icons/notification.png' alt='Notification' className='w-1/6 mx-1 my-3' />Notification</div>
                        </Link>
                        <Link href='/Create'>
                            <div className='flex items-center'><img src='/icons/home.png' alt='Create' className='w-1/6 mx-1 my-4' />Create</div>
                        </Link>
                        <Link href='/Profile'>
                            <div className='flex items-center'><img src='/icons/home.png' alt='Profile' className='w-1/6 mx-1 my-3' />Profile</div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    );
}