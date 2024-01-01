import Blog from '../../components/Blog'
import { Tab, Layout } from '../../components/Layout'

const BlogPage = () => {
    return (
        <Layout activeTab={Tab.Blog}>
            <Blog 
            heading='A year in'
            subheading='Time flies when you drastically change your life'
            >
            <p className='pt-10'>
                It's been almost a year now since I got the amazing opportunity to start my first ever position as a software developer. Coming from a career as a primary school teacher I spent more and more time learning and practicing iOS development as a hobby, eventually leading up to a job at <a href='https://tibber.com' className='underline decoration-dotted'>Tibber</a>, where we 'empower the clever' to make smart decisions about their energy consumption.
            </p>
            <p>
                To sum it up in a sentence; <b>it's been one of the best decisions I've made so far in my life</b>. It's not uncommon that I go to bed looking forward to working the next morning. While I also enjoyed my job as a teacher, I'd never experienced this until now. Sure, it might be some kind of honey moon period, but almost one year in and the feeling persists. I believe there's few places better for me to start than Tibber, where I've been very warmly greeted and well cared for.
            </p>
            <p>
                Anyway, that's enough romanticizing. As I'm closing in on my first full year I pondered what I've learned so far and if there'd be anything worth sharing with others looking to make the same journey or already underway. I realized there's a whole lot - big and small, during and outside of work hours - but I thought I'd share three of the most striking realizations I've made.
            </p>
            <h2 className='pt-6 font-extrabold text-2xl'>Git is central</h2>
            <p>
                I started learning Git and GitHub not long after getting into development, but only enough to make commits and push the code to a remote repository. I didn't really need much more than that while learning and dabbling with side projects. Working on code in a team is another beast though, with working between branches, merge conflicts, cherry-picking and commit history being just a few of the things you'll need in your arsenal to be efficient. I started learning more of Git during the months leading up to me starting at Tibber, but it'd been nice to have felt more at home with many of the commands and workings available. I'd recommend others to try exploring Git even before hopping onto a team, by working on feature branches and dividing their side project repositories into main and dev branches. Maybe try to find open source projects with many active contributors and make pull requests to get a feel for working on code together with others.
            </p>
            <h2 className='pt-6 font-extrabold text-2xl'>Noone knows everything</h2>
            <p>
                Starting out, I put a lot of stock into being able to solve problems on my own, without help. I think I felt a need to prove myself capable, especially coming from another field and this being my first developer job. And while a developer should be able to work well independently, everyone on the team is working towards the same goal, and in my (admittedly relatively limited) experience everyone is more than happy to help. Noone knows everything, and if they can help you today, you might very well be able to help them tomorrow. When asking for help I recommend pair programming, discussing the problem and the code together. That way you might not only learn how to solve the problem at hand, but also how someone more senior and well versed might approach a problem.
            </p>
            <h2 className='pt-6 font-extrabold text-2xl'>Get involved</h2>
            <p>
                Something I was not anticipating when starting the job was how tightly tied my enjoyment was to the end product. I often see programming as a series of puzzles to solve a problem, and I love puzzles! But the larger puzzle is making something that fits the users and the market, something which is much easier to affect when it's just you building your own app. I've found that just feeling ownership of my part of the end product and getting more educated and involved with how things work on a wider scale fills that gap pretty well. Might be this doesn't resonate with everyone and is mostly aligned with my personal experience with development, but regardless I think it would benefit anyone to learn things adjacent to their own domain and about the ins and outs of the product or service they're part of building.
            </p>
            <p className='pt-6'>
                I'm very excited for the coming year and hoping to achieve a lot both at work and with my own projects. I feel like I'm still learning a lot with a great mix of more stuctured work with fantastic colleagues to learn from and collaborate with, and the more mission driven top-to-bottom development I do on my own app.
            </p>
            </Blog>
        </Layout>
    )
}

export default BlogPage