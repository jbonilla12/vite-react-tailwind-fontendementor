import CrossIcon from "./components/icons/CrossIcon"
import MoonIcon from "./components/icons/MoonIcon"

const App= () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] 
                    bg-no-repeat 
                    bg-contain 
                    min-h-screen 
                    bg-gray-300">
      <header className="container mx-auto px-4 pt-8 mb-5">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.5em]">Todo</h1>
          <button>
            <MoonIcon/>
          </button>
        </div>
        <form className="flex 
                        gap-4 
                        items-center 
                        bg-white 
                        rounded-md 
                        overflow-hidden 
                        py-2
                        mt-8">
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
                      text-gray-400
                      outline-none"
            type="text" 
            placeholder="Create a new todo..." />
        </form>
      </header>
      <main className="container mx-auto px-4">
        <div className="bg-white rounded">
        <article className=" flex gap-4 py-4 border-b px-4">
            <button className="flex-none inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="text-gray-400 grow">Complete online javascript course</p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article>
          <article className=" flex gap-4 py-4 border-b px-4">
            <button className="flex-none inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="text-gray-400 grow">Complete online javascript course</p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article>
          <article className=" flex gap-4 py-4 border-b px-4">
            <button className="flex-none inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="text-gray-400 grow">Complete online javascript course</p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article>
          <section className="px-4 py-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear complete</button>
          </section>
        </div>
      </main>
        <section className="container mx-auto px-4 mt-8">
          <div className="p-4 rounded-md flex justify-center bg-white gap-4">
            <button className="text-blue-600">All</button>
            <button className="hover:text-blue-600">Active</button>
            <button className="hover:text-blue-600">Completed</button>
          </div>
        </section>
        <p className=" text-center mt-8">Drag and drop</p>
    </div>
  )
}

export default App
