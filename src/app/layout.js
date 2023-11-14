import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '../../components/nav'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Instagram Clone',
  description: 'Instagram Web Clone in NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='lg:flex'>
          <section className='flex flex-row bg-orange-800 h-10 w-screen top-0 fixed md:hidden lg:hidden'>
            <h1>Instagram</h1>
            <Link href='/Create'>
              <div><img src='/icons/reels.png' className='w-1/5 mx-1 my-3' /></div>
            </Link>
            <Link href='/Notification'>
              <div><img src='/icons/notification.png' className='w-1/5 mx-1 my-3' /></div>
            </Link>
          </section>
          <section className='w-1/5 h-screen bg-red-800 fixed z-10 max-sm:hidden'>
            <div className='relative mx-7 top-10'>
              <div className=''>Instagram</div>
              <div className='flex flex-col items-center relative top-10'>
                <Link href='/Home'>
                  <div className='flex items-center'>
                    <img src='/icons/home.png' className='w-1/5 mx-1 my-4' />
                    Home
                  </div>
                </Link>
                <Link href='/Search'>
                  <div className='flex items-center'>
                    <img src='/icons/search.png' className='w-1/5 mx-1 my-3' />
                    Search
                  </div>
                </Link>
                <Link href='/Explore'>
                  <div className='flex items-center'>
                    <img src='/icons/explore.png' className='w-1/5 mx-1 my-4' />
                    Explore
                  </div>
                </Link>
                <Link href='/Reels'>
                  <div className='flex items-center'>
                    <img src='/icons/reels.png' className='w-1/5 mx-1 my-3' />
                    Reels
                  </div>
                </Link>
                <Link href='/Messages'>
                  <div className='flex items-center'>
                    <img src='/icons/message.png' className='w-1/5 mx-1 my-4' />
                    Messages
                  </div>
                </Link>
                <Link href='/Notification'>
                  <div className='flex items-center'>
                    <img src='/icons/notification.png' className='w-1/5 mx-1 my-3' />
                    Notification
                  </div>
                </Link>
                <Link href='/Create'>
                  <div className='flex items-center'>
                    <img src='/icons/home.png' className='w-1/5 mx-1 my-4' />
                    Create
                  </div>
                </Link>
                <Link href='/Profile'>
                  <div className='flex items-center'>
                    <img src='/icons/home.png' className='w-1/5 mx-1 my-3' />
                    Profile
                  </div>
                </Link>
              </div>
            </div>
          </section>
          <section className='main top-10 lg:right-0 w-screen overflow-hidden absolute z-0 lg:top-0 lg:w-4/5 bg-purple-800'>
            {children}
          </section>
          <section className='flex flex-row justify-around h-10 w-screen bg-blue-300 bottom-0 fixed md:hidden lg:hidden'>
            <Link href='/Home'>
              <div><img src='/icons/home.png' className='w-1/5 mx-1 my-3' /></div>
            </Link>
            <Link href='/Search'>
              <div><img src='/icons/search.png' className='w-1/5 mx-1 my-3' /></div>
            </Link>
            <Link href='/Reels'>
              <div><img src='/icons/reels.png' className='w-1/5 mx-1 my-3' /></div>
            </Link>
            <Link href='/Messages'>
              <div><img src='/icons/message.png' className='w-1/5 mx-1 my-3' /></div>
            </Link>
            <Link href='/Profile'>
              <div><img src='/icons/home.png' className='w-1/5 mx-1 my-3' /></div>
            </Link>
          </section>
          

        </main>

      </body>
    </html>
  )
}
