const TodoFilter = ({changeFilter}) => { 
    return (
        <section className="container mx-auto mt-8 dark:bg-gray-800">
          <div className="p-4 rounded-b-md flex justify-center bg-white gap-4 dark:bg-gray-800">
            <button 
              className="text-blue-600"
              onClick={()=>changeFilter('all')}>All</button>
            <button 
              className="hover:text-blue-600"
              onClick={()=>changeFilter('active')}>Active</button>
            <button 
              className="hover:text-blue-600"
              onClick={()=>changeFilter('completed')}>Completed</button>
          </div>
        </section>
    )
 }
 export default TodoFilter