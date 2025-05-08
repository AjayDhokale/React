import Login from "./Login"
import SignUp from "./SignUp"

function App() {

  return (
    <>
      <div className="flex justify-center items-center gap-10 h-screen bg-[#5c87b2] ">
        <SignUp />
        <Login />
      </div>
    </>
  )
}

export default App