import NavbarLogin from "../../components/navbar/NavbarLogin"

const HomeLogin = () => {
  return (
    <>
        <NavbarLogin/>
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-[35px]">
            <h1 className="text-center w-[795px] font-bold text-[64px] leading-tight">
                WELCOME TO THE BOOKS COLLECTION  APP
            </h1>
            <p className="text-center w-[875px] text-[40px] leading-tight">
                The Book Management System to facilitate the management of a collection of books.
            </p>
        </div>
    </>
  )
}

export default HomeLogin