import NavbarMain from "../../components/navbar/NavbarMain"
import Overlay from "../../components/overlay/Overlay"
import { Trash, EditFill } from "../../assets"
import { useState } from "react"

const BooksPage = () => {
    const [overly, setOverly] = useState(false)
  return (
    <>  
        <NavbarMain/>
        <div className="h-[120px] w-screen"></div>
        <ul className="mt-[70px] ml-[80px] flex flex-col gap-[45px]">
            <li className="flex justify-between items-center w-[1014px] h-[100px]  bg-white shadow-xl">
                <p className="ml-[30px] text-[48px] w-[700px] h-[70px] overflow-hidden text-ellipsis">1. Judul Buku</p>
                <div className="flex mr-[30px] gap-3">
                    <button>
                        <img src={EditFill} alt="edit book" />
                    </button>
                    <button>
                        <img src={Trash} alt="delet book" />
                    </button>
                </div>
            </li>
            <li className="flex justify-between items-center w-[1014px] h-[100px]  bg-white shadow-xl">
                <p className="ml-[30px] text-[48px] w-[700px] h-[70px] overflow-hidden text-ellipsis">1. Judul Buku</p>
                <div className="flex mr-[30px] gap-3">
                    <button>
                        <img src={EditFill} alt="edit book" />
                    </button>
                    <button>
                        <img src={Trash} alt="delet book" />
                    </button>
                </div>
            </li>
            <li className="flex justify-between items-center w-[1014px] h-[100px]  bg-white shadow-xl">
                <p className="ml-[30px] text-[48px] w-[700px] h-[70px] overflow-hidden text-ellipsis">1. Judul Buku</p>
                <div className="flex mr-[30px] gap-3">
                    <button>
                        <img src={EditFill} alt="edit book" />
                    </button>
                    <button>
                        <img src={Trash} alt="delet book" />
                    </button>
                </div>
            </li>  
            <li className="flex justify-between items-center w-[1014px] h-[100px]  bg-white shadow-xl">
                <p className="ml-[30px] text-[48px] w-[700px] h-[70px] overflow-hidden text-ellipsis">1. Judul Buku</p>
                <div className="flex mr-[30px] gap-3">
                    <button>
                        <img src={EditFill} alt="edit book" />
                    </button>
                    <button>
                        <img src={Trash} alt="delet book" />
                    </button>
                </div>
            </li>  
            <li className="flex justify-between items-center w-[1014px] h-[100px]  bg-white shadow-xl">
                <p className="ml-[30px] text-[48px] w-[700px] h-[70px] overflow-hidden text-ellipsis">1. Judul Buku</p>
                <div className="flex mr-[30px] gap-3">
                    <button>
                        <img src={EditFill} alt="edit book" />
                    </button>
                    <button>
                        <img src={Trash} alt="delet book" />
                    </button>
                </div>
            </li>  
            <li className="flex justify-between items-center w-[1014px] h-[100px]  bg-white shadow-xl">
                <p className="ml-[30px] text-[48px] w-[700px] h-[70px] overflow-hidden text-ellipsis">1. Judul Buku</p>
                <div className="flex mr-[30px] gap-3">
                    <button>
                        <img src={EditFill} alt="edit book" />
                    </button>
                    <button>
                        <img src={Trash} alt="delet book" />
                    </button>
                </div>
            </li>  
            <li className="flex justify-between items-center w-[1014px] h-[100px]  bg-white shadow-xl">
                <p className="ml-[30px] text-[48px] w-[700px] h-[70px] overflow-hidden text-ellipsis">1. Judul Buku</p>
                <div className="flex mr-[30px] gap-3">
                    <button>
                        <img src={EditFill} alt="edit book" />
                    </button>
                    <button>
                        <img src={Trash} alt="delet book" />
                    </button>
                </div>
            </li>  
            <li className="flex justify-between items-center w-[1014px] h-[100px]  bg-white shadow-xl">
                <p className="ml-[30px] text-[48px] w-[700px] h-[70px] overflow-hidden text-ellipsis">1. Judul Buku</p>
                <div className="flex mr-[30px] gap-3">
                    <button>
                        <img src={EditFill} alt="edit book" />
                    </button>
                    <button>
                        <img src={Trash} alt="delet book" />
                    </button>
                </div>
            </li>      
        </ul>
        <button className="fixed bottom-20 right-20 w-[150px] h-[150px] rounded-full bg-white shadow-xl flex items-center justify-center text-[128px] text-blue-600" onClick={() => setOverly(true)}>+</button>
        {overly && <Overlay setStateProp={setOverly} />}
    </>
  )
}

export default BooksPage