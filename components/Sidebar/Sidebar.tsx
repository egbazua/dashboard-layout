import SidebarFooter from "./SidebarFooter"
import SidebarHeader from "./SidebarHeader"
import SidebarNav from "./SidebarNav"

const Sidebar = () => {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <SidebarHeader />
        <SidebarNav />
        <SidebarFooter />
      </div>
    </div>
  )
}

export default Sidebar
