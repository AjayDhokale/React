import { useState } from "react"
import TodoList from "./components/TodoList"
import MyContext from "./MyContext"


function App() {

  const [allTodos, setAllTodos] = useState([
    {
      id: 1,
      todoText: 'Go to Market'
    },
    {
      id: 2,
      todoText: 'Read any Book'
    },
  ])



  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('MyTodos'));
    if (savedTodos && savedTodos.length > 0) {
      setAllTodos(savedTodos);
    }
  }, []);


  const updateLocalStorage = (arr) => {
    localStorage.setItem('MyTodos', JSON.stringify(arr))
  }

  const showLocalStorage = () => {
    JSON.parse(localStorage.getItem('MyTodos'))
  }

  return (
    <>
      <MyContext.Provider value={{ allTodos, setAllTodos, updateLocalStorage, showLocalStorage }}>
        <TodoList />
      </MyContext.Provider>
    </>
  )
}

export default App
