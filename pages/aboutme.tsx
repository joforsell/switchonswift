import { Layout, Tab } from '../components/Layout'
import Image from 'next/image'
import johan from '../public/johanforsell.jpg'

const AboutMe = () => {
    return (
        <Layout activeTab={Tab.About}>
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl font-bold'>Johan Forsell</h1>
                <p>iOS developer at <a href='https://tibber.com' className='underline decoration-dotted'>Tibber</a></p>
                <Image src={johan} alt='Portrait of Johan Forsell' className='m-10' />
                <p>This page should probably have some more information about me. Later.</p>
            </div>
        </Layout>
    )
}

export default AboutMe