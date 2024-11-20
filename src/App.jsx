import { useReducer } from "react"
import Todo from "./components/Todo/Todo"
import TodoInput from "./components/TodoInput/TodoInput"
import TodoList from "./components/TodoList/TodoList"
import todoContext from "./context/todoContext"
import TodoDispatchContext from "./context/todoDispatchContext"
import todoReducer from "./reducers/todoReducer"

function App() {
  const[list,dispatch]=useReducer(todoReducer,[{todoText:"hello",id:1,isFinished:true}])

  return (
    <div className="bg-[#1B1A41]  flex flex-col  rounded-sm shadow-xl h-[100vh] container mx-auto p-6">
      <h1 className="text-center text-white capitalize mb-4 text-[1.65rem]">Get things done!</h1>
       <todoContext.Provider value={{list}}>
      <TodoDispatchContext.Provider value={{dispatch}}>
      <TodoInput/>
      <TodoList/>
      </TodoDispatchContext.Provider>
    </todoContext.Provider>
    </div>
  )
}

export default App
