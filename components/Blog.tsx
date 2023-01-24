import { Inter } from '@next/font/google'
import { ReactNode } from 'react'
import RecentPosts from './RecentPosts'

const inter = Inter({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'] 
})

interface BlogProps {
    heading: string,
    subheading: string,
    children?: ReactNode
}

const Blog = (props: BlogProps) => {
    return (
        <div className='flex flex-col items-center'>
            <h1 className={`${inter.className} text-center text-6xl text-white`}>{props.heading}</h1>
            <h2 className='text-center text-xl text-white font-thin pt-2'>{props.subheading}</h2>
            <div className='flex flex-col space-y-4 max-w-3xl w-full'>
                {props.children}
            </div>
            <RecentPosts />
        </div>
    )
}

export default Blog