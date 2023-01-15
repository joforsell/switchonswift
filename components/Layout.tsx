import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

export enum Tab {
  Home, Blog, About
}

interface LayoutProps {
  activeTab: Tab
  children?: ReactNode
}

export const Layout = (props: LayoutProps) => {
    return (
      <div className="bg-gray-400 min-h-screen flex justify-center">
        <div className="bg-gray-700 max-w-6xl min-h-screen p-4 flex-auto text-white flex flex-col justify-between">
          <div>
            <Header activeTab={props.activeTab} />
            {props.children}
          </div>
          <Footer />
        </div>
      </div>
    )
  }
