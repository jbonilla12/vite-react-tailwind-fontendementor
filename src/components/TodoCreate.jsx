import { useState } from "react"

const TodoCreate = ({createTodo}) => {
    const [title, setTitle] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!title.trim()){
            return setTitle('')
        }
        createTodo(title)
        setTitle('')

    } 
    return(
        <form className="flex 
                        gap-4 
                        items-center 
                        bg-white 
                        rounded-md 
                        overflow-hidden 
                        py-4
                        px-4
                        mt-8
                        dark:bg-gray-800"
                onSubmit={handleSubmit}>
          <span className="rounded-full 
                            border-2
                            mx-4 
                            h-5
                            w-5 
                            inline-block 
                            px-2 
                            py-2">
          </span>
          <input 
            className="w-full
                    dark:bg-gray-800
                      text-gray-400
                      outline-none"
            type="text"
            value={title} 
            placeholder="Create a new todo..."
            onChange={(e)=>setTitle(e.target.value)} 
          />
        </form>
    )
 }
 export default TodoCreate;