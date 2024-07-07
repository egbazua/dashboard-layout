import SidebarHeader from "@/components/Sidebar/SidebarHeader"
import SidebarNav from "@/components/Sidebar/SidebarNav"
import SidebarFooter from "@/components/Sidebar/SidebarFooter"
import Header from "@/components/Header"
import ContentArea from "@/components/ContentArea"

export default function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
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
      <div className="flex flex-col">
        <Header />
        <ContentArea />
      </div>
    </div>
  )
}
