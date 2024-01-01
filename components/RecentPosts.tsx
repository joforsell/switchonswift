import Link from 'next/link'

const RecentPosts = () => {
    return (
        <div className='flex flex-col gap-2 min-w-[20rem] pt-20'>
            <h3 className='text-lg font-bold m-auto'>Recent posts</h3>
            <Link href='/blog'>
                <div className='flex flex-row justify-between'>
                    <p>A year in</p>
                    <p className='font-thin'>2024-01-01</p>
                </div>
            </Link>
            <Link href='/blog/a-week-of-firsts'>
                <div className='flex flex-row justify-between'>
                    <p>A week of firsts</p>
                    <p className='font-thin'>2023-01-24</p>
                </div>
            </Link>
            <Link href='/blog/first-week-as-a-developer'>
                <div className='flex flex-row justify-between'>
                    <p>First week as a developer</p>
                    <p className='font-thin'>2023-01-15</p>
                </div>
            </Link>
            <Link href='/blog/pages/blog/a-little-blog-at-least'>
                <div className='flex flex-row justify-between'>
                    <p>A little blog, at least</p>
                    <p className='font-thin'>2023-01-14</p>
                </div>
            </Link>
        </div>
    )
}

export default RecentPosts