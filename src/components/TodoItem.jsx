import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/CrossIcon";
const TodoItem = ({todo, removeTodo, updateTodo}) => { 
   const  {id , title, completed} = todo;
   
   
    return(
        <article className=" flex gap-4 py-4 border-b px-4 dark:bg-gray-800 dark:text-gray-300">
            <button className={
                completed ? "h-5 w-5 rounded-full border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
                : "inline-block h-5 w-5 rounded-full border-2"}
                onClick={()=>updateTodo(id)}>
                { 
                completed && <CheckIcon/>
                }
            </button>
            <p className={`text-gray-400 grow ${completed && "line-through"}`}>{title}</p>
            <button 
                className="flex-none"
                onClick={()=>removeTodo(id)}>
              <CrossIcon/>
            </button>
        </article>
    )
 }
 export default TodoItem;