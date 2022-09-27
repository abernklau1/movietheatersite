import NavListLink from "./NavListLink";

const links = ["movies", "theater", "store", "login"];

const NavbarList = () => {
  return <ul>
    {links.map((link) => {
      return <NavListLink link={link} />
    })}
  </ul>
}

export default NavbarList
