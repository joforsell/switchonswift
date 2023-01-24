import Blog from '../../components/Blog'
import { Tab, Layout } from '../../components/Layout'

const BlogPage = () => {
    return (
        <Layout activeTab={Tab.Blog}>
            <Blog 
            heading='A week of firsts'
            subheading="A flight through onboarding and my first lines of merged code"
            >
            <p className='pt-10'>
                This week was packed with onboarding sessions to get to know how the company works, why it operates with the business model it does and how all the different pieces go together. A lot to take in for sure, with 20 hours(1) of meetings scheduled throughout the week, but very interesting and surprisingly inspirational. I knew before accepting the offer at Tibber that they were a company on the forefront of pushing the energy market towards the future, but just how innovative and trailblazing they actually are in the market space is quite inspiring. They've pretty much pressed the prices for the rest of the market and put the old business model on its head. Not only are we creating a lot of value for our customers, we're also pushing the whole market to lower their power consumption and be more mindful in general.
            </p>
            <p>
                In between the many onboarding sessions I finally got to coding! I mentioned on the Monday morning sync meeting that I didn't have an assigned task but had started looking at a potential Live Activities widget just to help myself learn the code base, and they helped me pick an issue (task) that was a good starting point. So now I've made sure that the loading animation is the same across the different screens of the iOS app! This turned out to be a fantastic first issue because I had to traverse a lot of the code base to find the corresponding code for each of the views inside the app. I feel a little more at home with both the app itself and the code base thanks to this, and a little more confident going into the next issue.
            </p>
            <p>
                This also means I've made my first actual contribution to the Tibber app! Which means I've gone through my first pass of code review and merged my first pull request! If you don't know what that means, it's a process used in most developer workplaces. You use the version control system Git and a service to store and manage said versions of your code (eg. GitHub). Basically you make a copy of the current code base, make your alterations to the copy, then ask the original code base to accept your alterations when you're done. Before that can be done, one of your fellow developers has to look through your changes to make sure there's nothing you missed that could cause problems, or that improvements could be made in terms of code readability and structure.
            </p>
            <p>
                Next week I'll be going to Stockholm to visit the Tibber office, which I'm very much looking forward to! My visit will include a dinner with some people from my team and a lunch break running session with a whole bunch of colleagues. I'll confess that the thing I probably look forward to the most is having breakfast in peace and quiet, with no kids to feed, dress and brush.
            </p>
            </Blog>
        </Layout>
    )
}

export default BlogPage