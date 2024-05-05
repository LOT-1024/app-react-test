import { Link } from "react-router-dom"

const RegisterPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
        <div className="relative w-[500px] h-[600px] shadow-2xl rounded-[50px] flex justify-center">
            <Link to={"/main"} className="absolute left-10 text-[62px] text-black/35">&lt;--</Link>
            <div className="w-[400px] h-[397px] mt-[134px] mb-[69px] flex flex-col items-center gap-[35px]">
                <input className="w-[400px] h-[65px] text-[32px] text-center rounded-[50px] border-solid border-[1px] border-black" placeholder="Username" type="text" />
                <input className="w-[400px] h-[65px] text-[32px] text-center rounded-[50px] border-solid border-[1px] border-black" placeholder="Email" type="email" />
                <input className="w-[400px] h-[65px] text-[32px] text-center rounded-[50px] border-solid border-[1px] border-black" placeholder="Password" type="password" />
                <div className="mt-[35px] w-[370px] flex justify-between">
                    <Link to={"/login"} className="w-[150px] h-[62px] flex justify-center rounded-full items-center text-[36px] font-bold border-solid border-[1px] border-black">
                        Login
                    </Link>
                    <button className="w-[170px] h-[62px] flex justify-center rounded-full items-center text-[36px] font-bold text-white bg-green-400">
                        Register
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegisterPage