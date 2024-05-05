import { Link } from "react-router-dom"

const NavbarMain = () => {
  return (
    <div className="fixed top-0 bg-white w-screen h-[120px] shadow-xl flex justify-between items-center">
        <Link to={"/"} className="text-[96px] pl-[50px]">B</Link>
        <div className="pr-[57px] flex gap-[20px]">
            <Link to={"/books"} className="text-[48px]">Books</Link>
            <button className="text-[48px]">Logout</button>
        </div>
    </div>
  )
}

export default NavbarMain