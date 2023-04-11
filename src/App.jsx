import { useState } from "react"
import Header from "./components/Header"
import TodoCreate from "./components/TodoCreate"
import TodoList from "./components/TodoList"
import TodoComputed from "./components/TodoComputed"
import TodoFilter from "./components/TodoFilter"

const initialStateTodo =[
  { id: 1, title: "Complete online Javascript", completed: true },
  { id: 2, title: "Go to the gym", completed: true },
  { id: 3, title: "Go to Starbucks", completed: false },
  { id: 4, title: "Coding todos", completed: false },
  { id: 5, title: "Go to work", completed: false },
]
const App= () => {
  const [todos, setTodo] = useState(initialStateTodo)
  const [filtro, setFiltro] = useState('all')
  
  const createTodo=(title)=>{
    const newTodo = {
      id: Date.now(),
      title: title,
      all: false
    }
    setTodo([...todos, newTodo])
  }
  const removeTodo = (id)=>{
    setTodo(todos.filter(item=> item.id!==id))
  }

  const updateTodo = (id) =>{
    setTodo(todos.map(
      todo=> todo.id === id ? {...todo, completed: !todo.completed}: todo
    ))
  }

  const filterTodos = ()=>{
      switch(filtro){
        case 'all':
          return todos;
        case 'active':
          return todos.filter(todo=> !todo.completed);
        case 'completed':
          return todos.filter(todo=> todo.completed);
        default:
          return todos;
      }
  }

  const changeFilter = (filter)=>{ setFiltro(filter)}

  const ComputedItemsLeft = todos.filter(todo=> todo.completed!==false).length
  const clearComplete =()=>{
    setTodo(todos.filter(todo=> todo.completed!==true))
  }
  

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')]
                    dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] 
                    bg-no-repeat 
                    bg-contain 
                    min-h-screen 
                    bg-gray-300
                    dark:bg-gray-600">
      <Header/>                      
      <main className="container mx-auto px-4">
        <TodoCreate createTodo={createTodo}/>
        <TodoList todos={filterTodos()} removeTodo={removeTodo} updateTodo={updateTodo}/>
        <TodoComputed cantidad={ComputedItemsLeft} clearComplete={clearComplete}/>
        <TodoFilter changeFilter={changeFilter}/>
      </main>             
      
      <p className=" text-center mt-8 dark:text-gray-400">Drag and drop</p>
    </div>
  )
}

export default App
