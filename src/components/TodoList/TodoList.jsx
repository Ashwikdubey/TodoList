import { useContext, useReducer, useState } from "react"
import Todo from "../Todo/Todo"
import todoContext from "../../context/todoContext"
import todoDispatchContext from "../../context/todoDispatchContext"

function TodoList(){

const {list}=useContext(todoContext)
const {dispatch}=useContext(todoDispatchContext)
const[filter,setFilter]=useState("all")
console.log(list)

    return(
        <>
        <div className="flex gap-6 mb-7 items-center">
            <button onClick={()=>setFilter("all")} className="py-[0.3rem] px-4 text-sm rounded-sm bg-[#8758ff] text-white hover:bg-[#7442fc] cursor-pointer">All</button>
            <button onClick={()=>setFilter("completed")} className="py-[0.3rem] px-4 text-sm rounded-sm text-white bg-[#8758ff] hover:bg-[#7442fc] cursor-pointer">Completed</button>
            <button onClick={()=>setFilter("pending")} className="py-[0.3rem] px-4 cursor-pointer text-sm text-white rounded-sm bg-[#8758ff] hover:bg-[#7442fc]">Pending</button>
        </div>
        
        {list&&list.map((t)=>{
         if(filter=="all"){
         return(
         <Todo 
        key={t.id} 
        todoText={t.todoText}
        isFinished={t.isFinished}
        onDelete={()=>dispatch({type:"deleteTodo",payload:{todo:t}})}
        onEdit={(text)=>dispatch({type:"editTodo",payload:{todo:t,editText:text}})}
        onFinished={(updatedValue)=>dispatch({type:"updateFinished",payload:{todo:t,updatedFinished:updatedValue}})}/>)}
        else if(filter=="completed"){
            if(t.isFinished==true){
                return(
                    <Todo 
                    key={t.id} 
                    todoText={t.todoText}
                    isFinished={t.isFinished}
                    onDelete={()=>dispatch({type:"deleteTodo",payload:{todo:t}})}
                    onEdit={(text)=>dispatch({type:"editTodo",payload:{todo:t,editText:text}})}
                    onFinished={(updatedValue)=>dispatch({type:"updateFinished",payload:{todo:t,updatedFinished:updatedValue}})}/>
                )
            }
        }
        else{
            if(t.isFinished==false){
                return(
                    <Todo 
                    key={t.id} 
                    todoText={t.todoText}
                    isFinished={t.isFinished}
                    onDelete={()=>dispatch({type:"deleteTodo",payload:{todo:t}})}
                    onEdit={(text)=>dispatch({type:"editTodo",payload:{todo:t,editText:text}})}
                    onFinished={(updatedValue)=>dispatch({type:"updateFinished",payload:{todo:t,updatedFinished:updatedValue}})}/>
                )
            }
        }})}
        </>
    )
}
export default TodoList