import Blog from '../../components/Blog'
import { Tab, Layout } from '../../components/Layout'

const BlogPage = () => {
    return (
        <Layout activeTab={Tab.Blog}>
            <Blog 
            heading='A little blog, at least'
            subheading='Development ramblings and an unlikely side project'
            >
            <p className='pt-10'>
                I always liked the thought of writing a blog. I've enjoyed writing in the past but rarely found the time nor felt like I had something worth sharing that would constitute a blog post. Lately I feel like that's changed. Well, at least the part about having something worth sharing, time is still extremely sparse.
            </p>
            <p>
                This little project will attempt to accomplish a few things:
            </p>
            <ul className='list-disc list-inside pl-4'>
                <li>Consolidate and share the learnings from my new job each week</li>
                <li>Share other interesting things I learn that are related to the field</li>
                <li>Act as a hub for my dev related things - projects, ideas, resume</li>
                <li>Give me an excuse to play around some more with web development and dev ops</li>
            </ul>
            <p>
                When I say 'play around with web development and dev ops' I of course mean completely over engineering a simple blog/personal site for the benefit of absolutely noone (except, of course, my learning and exploring). For now I've just done the bare minimum to start writing, but I have a number of things I'd like to implement here that I may or may not find the time or inspiration finish:
            </p>
            <ul className='list-disc list-inside pl-4'>
                <li>List of indie development projects</li>
                <li>'About me'-section with bio and professional history</li>
                <li>System to parse markdown into custom React components for the blog</li>
                <li>In browser markdown editor with live preview for writing blog posts</li>
                <li>Vapor (Swift on the server) backend</li>
                <li>Database (packed with backend in a Docker container) for storing blog posts</li>
                <li>Flashy, fancy UI stuff with animations</li>
            </ul>
            <p>
                I realize that this is both unnecessarily complex and perhaps a bit delusional given how little time I already have for side projects. But it does feel nice to have a 'to-do'-list where nothing is mandatory or time sensitive, I'll only ever have to check things off the list if I feel like it. Worse comes to worst, I'll have somewhere to collect my thoughts when I want to and nothing more, which is also fine.
            </p>
            <p>
                My mini goal for now is to post a little work week round up each week some time between friday and sunday evening. I'm putting very little pressure on myself to actually reach that goal but I feel like it would be fun and probably beneficial for me, while I get familiar with my new work place and role, if I could make it happen.
            </p>
            </Blog>
        </Layout>
    )
}

export default BlogPage