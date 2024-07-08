import SidebarFooter from "./SidebarFooter"
import SidebarHeader from "./SidebarHeader"
import SidebarNav from "./SidebarNav"

const Sidebar = () => {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <SidebarHeader />
        <div className="flex-1">
          <SidebarNav />
        </div>
        <div className="mt-auto p-4">
          <SidebarFooter />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
