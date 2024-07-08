import Header from "./Header"
import Sidebar from "./Sidebar/Sidebar"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <Sidebar />
      </div>
      <div className="flex flex-col">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Layout
