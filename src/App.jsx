import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./views/Home"
import Project from "./views/Project"
import { useEffect, useState } from "react"
import { isWalletConnected } from "./services/blockchain"
import { ToastContainer } from "react-toastify"
import Chat from './views/Chat'
import { checkAuthState } from "./CometChat"

const App = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(async() => {
    checkAuthState()
    await isWalletConnected()
    console.log('Blockchain loaded')
    setLoaded(true)
  }, [])

  return (
    <div className="min-h-screen relative">
      <Header />
      {loaded ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/chats/:id" element={<Chat />} />
        </Routes>
      ) : null}

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default App
