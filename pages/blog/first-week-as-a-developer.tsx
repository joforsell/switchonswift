import Blog from '../../components/Blog'
import { Tab, Layout } from '../../components/Layout'

const BlogPage = () => {
    return (
        <Layout activeTab={Tab.Blog}>
            <Blog 
            heading='First week as a developer'
            subheading="Time flies when you're making life altering career changes"
            >
            <p className='pt-10'>
                I survived the first week! It wasn't actually as discombobulating as I imagined it would be, much thanks to a great manager, a helpful team and a quite relaxed starting pace. I had to take my second day off to care for my youngest kid who wasn't well, which was frustrating. Luckily he felt better quickly and he could go back to kindergarden the next day. Anyway, I'll try to wrap up what I've done this first week and how it's all felt!
            </p>
            <p>
                I started out just installing things. I had a MacBook Pro and an iPhone 14 delivered to me which needed to be installed. Once the OS's were installed I started installing all the needed software, like Xcode and Slack aswell as some nice-to-haves, like Spotify, iTerm and Magnet.<br />At 9:00 I attended my first ever stand up meeting (basically the team meeting and catching up on what everyone's doing, what needs to be done and making sure no tasks are being missed/stuck in limbo). I followed as well as I could and got a little insight of what's going on right now. We also had a short round of introductions to my benefit.<br />After the meeting concluded I had about half an hour to look around in the employee dashboard, where all the services and software used by us developers are listed. I installed a few on my macbook and made sure I was properly signed in and set up on some others. At 10:00 I had my second meeting of the day. Well, more of a presentation really, where an HR representative explained to me and some other new employees how the company's structured, what to expect from the company and what they expect from us. A well made presentation I'd say, with an energetic and approachable presenter.<br />I had a quick lunch, then waltzed around the dashboard a little more, trying to navigate all the services I hadn't used before. I also had to connect my work AppleID (which was already set up) to the app on App Store Connect and set up a work GitHub account to get access to all the repos. There were a few hiccups along the way, but I was set up at the start of the day in a Slack channel with a bunch of the iOS developers who made things a lot easier.<br />There were two more meetings before day's end, first with a larger team and then with a short one with all the iOS developers. To close out the day I had a talk with my manager about my first impressions, how everything was going and what to expect for the rest of the week.
            </p>
            <p>
                When I closed my laptop and left my home office to go down to my family (who had the day off) there were a lot of things swimming around in my head. Mostly new faces and big expectations for the next day. I was excited to dive into the code base and learn how the app was structured, and we had planned a walkthrough for me with a few of the iOS developers for Tuesday. Which was a strong contributing factor to my frustration when I had to miss my second day. Of course, the code base wasn't going anywhere, but still!
            </p>
            <p>
                The rest of the week had a few more meetings, some virtual 15 minute coffee dates with others on my team to get to know them and what they do at the company. When I wasn't in meetings I kept setting up things in my dashboard or on my computer, installing CLI's and tools and making sure I had access where needed. I got the app up and running locally and glanced around a bit before my walkthrough. I had my first run-in with Fastlane, which I've wanted to try out for my own app but haven't gotten to it. Everything was already set up, of course, so all I had to do was make sure Ruby was updated (which was messier than it needed to be) and install the bundle.<br />When everything was set up I had a stroll around the code base whenever I wasn't in a meeting. I tried (and am still trying) to completely understand things like the flow of information and how everything is connected. I thought my app was getting pretty big after working on it for a year, but it doesn't hold a candle to what I have to get to know now, so there's a lot of learning and navigating to do. I suspect a lot of it will come piecemeal, while working on different parts, but I'd like to fully grasp some of the main parts at least.<br />I had a meeting with one of the Product Managers on Friday and it came up that the app doesn't utilize Live Activities yet. He was very supportive of trying to find little areas for improvement or coming with feature ideas, which inspired me to start looking at implementing some kind of widget/dynamic island Live Activity. It's give me a great opportunity both to explore the Live Activities API but also to dive deeper into the data flow of the app. And who knows, maybe we can use some of it if we decide to actually launch Live Activities!
            </p>
            <p>
                All in all, I had a great first week at Tibber. My manager is very responsive and seems to really care that I get on well with everything, the team is helpful and never scoff at questions asked and the overall energy and culture I've seen so far is positive and cheerful.<br />Next week is when the real onboarding starts, I have around 20 hours of meetings (most of them presentations from the different departments) booked. When not in meetings I'll try to book in a few more virtual coffee dates, try to do a tag along for someones code review and otherwise explore how I could make a Live Activity widget work for the app.
            </p>
            </Blog>
        </Layout>
    )
}

export default BlogPage