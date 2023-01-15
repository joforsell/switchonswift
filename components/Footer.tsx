import Image from 'next/image'
import twitterLogo from '../public/twitterlogo.svg'
import mastodonLogo from '../public/mastodonlogo.svg'

const year = new Date().getFullYear()
const logoSize = 30

const Footer = () => {
    return (
        <div className='flex flex-row justify-center items-center gap-4 pt-20'>
            <p className='font-thin'>©{year} Johan Forsell</p>
            <a href='https://twitter.com/joforselldev'><Image src={twitterLogo} alt='Twitter Logo' width={logoSize} height={logoSize} /></a>
            <a href='https://iosdev.space/@joforselldev'><Image src={mastodonLogo} alt='Mastodon Logo' width={logoSize} height={logoSize} /></a>
        </div>
    )
}

export default Footer