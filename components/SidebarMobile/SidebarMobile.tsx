import { Button } from "@/components/ui/button"
import { Menu, } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import SidebarMobileNav from "./SidebarMobileNav"
import SidebarMobileFooter from "./SidebarMobileFooter"

const SidebarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <SidebarMobileNav />
        <SidebarMobileFooter />
      </SheetContent>
    </Sheet>
  )
}

export default SidebarMobile
