import { useState } from "react";
import { MdDelete, MdEdit, MdSave } from "react-icons/md";

function Todo({todoText,onDelete,onEdit,isFinished,onFinished}){
    const[updateFinished,setUpdateFinished]=useState(isFinished)
    const[editText,setEditText]=useState(todoText)
    const[isEdit,setIsEdit]=useState(false)
    return(
        <>
        <div className="flex items-center w-full justify-between bg-[#8758ff] py-[0.4rem] px-3 text-white cursor-pointer mb-4 rounded-md ">
            {isEdit?<input type="text" className="p-1 rounded-md max-w-[50%] outline-none bg-transparent text-white border-[1px] border-white" value={editText} onChange={(e)=>setEditText(e.target.value)}></input>:<h1>{todoText}</h1>}
            <div className="flex gap-5 items-center">
                <input type="checkbox" checked={updateFinished} onChange={(e)=>{setUpdateFinished(e.target.checked)
                    onFinished(e.target.checked)
                }} className=" hover:scale-[1.3] transition-all ease-in-out duration-200 cursor-pointer"/>
                <button onClick={()=>onDelete()}><MdDelete className="text-white text-lg hover:scale-[1.3] transition-all ease-in-out duration-200"/></button>
                {isEdit?<button onClick={()=>{onEdit(editText)
                    setIsEdit(!isEdit)
                }}><MdSave  className="text-white text-lg hover:scale-[1.3] transition-all ease-in-out duration-200"/></button>:
                <button onClick={()=>setIsEdit(!isEdit)}><MdEdit  className="text-white text-lg hover:scale-[1.3] transition-all ease-in-out duration-200"/></button>}
            </div>
        </div>
        </>
    )
}
export default Todo