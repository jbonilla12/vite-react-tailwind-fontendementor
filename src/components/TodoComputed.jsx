const TodoComputed = ({cantidad, clearComplete}) => { 
    return(
        <section className="px-4 
                            py-4 
                            flex 
                            justify-between 
                            bg-white 
                            rounded-b-md 
                            dark:bg-gray-800 
                            transition-all 
                            duration-1000">
        <span className="text-gray-400">{cantidad} items left</span>
        <button 
          className="text-gray-400"
          onClick={()=>clearComplete()}>Clear complete</button>
      </section>
    )
 }
 export default TodoComputed;