import { Navbar } from "./index"
import { Outlet } from "react-router-dom"

const SharedLayout = () => {
  return <section>
    <Navbar />
    <div>
      <Outlet />
    </div>
  </section>
}

export default SharedLayout
