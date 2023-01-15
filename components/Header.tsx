import Link from 'next/link'
import { Tab } from './Layout'

interface HeaderProps {
    activeTab: Tab
}

const Header = (props: HeaderProps) => {
    function highlight(tab: Tab) {
        if (tab == props.activeTab) {
            return 'underline'
        } else {
            return ''
        }
    }

    return (
        <div className="flex justify-between p-4 pb-10">
            <h1 className='sm:text-3xl text-large'>SwitchOnSwift</h1>
            <ul className='flex flex-row gap-4 sm:text-xl text-medium uppercase'>
                <li className={`${highlight(Tab.Home)}`}>
                    <Link href='/'>Home</Link>
                </li>
                <li className={`${highlight(Tab.Blog)}`}>
                    <Link href='/blog'>Blog</Link>
                </li>
                <li className={`${highlight(Tab.About)}`}>
                    <Link href='/aboutme'>About me</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header