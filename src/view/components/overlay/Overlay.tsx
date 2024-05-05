import React from "react"

type setStatePropType = {
    setStateProp: (e:boolean) => void
}

const Overlay:React.FC<setStatePropType> = ({setStateProp}) => {
  return (
    <div className="fixed top-0 h-screen w-screen flex justify-center items-center">
        <div className="absolute h-screen w-screen bg-black/30" onClick={() => setStateProp(false)}/>
        <div className="absolute w-[500px] h-[600px] bg-white shadow-2xl rounded-[50px] flex justify-center">
            <button className="absolute right-10 text-[68px] rotate-45" onClick={() => setStateProp(false)}>+</button>
            <div className="w-[400px] h-[397px] mt-[134px] mb-[69px] flex flex-col items-center gap-[35px]">
                <input className="w-[400px] h-[65px] text-[32px] text-center rounded-[50px] border-solid border-[1px] border-black" placeholder="Book Title" type="text" />
                <input className="w-[400px] h-[65px] text-[32px] text-center rounded-[50px] border-solid border-[1px] border-black" placeholder="Book Author" type="text" />
                <input className="w-[400px] h-[65px] text-[32px] text-center rounded-[50px] border-solid border-[1px] border-black" placeholder="Book Genre" type="text" />
                <div className="mt-[35px] w-[370px] flex justify-center">
                    <button className="w-[170px] h-[62px] flex justify-center rounded-full items-center text-[36px] font-bold text-white bg-green-400">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Overlay