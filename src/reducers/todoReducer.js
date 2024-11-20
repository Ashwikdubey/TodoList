function todoReducer(state,action){
if(action.type==="addTodo"){
    const text=action.payload.text;
    return[...state,{todoText:text,isFinished:false,id:state.length+1}]
}
if(action.type=="deleteTodo"){
    const todo=action.payload.todo;
    const updatedList=state.filter((t)=>t.id!=todo.id)
    return updatedList
}
if(action.type=="editTodo"){
    const todo=action.payload.todo;
    const text=action.payload.editText;
    const updatedList=state.map((t)=>{
        if(t.id==todo.id){
            t.todoText=text;
        }
        return t
    })
    return updatedList
}
if(action.type=="updateFinished"){
    const todo=action.payload.todo
    const value=action.payload.updatedFinished;
    console.log(value)
    const updatedList=state.map((t)=>{
        if(t.id==todo.id){
            t.isFinished=value
        }
        return t
    })
    return updatedList
}
}
export default todoReducer