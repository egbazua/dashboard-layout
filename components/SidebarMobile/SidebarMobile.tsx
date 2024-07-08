import { Button } from "@/components/ui/button"
import { Menu, } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SidebarMobileNav from "./SidebarMobileNav"

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
        <div className="mt-auto">
          <Card>
            <CardHeader>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our
                support team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SidebarMobile
