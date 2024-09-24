import { useData } from "../Context/DataContext"
import DateInput from "./DateInput"

const DateRange = () => {
  const { inicio, setInicio, final, setFinal } = useData()

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Start"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <DateInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  )
}

export default DateRange
