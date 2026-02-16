import ReactDOM from "react-dom/client"
import Lenis from "lenis"
import { useEffect } from "react"
import HomePage from "./screen/HomePage"
import "./screen/index.css"

function App() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return <HomePage />
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <App />
)
