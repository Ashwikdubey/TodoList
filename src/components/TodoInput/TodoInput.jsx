import { useContext, useState } from "react"
import todoDispatchContext from "../../context/todoDispatchContext"

function TodoInput(){
    const[input,setInput]=useState("")
    const {dispatch}=useContext(todoDispatchContext)
    return(
        <>
        <div className="flex items-center mb-7 w-[100%] mx-auto ">
        <input type="text"  value={input} className="py-[0.5rem] placeholder:text-[#ffffff4d] px-[1rem] outline-none  bg-transparent border-[1px] border-[#8758ff] text-[#fff]  w-[75%]" onChange={(e)=>{
            setInput(e.target.value)
        }} placeholder="What are You doing Today?" />
        <button className="text-white p-[0.7rem] w-[25%] text-sm hover:bg-[#7442fc] cursor-pointer  bg-[#8359FB]" onClick={()=>{
            if(!input){
                window.alert("please enter a text")
            }
            else{
                dispatch({type:"addTodo",payload:{text:input}})
                setInput("")
            }}}>Add Task</button>
        </div>
        </>
    )
}
export default TodoInput