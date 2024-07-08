import SidebarFooter from "./Sidebar/SidebarFooter"
import SidebarHeader from "./Sidebar/SidebarHeader"
import SidebarNav from "./Sidebar/SidebarNav"

const Sidebar = () => {
  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <SidebarHeader />
      <div className="flex-1">
        <SidebarNav />
      </div>
      <div className="mt-auto p-4">
        <SidebarFooter />
      </div>
    </div>
  )
}

export default Sidebar
