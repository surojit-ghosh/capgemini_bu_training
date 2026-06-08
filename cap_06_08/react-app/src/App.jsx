import { useState, useEffect } from "react"
import TechnoCard from "./components/TechnoCard"
import TechnoPager from "./components/TechnoPager"

const App = () => {
  const [page, setPage] = useState("card")
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleNavigate = () => {
    setLoading(true)
    setProgress(0)
  }

  useEffect(() => {
    if (!loading) return
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer)
          setLoading(false)
          setPage("pager")
          return 100
        }
        return p + 1
      })
    }, 25);
    
    return () => clearInterval(timer)
  }, [loading])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-80l">
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-[#003F61] rounded-full transition-none"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-sm text-[#5f6b7a] mt-2">Loading TechnoPager... {progress}%</p>
        </div>
      </div>
    )
  }

  return page === "card" ? (
    <TechnoCard onNavigate={handleNavigate} />
  ) : (
    <TechnoPager />
  )
}

export default App
