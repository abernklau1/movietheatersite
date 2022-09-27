import { Logo, NavbarList, UserLocation } from "./index"

const Navbar = () => {
  return <section class="navbar">
    <div class="logo-links">
      <Logo />
      <NavbarList />
    </div>
    <div class="user-location">
      <UserLocation />
    </div>

  </section>
}

export default Navbar
