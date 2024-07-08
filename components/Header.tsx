import SidebarMobile from "./SidebarMobile/SidebarMobile"
import SearchBar from "./SearchBar"
import UserButton from "./UserButton"

const Header = () => {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <SidebarMobile />
      <div className="w-full flex-1">
        <SearchBar />
      </div>
      <UserButton />
    </header>
  )
}

export default Header
