import { Link } from "react-router-dom"

const NavbarLogin = () => {
  return (
    <div className="fixed top-0 bg-white w-screen h-[120px] shadow-xl flex justify-between items-center">
        <Link to={"/main"} className="text-[96px] pl-[50px]">B</Link>
        <Link to={"/login"} className="text-[48px] pr-[57px]">Login</Link>
    </div>
  )
}

export default NavbarLogin