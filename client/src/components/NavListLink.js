const NavListLink = ({ link }) => {
  return <li>
    <a href={"/" + link}>{link}</a>
  </li>
}

export default NavListLink
