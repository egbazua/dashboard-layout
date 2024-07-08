import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"
import ContentArea from "@/components/ContentArea"

export default function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <Sidebar />
      </div>
      <div className="flex flex-col">
        <Header />
        <ContentArea />
      </div>
    </div>
  )
}
