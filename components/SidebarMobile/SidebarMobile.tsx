import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import SidebarMobileNav from "./SidebarMobileNav"
import SidebarMobileFooter from "./SidebarMobileFooter"
import ToggleTrigger from "./ToggleTrigger"

const SidebarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ToggleTrigger />
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <SidebarMobileNav />
        <SidebarMobileFooter />
      </SheetContent>
    </Sheet>
  )
}

export default SidebarMobile
