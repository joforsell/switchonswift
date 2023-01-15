import { Layout, Tab } from '../components/Layout'

function Home() {
  return (
    <Layout activeTab={Tab.Home}>
      <h1 className='text-center pt-10'>One day I will be a beautiful, fleshed out home page. Not yet though.</h1>
    </Layout>
  )
}

export default Home