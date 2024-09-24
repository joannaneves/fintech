import React from "react"
import { useLocation } from "react-router-dom"
import DateRange from "./DateRange"
import Meses from "./Meses"

const Header = () => {
  const [title, setTitle] = React.useState("Resumo")
  const location = useLocation()
  React.useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Resume")
      document.title = "Fintech | Resume"
    } else if (location.pathname === "/vendas") {
      setTitle("Sales")
      document.title = "Fintech | Sales"
    }
  }, [location])

  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Meses />
    </header>
  )
}

export default Header
